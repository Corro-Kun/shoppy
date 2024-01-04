from db.db import cur

def get_sessions():
    cur.execute("SELECT * FROM sessions;")
    return cur.fetchall()