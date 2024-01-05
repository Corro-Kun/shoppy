def get_id_user(token: str):
    header = {
        'Authorization': 'Bearer '+ token
    }

    r = requests.get("https://api.github.com/user", headers=header)
    response = r.json()

    return response.get("id") 
