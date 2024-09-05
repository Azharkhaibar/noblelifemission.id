from config import db

class ArticleModels(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.LargeBinary, nullable=False)
    headline = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    author = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp()) 
    updated_at = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())
    
    def blog_models_to_json(self):
        return {
            "id": self.id,
            "img": self.img,
            "headline": self.headline,
            "description": self.description,
            "author": self.author
        }