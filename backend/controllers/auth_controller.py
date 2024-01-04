from config.config import CLIENT_ID, CLIENT_SECRET
from db.db import cur, conn
import requests

def auth_get(code: str):
    complet = f"client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&code={code}"
    r = requests.post("https://github.com/login/oauth/access_token?"+complet)
    return r.text

def profile_get(token: str):
    header = {
        'Authorization': 'Bearer '+ token
    }

    r = requests.get("https://api.github.com/user", headers=header)
    response = r.json()
       
    save_profile(response) 

    return response

def save_profile(response):
    cur.execute("SELECT * FROM user WHERE idUser=?;",(response.get("id"),))
    data = cur.fetchall()

    if(len(data) == 0):
        try:
            cur.execute("INSERT INTO user (idUser, nombreUser, avatar) values (?, ?, ?);", (response["id"], response["login"], response["avatar_url"],))
            conn.commit()
        except Exception as e:
            conn.rollback()
