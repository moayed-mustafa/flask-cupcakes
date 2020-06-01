"""Models for Cupcake app."""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
def connect_db(app):
    db.app = app
    db.init_app(app)




class Cupcake(db.Model):
    """ model to meror the cupcake table """

    tablename =" __cupcake__"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    flavor = db.Column(db.Text, nullable=False)
    size = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Float, nullable=False)
    image = db.Column(db.Text, nullable=False, default="https://images.unsplash.com/photo-1583625494781-8f80e36bd727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")

    def cupcake_details(self):
        return f"this is a {self.flavor} cupcake that is {self.size} and has a rating of {self.rating}"

    def serialize(self):
        return {
            'id': self.id,
            'flavor': self.flavor,
            'size': self.size,
            'rating': self.rating,
            'image': self.image

        }



