from config import db

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)  
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    messages = db.Column(db.Text, nullable=False)
    
    def ex_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "messages": self.messages
        }
