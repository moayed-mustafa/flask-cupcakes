from app import app
from models import db, Cupcake


db.drop_all()
db.create_all()

c1 = Cupcake(
    flavor="cherry",
    size="large",
    rating=5,
)

c2 = Cupcake(
    flavor="chocolate",
    size="small",
    rating=9,
    image="https://www.bakedbyrachel.com/wp-content/uploads/2018/01/chocolatecupcakesccfrosting1_bakedbyrachel.jpg"
)
c3 = Cupcake(
    flavor="vanilla",
    size="large",
    rating=8.5,
)
c4 = Cupcake(
    flavor="strawberry",
    size="small",
    rating=3.6,
    image="https://images.unsplash.com/photo-1576762754967-07bfbc37ecde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
)
c5 = Cupcake(
    flavor="rainbow",
    size="small",
    rating=5.9,
    image="https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
)

db.session.add_all([c1, c2, c3, c4, c5])
db.session.commit()