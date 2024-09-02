from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_mail import Mail

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:@localhost/noblelifemission"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587 
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'allionorap89@gmail.com'
app.config['MAIL_PASSWORD'] = 'allionorap8989@gmail.com'
app.config['MAIL_DEFAULT_SENDER'] = 'allionorap89@gmail.com'

mail = Mail(app)
db = SQLAlchemy(app)
