from config import db

class Blog(db.Model):  
    id = db.Column(db.Integer, primary_key=True)  
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    author = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp()) 
    updated_at = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp()) 
    
    def to_json(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "author": self.author
        }
