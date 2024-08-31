from config import db
class History(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    storytelling = db.Column(db.Text, nullable=False)
    history = db.Column(db.Text, nullable=False)
    event = db.Column(db.String(100), nullable=False)
    visi = db.Column(db.Text, nullable=False)
    misi = db.Column(db.Text, nullable=False)
    
    def ab_json(self):
        return {
            "id": self.id,
            "storytelling": self.storytelling,
            "history": self.history,
            "event": self.event,
            "visi": self.visi,
            "misi": self.misi
        }