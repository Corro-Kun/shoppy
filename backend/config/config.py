from decouple import config

# conect database mariadb

USER_DB= config("USER_DB")
PASSWORD_DB= config("PASSWORD_DB")
HOST_DB= config("HOST_DB")
PORT_DB= int(config("PORT_DB"))
DATABASE= config("DATABASE")

# password the github auth

CLIENT_ID= config("CLIENT_ID") 
CLIENT_SECRET= config("CLIENT_SECRET") 
