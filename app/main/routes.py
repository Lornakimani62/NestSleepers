from flask import render_template, session, flash, redirect, url_for, request,jsonify
from . import bp
from models import Reviews
from models import db



@bp.route('/', methods=['GET'])
def index():
    try:

        reviews = Reviews.query.order_by(Reviews.id).all()

        return render_template('index.html', title='Nest Sleepers | Home', reviews=reviews)
    except:

        return render_template('index.html', title='Nest Sleepers | Home', reviews=reviews)

@bp.route('/review', methods=['POST'])
def review():
    try:

        name = request.form['name']
        email = request.form['email']
        review = request.form['review']
        post = Reviews(name=name,email=email,review=review)
        db.session.add(post)
        db.session.commit()

        message = "Completed"
        return jsonify(message)

    except:

        message = "Uncompleted"
        return jsonify(message)
