from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, ForeignKey
from jmstudios_backend.database.base import Base
from jmstudios_backend.database.session import Session



class Link(Base):
    __tablename__ = 'links'

    id = Column(Integer, primary_key=True)
    name = Column(String(60))
    position = Column(Integer)
    url = Column(String(100))

    team_member_id = Column(Integer, ForeignKey('team_members.id'))

    team_member = relationship('TeamMember', back_populates='links')

    @classmethod
    def create_list(cls, links):
        new_ids = []
        for link in links:
            new_link = cls(**link)
            new_ids.append(new_link.id)
            Session.add_to_session(new_link)

        Session.commit_session()

        return new_ids

    @classmethod
    def create(cls, **args):
        link = cls(**args)
        Session.add_to_session(link)
        Session.commit_session()

        return link.id

    @classmethod
    def get_cls_query(cls):
        return Session.get_session().query(cls)

    def json(self):
        return {
            'id': self.id,
            'name': self.name,
            'url': self.url,
            'position': self.position
        }
