from flask import Flask, jsonify, request
from config import mail, app, db  
from models import Blog
from contactmodels import Contact
from aboutmodels import History
from homecontact import HomeContact
from flask_mail import Mail, Message

# get all blog data
@app.route('/blog', methods=["GET"])
def get_blog():
    blogs = Blog.query.all()
    json_blogs = list(map(lambda x: x.to_json(), blogs))  
    return jsonify({"blogs": json_blogs})

# get data by id
@app.route('/blog/<int:blog_id>', methods=["GET"])
def get_blogById(blog_id):
    blog = Blog.query.get(blog_id)
    if not blog:
        return jsonify({"message": "blog not found!"}), 400
        
    return jsonify({
        "id": blog.id,
        "title": blog.title,
        "content": blog.content,
        "author": blog.author,
        "created_at": blog.created_at.strftime("%Y-%m-%d %H:%M:%S")
            
    }), 200
        

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

# update
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

# contact
@app.route('/contact', methods=["GET"])
def get_contact():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.ex_json(), contacts))
    return jsonify({"contact": json_contacts})

@app.route('/contact/<int:contact_id>', methods=["GET"])
def get_contactById(contact_id):
    contact = Contact.query.get(contact_id)
    if not contact:
        return jsonify({"message": "not found id contact"}), 400
    return jsonify({
        "id": contact.id,
        "name": contact.name,
        "email": contact.email,
        "messages": contact.messages
    }), 200

# delete
@app.route('/delete_contact/<int:contact_id>', methods=["DELETE"])
def delete_contact(contact_id):
    contact = Contact.query.get(contact_id)
    if not contact:
        return ( jsonify({"message": "contact id not found!"}))
    db.session.delete(contact)
    db.session.commit()
    
    return jsonify({"message": "contact id berhasil di delete"})

# create contact
@app.route('/create_contact', methods=["POST"])
def create_contact():
    name = request.json.get("name")
    email = request.json.get("email")
    messages = request.json.get("messages")
    if not name or not email or not messages:
        return(
            jsonify({"message": "format tidak boleh kosong"})
        )
    
    new_contact = Contact(name=name, email=email, messages=messages)
    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    return jsonify({"message": "data contact berhasil di buat"}, 201)

# HISTORY

# HOME CONTACT
@app.route('/home_contact', methods=["GET"])
def GetHomeContact():
    getContactsHome = HomeContact.query.all()
    contact_home = list(map(lambda x: x.home_contact_json(), getContactsHome))
    return jsonify({"Home contacts": contact_home})


@app.route('/create_home_contact', methods=["POST"])
def createContactHome():
    firstname = request.json.get("firstname")
    email = request.json.get("email")
    if not firstname or not email:
        return (
            jsonify({"messages": "tidak boleh kosong"}), 400,
        )
    contact_home = HomeContact(firstname=firstname, email=email)
    try:
        db.session.add(contact_home)
        db.session.commit()
    
        msg = Message("Thank you for contacting us!", recipients=[email])
        msg.body = f"Dear {firstname},\n\nThank you for reaching out to us. We will get back to you shortly."
        
        mail.send(msg)
        
        return jsonify({"messages": "Kontak berhasil di kirim dan di buat"}), 201
    except Exception as e:
        return jsonify({"messages" : str(e)}), 400

@app.route('/home_contact/<int:contacthome_id>', methods=["GET"])
def get_contacthome(contacthome_id):
    getContactHome = HomeContact.query.get(contacthome_id)
    if not getContactHome:
        return jsonify({
            "message": "contact home id not found"
        }), 400
        
    return jsonify({
        "id": getContactHome.id,
        "firstname": getContactHome.firstname,
        "email": getContactHome.email,
    }), 200
      
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5001)
