from fastapi import FastAPI
from routers.session import session_router
from routers.product import product_router
from routers.auth import auth_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*']
)

app.include_router(session_router)
app.include_router(product_router)
app.include_router(auth_router)

@app.get("/")
def main_application():
    message = {
        'message': 'Rest Api made in FastAPI',
        'by' : 'Corro-Kun'
    }

    return message
