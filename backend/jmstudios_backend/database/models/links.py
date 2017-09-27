from sqlalchemy import Column, Integer, String, ForeignKey
from jmstudios_backend.database.base import Base
from jmstudios_backend.database.session import Session


class Link(Base):
    __tablename__ = 'links'

    id = Column(Integer, primary_key=True)
    name = Column(String(60))
    position = Column(Integer)
    url = Column(String(600))
