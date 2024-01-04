from db.db import cur
from models.products import Products 
from lib.randomId import idRandom

def get_products():
    cur.execute("SELECT * FROM products;")
    return cur.fetchall()

def insert_products(product: Products):
    cur.execute("SELECT * FROM sessions;")
    valid = cur.fetchall()
    valid[product.idSession -1]

    idProduct = idRandom(30)
    cur.execute("INSERT INTO products (idProduct, name, description, price, image, idSession, idUser) VALUES(?, ?, ?, ?, ?, ?, ?)",(idProduct, product.name, product.description, product.price, product.idSession, product.idUser))
    
    cur.execute("SELECT * FROM product WHERE idProduct = ?", (idProduct))
    return cur.fetchall()

