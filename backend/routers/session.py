from fastapi import APIRouter
from controllers.session_controller import get_sessions

session_router = APIRouter()

@session_router.get("/sessions")
def sessions_get():
    return get_sessions()