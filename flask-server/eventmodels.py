from config import db
from sqlalchemy.exc import IntegrityError
from flask import current_app
from sqlalchemy import event
from sqlalchemy.orm import validates

class dbEventDetail(db.Model):
    __tablename__ = 'event_details' 

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name_events = db.Column(db.String(100), nullable=False)
    declare_event_begin = db.Column(db.String(100), nullable=False)
    category_event = db.Column(db.String(100), nullable=False)
    purpose_event = db.Column(db.String(100), nullable=False)
    community_event = db.Column(db.String(100))  # Perbaikan di sini

    def to_dict_events_detail_json(self):
        return {
            "id": self.id,
            "name_events": self.name_events,
            "declare_events_begin": self.declare_event_begin,
            "category_events": self.category_event,
            "purpose_events": self.purpose_event,
            "community_event": self.community_event
        }
