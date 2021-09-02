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

        return render_template('index.html', title='Nest Sleepers | Home')

@bp.route('/review', methods=['POST'])
def review():
    try:
        print("Entry")

        name = request.form['name']
        review = request.form['review']
        if not name or not review:
            print("empty fields")
            message = "Empty Fields"
            return jsonify(message)
        else:
            post = Reviews(name=name,review=review)
            db.session.add(post)
            db.session.commit()

            message = "Completed"
            return jsonify(message)

    except:
        print("Failed")
        message = "Uncompleted"
        return jsonify(message)
