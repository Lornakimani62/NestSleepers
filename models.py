from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()


class Reviews(db.Model):
    """Model for the reviews table"""
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    review = db.Column(db.String)