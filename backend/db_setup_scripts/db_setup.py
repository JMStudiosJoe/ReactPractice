from jmstudios_backend.database.base import Base
from jmstudios_backend.database.models.team_member import TeamMember
from jmstudios_backend.database.models.links import Link
from jmstudios_backend.database.models.images import Image
from jmstudios_backend.database.models.projects import Project
from jmstudios_backend.database.db import Database
from setup_data.image_data import images
from setup_data.projects_data import projects


class InitialSetup():
    def __init__(self, db):
        meta, con = Database.connect_db('jmstudios', 'jmstudios', db)
        self.meta = meta
        self.con = con

    def reset_db(self):
        print(self.meta)
        Base.metadata.drop_all(self.meta)
        Base.metadata.create_all(self.meta)

    @classmethod
    def initialize_team_members(cls):
        image_name = 'me.jpg'
        joseph = dict(
            first_name='Joseph',
            last_name='Richardson',
            title='Co Founder',
            description='I make solutions for the challenges I take on.',
            linked_in_url='https://www.linkedin.com/in/joseph-richardson-97206953',
            github_url='https://github.com/JMStudiosJoe',
            image_name=image_name,
            image_id=Image.get_by_name(image_name)['id']
        )
        member_id = TeamMember.create(**joseph)
        cls.create_link_with_member_id(member_id)

    @classmethod
    def create_link_with_member_id(cls, member_id):
        github_link = dict(
                position=0,
                name='github',
                url='https://github.com/JMStudiosJoe',
                team_member_id=member_id
        )
        linkedin_link = dict(
                position=0,
                name='linkedin',
                url='https://www.linkedin.com/in/joseph-richardson-97206953',
                team_member_id=member_id
        )
        Link.create_list([github_link, linkedin_link])

    @classmethod
    def initialize_images(cls):
        for data in images:
            Image.create_new_image(**data)

    @classmethod
    def initialize_projects(cls):
        for data in projects:
            Project.create(**data)


db = InitialSetup('jmstudios')
db.reset_db()
InitialSetup.initialize_images()
InitialSetup.initialize_team_members()
InitialSetup.initialize_projects()


test_db = InitialSetup('test_db')
test_db.reset_db()
