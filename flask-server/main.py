from flask import Flask, jsonify, request, current_app
from config import mail, app, db  
from models import Blog
from werkzeug.exceptions import BadRequest
from contactmodels import Contact
from aboutmodels import History
from homecontact import HomeContact
from flask_mail import Mail, Message
from getintouch import dbGetInTouch
from articlemodels import ArticleModels
from eventmodels import dbEventDetail

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
    
# GET IN TOUCH

@app.route('/intouch', methods=["GET"])
def get_intouch():
    try:
        get_in_touches = dbGetInTouch.query.all()
        get_in_data = [item.to_dict_get_in_touch() for item in get_in_touches]
        return jsonify({
            "messages": get_in_data
        }), 200
    except Exception as e:
        current_app.logger.error(f"Error fetching data: {str(e)}")
        return jsonify({
            "message": "Internal server error"
        }), 500

@app.route('/create_intouch', methods=["POST"])
def create_get_in_touch():
    try:
        data = request.get_json()
        required_fields = ["firstname", "lastname", "email", "subject", "messages"]

        for field in required_fields:
            if field not in data or not data[field]:
                raise BadRequest(f"{field.replace('_', ' ').title()} is required")

        firstname = data["firstname"]
        lastname = data["lastname"]
        email = data["email"]
        subject = data["subject"]
        community = data.get("community", "")
        purpose = data.get("purpose", "")
        messages = data["messages"]

        if '@' not in email:
            raise BadRequest("Invalid email address")

        new_get_touch = dbGetInTouch(
            firstname=firstname,
            lastname=lastname,
            email=email,
            subject=subject,
            community=community,
            purpose=purpose,
            messages=messages
        )
        
        new_get_touch.save()  
        return jsonify({
            "message": "Data successfully created",
            "data": new_get_touch.to_dict_get_in_touch()
        }), 201

    except BadRequest as e:
        current_app.logger.warning(f"BadRequest: {str(e)}")
        return jsonify({
            "message": str(e)
        }), 400
    except Exception as e:
        current_app.logger.error(f"Exception: {str(e)}")
        db.session.rollback()
        return jsonify({
            "message": "Internal server error",
            "details": str(e)
        }), 500

@app.route('/article', methods=["GET"])
def article_GET():
    try:
        get_article_data = ArticleModels.query.all()
        get_saved_article = [item.blog_models_to_json() for item in get_article_data]
        return jsonify({
            "message": get_saved_article
        }), 200
    except Exception as e:
        current_app.logger.error(f"error fetching data: {str(e)}")
        return jsonify({
            "messages": "internal server error"
        })
        
# EVENT DETAIL BACKEND AND API GATEWAY (CALLED)

@app.route('/event', methods=["GET"])
def events_get_data():
    try:
        get_event_data = dbEventDetail.query.all()
        get_saved_event_detail = [item.to_dict_events_detail_json() for item in get_event_data]
        
        if not get_saved_event_detail:  # Jika daftar kosong
            return jsonify({
                "message": "Data belum adai!"
            }), 404
        
        return jsonify({
            "message": "Data fetched successfully",
            "data": get_saved_event_detail
        }), 200
    except Exception as e:
        current_app.logger.error(f"Error fetching data: {str(e)}")
        return jsonify({
            "message": "Internal server error"
        }), 500

@app.route('/event/<int:event_detail_id>', methods=["GET"])
def events_get_data_by_id(event_detail_id):
    get_event_id = dbEventDetail.query.get(event_detail_id)
    if not get_event_id:
        return jsonify({
            "message": "Event detail ID not found"
        }), 404  # Gunakan 404 untuk not found

    return jsonify({
        "id": get_event_id.id,
        "name_events": get_event_id.name_events,
        "declare_events_begin": get_event_id.declare_event_begin,
        "category_events": get_event_id.category_event,
        "purpose_events": get_event_id.purpose_event,
        "community_event": get_event_id.community_event
    }), 200

    
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5001)
