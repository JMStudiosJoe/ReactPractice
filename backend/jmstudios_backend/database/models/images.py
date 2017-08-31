from sqlalchemy import Column, Integer, String
from jmstudios_backend.database.base import Base
from jmstudios_backend.database.session import Session


class Image(Base):
    __tablename__ = 'image'

    id = Column(Integer, primary_key=True)
    type = Column(String(30))
    name = Column(String(30))
    image_url = Column(String(100))

    @classmethod
    def get_by_id(cls, image_id):
        image = Session.get_session().query(cls).filter(self.id == image_id).first()
        return image.json()

    @classmethod
    def get_all(cls):
        images = Session.get_session().query(cls).all()
        json_images = [image.json() for image in images]
        return json_images

    def json(self):
        return {
            'id': self.id,
            'type': self.type,
            'name': self.name,
            'image_url': self.image_url
        }
