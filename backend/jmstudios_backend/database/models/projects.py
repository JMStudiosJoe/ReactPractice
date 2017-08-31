from sqlalchemy import Column, Integer, String, ForeignKey
from jmstudios_backend.database.base import Base
from jmstudios_backend.database.session import Session


class Project(Base):
    __tablename__ = 'project'

    id = Column(Integer, primary_key=True)
    name = Column(String(60))
    position = Column(Integer)
    description = Column(String(300))
    problem = Column(String(300))
    solutions = Column(String(300))
    github_url = Column(String(100))
    sample_project_name = Column(String(60))

    @classmethod
    def get_all(cls):
        all_projects = Session.get_session().query(cls).all()
        projects = [project.json() for project in all_projects]
        return projects

    def json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'problem': self.problem,
            'solutions': self.solutions,
            'sample_project_name': self.sample_project_name,
            'github_url': self.github_url
        }
