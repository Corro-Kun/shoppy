import random

CHARACTERS = "QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm123456789"

def idRandom(length: int):
    value = ""

    for i in range(length):
        value = value + CHARACTERS[random.randint(0, len(CHARACTERS))]

    return value

