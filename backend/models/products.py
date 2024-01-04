from pydantic import BaseModel

class Products(BaseModel):
    name: str
    description: str
    price: float
    idSession: int
    idUser: str
    