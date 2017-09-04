from jmstudios_backend.database.base import Base
from jmstudios_backend.database.models.team_member import TeamMember
from jmstudios_backend.database.models.images import Image
from jmstudios_backend.database import db
from jmstudios_backend.db_setup_scripts.setup_data.image_data import images


meta, con = db.connect('jmstudios', 'jmstudios', 'jmstudios')
image_path = 'jmstudios_backend/db_setup_scripts/setup_data/autum_trees.jpg'

#Base.metadata.drop_all(meta)
#Base.metadata.create_all(meta)

def initialize_team_members():
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
    TeamMember.create(**joseph)

def initialize_images():
    for data in images:
        Image.create_new_image(**data)


initialize_images()
initialize_team_members()
