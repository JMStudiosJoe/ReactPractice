from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from jmstudios_backend.database.base import Base
from jmstudios_backend.database.session import Session


class Enigma(Base):
    __tablename__ = 'enigmas'

    id = Column(Integer, primary_key=True)
    intro = Column(String(300))
    answer = Column(String(100))
    explicit = Column(Boolean)

    @classmethod
    def query_for_all(cls):
        return Session.get_session().query(cls).all()

    @classmethod
    def get_all(cls):
        all_enigmas = cls.query_for_all().all()
        enigmas = [enigma.json() for enigma in all_enigmas]
        return enigmas

    def json(self):
        return {
            'id': self.id,
            'intro': self.intro,
            'answer': self.answer,
            'explicit': self.explicit
        }
