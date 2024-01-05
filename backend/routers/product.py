from fastapi import APIRouter, Request
from controllers.product_controller import get_products, get_products_by_id_session , get_product_by_id , insert_products , put_products, delete_products
from lib.get_id import get_id_user
from models.products import Products

product_router = APIRouter()

@product_router.get("/products")
def products_get():
    return get_products()

@product_router.get("/products/{id_session}")
def products_get_by_id_category(id_session: int):
    return get_products_by_id_session(id_session)

@product_router.get("/product/{id_product}")
def product_get_by_id(id_product: str):
    return get_product_by_id(id_product)

@product_router.post("/products", response_model=Products)
def post_product(product: Products, request: Request):
    token = request.headers.get("authorization")
    return insert_products(product, get_id_user(token))

@product_router.put("/product/{id_product}", response_model=Products)
def product_put(id_product: str, product: Products):
    return put_products(id_product, product)

@product_router.delete("/product/{id_product}")
def product_delete(id_product: str):
    return delete_products(id_product)
