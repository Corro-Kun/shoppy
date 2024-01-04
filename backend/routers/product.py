from fastapi import APIRouter
from controllers.product_controller import get_products, insert_products 
from models.products import Products

product_router = APIRouter()

@product_router.get("/products")
def products_get():
    return get_products()

@product_router.post("/products", response_model=Products)
def post_product(product: Products):
    return insert_products(product)
