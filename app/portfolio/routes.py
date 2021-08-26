from flask import render_template, session, flash, redirect, url_for, request,jsonify
from . import bp




@bp.route('/projects', methods=['GET'])
def view_all_projects():

    return render_template('portfolio.html', title='Nest Sleepers | Projects')

