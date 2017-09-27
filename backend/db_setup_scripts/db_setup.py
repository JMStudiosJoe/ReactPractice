from jmstudios_backend.database.base import Base
from jmstudios_backend.database.models.team_member import TeamMember
from jmstudios_backend.database.models.links import Link
from jmstudios_backend.database.models.images import Image
from jmstudios_backend.database.models.projects import Project
from jmstudios_backend.database import db
from db_setup_scripts.setup_data.image_data import images
from db_setup_scripts.setup_data.projects_data import projects


meta, con = db.connect('jmstudios', 'jmstudios', 'jmstudios')

Base.metadata.drop_all(meta, checkfirst=False)
Base.metadata.create_all(meta)

def initialize_team_members():
    image_name = 'profilepic.jpg'
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
    create_link_with_member_id(member_id)

def create_link_with_member_id(member_id):
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


def initialize_images():
    for data in images:
        Image.create_new_image(**data)

def initialize_projects():
    for data in projects:
        Project.create(**data)


initialize_images()
initialize_team_members()
initialize_projects()
