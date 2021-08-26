from flask import Flask
from flask import render_template, session, flash, redirect, url_for, request,jsonify
from . import bp
from flask_mail import Message,Mail
from config import Config



@bp.route('/contacts', methods=['GET'])
def contacts():

    return render_template('contacts.html', title='Nest Sleepers | Contacts')

@bp.route('/sendEmail', methods=['POST'])
def send_email(config_class=Config):
    if request.method == "POST":
        try:

            app = Flask(__name__)
            app.config.from_object(config_class)
            app.config.update(dict(
                DEBUG = True,
                MAIL_SERVER = 'smtp.gmail.com',
                MAIL_PORT = 587,
                MAIL_USE_TLS = True,
                MAIL_USE_SSL = False,
                MAIL_USERNAME = 'nestsleepers75@gmail.com',
                MAIL_PASSWORD = '060412Jey!',
            ))
            mail = Mail(app)
            sms = request.form['message']
            subject = request.form['subject']
            sender = request.form['name']
            phone = request.form['phone']
            email = request.form['email']
            msg = Message(subject=subject, sender = 'Nest Sleepers Website', recipients = ['nestsleepers@gmail.com'])

            msg.html = render_template('emails.html', sms=sms,subject=subject,sender=sender,phone=phone,email=email)

            mail.send(msg)

            message = "Completed"

            return jsonify(message)
        except:
            message = "Uncompleted"

            return jsonify(message)  


