from sqlalchemy import Column, Integer, String, ForeignKey
from jmstudios_backend.database.base import Base
from jmstudios_backend.database.session import Session


class Project(Base):
    __tablename__ = 'projects'

    id = Column(Integer, primary_key=True)
    name = Column(String(60))
    position = Column(Integer)
    description = Column(String(600))
    problem = Column(String(600))
    solutions = Column(String(600))
    github_url = Column(String(100))
    sample_project_name = Column(String(60))

    @classmethod
    def create(cls, **args):
        project = cls(**args)

        Session.add_to_session(project)
        Session.commit_session()

        return project.id

    @classmethod
    def session_query(cls):
        return Session.get_session().query(cls)

    @classmethod
    def get_all(cls):
        all_projects = cls.session_query().all()
        projects = [project.json() for project in all_projects]
        return projects

    def json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'problem': self.problem,
            'position': self.position,
            'solutions': self.solutions,
            'sample_project_name': self.sample_project_name,
            'github_url': self.github_url
        }
