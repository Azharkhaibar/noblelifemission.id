from config import db

class HomeContact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    
    def home_contact_json(self):
        return {
            "id": self.id,
            "firstname": self.firstname,
            "email": self.email
        }
    