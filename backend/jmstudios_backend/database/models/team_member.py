from sqlalchemy import Column, Integer, String
from jmstudios_backend.database.base import Base

class TeamMember(Base):
    __tablename__ = 'team_member'

    id = Column(Integer, primary_key=True)
    first_name = Column(String(30))
    last_name = Column(String(30))
    title = Column(String(30))
    description = Column(String(30))
