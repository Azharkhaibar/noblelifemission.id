from flask import jsonify, request
from config import app, db  
from models import Blog

# get all blog data
@app.route('/blog', methods=["GET"])
def get_blog():
    blogs = Blog.query.all()
    json_blogs = list(map(lambda x: x.to_json(), blogs))  
    return jsonify({"blogs": json_blogs})

# create post
@app.route('/create_blog', methods=["POST"])
def create_blog():
    title = request.json.get("title")
    content = request.json.get("content")
    author = request.json.get("author")
    
    if not title or not content or not author:
        return(
            jsonify({"message": "tidak boleh kosong"}), 400,
        )
    
    new_blog = Blog(title=title, content=content, author=author)
    # integrasi dnegan database
    try:
        db.session.add(new_blog)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "data blogs berhasil di post!"}), 201

@app.route('/update_blog/<int:blog_id>', methods=["PATCH"])
def update_blog(blog_id):
    blog = Blog.query.get(blog_id)
    if not blog:
        return jsonify({"message": "blog not found"}), 404
    
    data = request.json
    blog.title = data.get("title", blog.title)
    blog.content = data.get("content", blog.content)
    blog.author = data.get("author", blog.author) 
    
    db.session.commit()
    return jsonify({"message": "blog update"}), 200   

@app.route('/delete_blog', methods=["DELETE"])
def delete_blog(blog_id):
    blog = Blog.query.get(blog_id)
    if not blog:
        return jsonify({"message": "blog id not found"}), 400
    db.session.delete(blog)
    db.session.commit()
    
    return jsonify({"message": "blog berhasil di hapus"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5001)
