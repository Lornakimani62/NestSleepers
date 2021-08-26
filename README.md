# Ecommerce-Website-Version-2
This is the codebase for the Nest Sleepers Website

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites
For this project, you need:
* Python > 3.6
* Virtualenv > 20.0.0


### Installing
* Clone the repo:
```
https://gitlab.com/wazinsuretech/wazinsure-quotation-portals/underwriter-portal
```

* Set up and activate venv:
```
virtualenv venv
source venv/bin/activate
```

* Install the dependencies in the venv:
```
pip install -r requirements
```

* Run migrations and seed data:
```
# Initialize db
flask db init

# run migrations
flask db migrations

# upgrade db
flask db upgrade
```

* Run the server
```
FLASK_DEBUG=1 
flask run
```

