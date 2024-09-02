from config import db
from sqlalchemy.exc import IntegrityError
from flask import current_app
from sqlalchemy import event
from sqlalchemy.orm import validates

class dbGetInTouch(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    subject = db.Column(db.String(100), nullable=False)
    community = db.Column(db.String(100), nullable=True)  # Changed to nullable=True
    purpose = db.Column(db.String(100), nullable=True)     # Changed to nullable=True
    messages = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"<dbGetInTouch(id={self.id}, firstname={self.firstname}, lastname={self.lastname}, email={self.email}, subject={self.subject})>"

    @validates('email')
    def validate_email(self, key, email):
        if '@' not in email:
            raise ValueError("Invalid email address")
        return email

    def to_dict_get_in_touch(self):
        return {
            "id": self.id,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            "subject": self.subject,
            "community": self.community,
            "purpose": self.purpose,
            "messages": self.messages
        }

    def save(self):
        try:
            db.session.add(self)
            db.session.commit()
        except IntegrityError:
            db.session.rollback()
            current_app.logger.error('IntegrityError: Unable to save the entry.')
            raise

    def delete(self):
        db.session.delete(self)
        db.session.commit()

@event.listens_for(dbGetInTouch, 'after_insert')
def receive_after_insert(mapper, connection, target):
    current_app.logger.info(f"New entry added: {target.to_dict_get_in_touch()}")
