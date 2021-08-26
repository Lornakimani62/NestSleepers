from flask import Flask
from config import Config
from flask_session import Session
from models import db


sess = Session()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    app.config['DEBUG'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Lk@0724276722@localhost:5432/nestsleepersdb'
    db.init_app(app)

    # Register Blueprints
    from app.errors import bp as errors_bp
    app.register_blueprint(errors_bp)

    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    from app.portfolio import bp as portfolio_bp
    app.register_blueprint(portfolio_bp)

    from app.contacts import bp as contact_bp
    app.register_blueprint(contact_bp)
    
    return app
