from sqlalchemy import Column, Integer, String
from jmstudios_backend.database.base import Base
from jmstudios_backend.database.session import Session


class TeamMember(Base):
    __tablename__ = 'team_member'

    id = Column(Integer, primary_key=True)
    first_name = Column(String(30))
    last_name = Column(String(30))
    title = Column(String(30))
    description = Column(String(30))

    @classmethod
    def get_all(cls):
        team_members = Session.get_session().query(cls).all()
        team = [member.json() for member in team_members]
        return team

    def json(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'title': self.title,
            'description': self.description
        }
