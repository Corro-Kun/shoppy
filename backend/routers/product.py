from fastapi import APIRouter
from controllers.product_controller import get_products, insert_products 
from models.products import Products

product_router = APIRouter()

@product_router.get("/products")
def products_get():
    return get_products()

@product_router.get("/products/{id_session}")
def products_get_by_id_category(id_session: int):
    pass

@product_router.get("/product/{id_product}")
def product_get_by_id(id_product: str):
    pass

@product_router.post("/products", response_model=Products)
def post_product(product: Products):
    return insert_products(product)

@product_router.put("/product/{id_product}")
def product_put(id_product: str):
    pass

@product_router.delete("/product/{id_product}")
def product_delete(id_product: str):
    pass
