from sqlalchemy import Column, Integer, String, ForeignKey
from jmstudios_backend.database.base import Base
from jmstudios_backend.database.session import Session


class TeamMember(Base):
    __tablename__ = 'team_member'

    id = Column(Integer, primary_key=True)
    first_name = Column(String(30))
    last_name = Column(String(30))
    title = Column(String(30))
    description = Column(String(30))
    linked_in_url = Column(String(60))
    github_url = Column(String(60))
    image_id = Column(Integer, ForeignKey('image.id'))


    @classmethod
    def get_all(cls):
        team_members = Session.get_session().query(cls).all()
        team = [member.json() for member in team_members]
        return team

    def get_image(self):
        from jmstudios_backend.database.models.images import Image
        return Image.get_by_id(self.image_id)

    def json(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'title': self.title,
            'description': self.description,
            'linked_in_url': self.linked_in_url,
            'github_url': self.github_url,
            'image': self.get_image()
        }
