from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS 
from flask import send_from_directory
import os

app = Flask(__name__)
CORS(app)

# Database setup
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'super-secret-key'  

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    
    
# Model to store contact form submissions
class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)

    def __init__(self, name, email, message):
        self.name = name
        self.email = email
        self.message = message
        

# Prayer Tracker Model  --> ATTENTION: CODE IS NOT BEING CALLED BY FRONTEND, PART OF AN ENHANCEMENT WHICH DIDN'T GO FORTH
class PrayerLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    date = db.Column(db.String(10), nullable=False)  # Format: YYYY-MM-DD
    prayers_completed = db.Column(db.String(100), nullable=False)  # Stores checked prayers as a comma-separated string

# Initialize the database
with app.app_context():
    db.create_all()

# Routes for login/register feature
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    # this checks to see if the username already exists
    existing_user = User.query.filter_by(username=data['username']).first()
    if existing_user:
        return jsonify({"message": "Username already exists."}), 400  # Returns 400 for bad request

    # if username doesn't exist, creates a new user
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(username=data['username'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully!"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({"message": "Login successful!", "token": access_token}), 200
    return jsonify({"message": "Invalid credentials!"}), 401


# Route to handle form submission for contact form
@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()  # Get data from the request

    # Extract fields from the form
    name = data.get('name')
    email = data.get('email')
    message_content = data.get('message')

    # Validate required fields
    if not name or not email or not message_content:
        return jsonify({"message": "All fields are required!"}), 400

    # Save the message to the database
    new_message = Message(name=name, email=email, message=message_content)
    db.session.add(new_message)
    db.session.commit()

    return jsonify({"message": "Your message has been sent successfully!"}), 201


# Route to save checked prayers, not lost upon reload, assigned to user token --> ATTENTION: CODE IS NOT BEING CALLED BY FRONTEND, PART OF AN ENHANCEMENT WHICH DIDN'T GO FORTH
@app.route('/prayer-tracker', methods=['POST'])
def save_prayer_log():
    data = request.get_json()
    user_id = data.get('user_id')  # Extracted from token on frontend
    date = data.get('date')  # Date selected by user
    prayers = data.get('prayers_completed')  # List of checked prayers

    # Find existing log or create a new one --> ATTENTION: CODE IS NOT BEING CALLED BY FRONTEND, PART OF AN ENHANCEMENT WHICH DIDN'T GO FORTH
    log = PrayerLog.query.filter_by(user_id=user_id, date=date).first()
    if log:
        log.prayers_completed = ','.join(prayers)
    else:
        new_log = PrayerLog(user_id=user_id, date=date, prayers_completed=','.join(prayers))
        db.session.add(new_log)

    db.session.commit()
    return jsonify({"message": "Prayer log saved successfully!"}), 200


# Route to fetch saved prayers for a particular date --> ATTENTION: CODE IS NOT BEING CALLED BY FRONTEND, PART OF AN ENHANCEMENT WHICH DIDN'T GO FORTH
@app.route('/prayer-tracker', methods=['GET'])
def get_prayer_log():
    user_id = request.args.get('user_id')  # Extracted from token on frontend
    date = request.args.get('date')  # Selected date

    # Fetch prayer log for the specific user and date --> ATTENTION: CODE IS NOT BEING CALLED BY FRONTEND, PART OF AN ENHANCEMENT WHICH DIDN'T GO FORTH
    log = PrayerLog.query.filter_by(user_id=user_id, date=date).first()
    prayers = log.prayers_completed.split(',') if log else []
    
    return jsonify({"prayers_completed": prayers}), 200


# Route to download database file to see contact form messages 

@app.route('/download-db', methods=['GET'])
def download_db():
    db_path = os.path.join(app.instance_path, 'users.db')  
    return send_from_directory(directory=os.path.dirname(db_path), 
                               path=os.path.basename(db_path), 
                               as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)