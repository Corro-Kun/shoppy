from fastapi import APIRouter
from controllers.auth_controller import auth_get

auth_router = APIRouter()

@auth_router.post("/auth/token/{code}")
def get_token(code: str):
    return auth_get(code)
