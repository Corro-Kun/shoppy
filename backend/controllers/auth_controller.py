from config.config import CLIENT_ID, CLIENT_SECRET
import requests

def auth_get(code: str):
    complet = f"client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&code={code}"
    r = requests.post("https://github.com/login/oauth/access_token?"+complet)
    return r.text
