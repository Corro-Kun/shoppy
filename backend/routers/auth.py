from fastapi import APIRouter, Request
from controllers.auth_controller import auth_get, profile_get

auth_router = APIRouter()

@auth_router.post("/auth/token/{code}")
def get_token(code: str):
    return auth_get(code)

@auth_router.get("/auth/profile")
def get_profile(request: Request):
    token = request.headers.get("authorization")
    return profile_get(token)
