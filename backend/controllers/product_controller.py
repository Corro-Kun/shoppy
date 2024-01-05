from db.db import cur, conn
from models.products import Products 
from lib.randomId import idRandom

def get_products():
    cur.execute("SELECT * FROM products;")
    return cur.fetchall()

def get_products_by_id_session(id_session: int):
    cur.execute("SELECT * FROM products WHERE idSession = ?",(id_session,))
    return cur.fetchall()

def get_product_by_id(id_product: str):
    cur.execute("SELECT * FROM products WHERE idProduct = ?",(id_product,))
    return cur.fetchall()

def insert_products(product: Products, id):
    cur.execute("SELECT * FROM sessions;")
    valid = cur.fetchall()
    valid = valid.json()

    if(len(valid) == 0):
        pass
    else:
        idProduct = idRandom(30)

        try:
            cur.execute("INSERT INTO products (idProduct, name, description, price, image, idSession, idUser) VALUES(?, ?, ?, ?, ?, ?, ?)",(idProduct, product.name, product.description, product.price, "xd",product.idSession, id,))
            conn.commit()
        except Exception as e:
            conn.rollback()

        cur.execute("SELECT * FROM products WHERE idProduct = ?", (idProduct))
        return cur.fetchall()

def put_products(id_product: str, product: Products):
    try:
        cur.execute("UPDATE products SET name=?, description=?, price=?, idSession=? WHERE idProduct=?",(product.name, product.description, product.price, product.idSession, id_product ,))
        conn.commit()
    except Exception as e:
        conn.rollback()

    return cur.execute("SELECT * FROM products WHERE idProduct = ?",(id_product,)).fetchall()

def delete_products(id_product):
    try:
        cur.execute("DELETE FROM products WHERE idProduct=?",(id_product,))
        conn.commit()
    except Exception as e:
        conn.rollback()
