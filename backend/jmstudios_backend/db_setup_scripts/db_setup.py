from jmstudios_backend.database.base import Base
from jmstudios_backend.database.models.team_member import TeamMember
from jmstudios_backend.database.models.images import Image
from jmstudios_backend.database import db
from jmstudios_backend.db_setup_scripts.setup_data.image_data import images


meta, con = db.connect('jmstudios', 'jmstudios', 'jmstudios')
image_path = 'jmstudios_backend/db_setup_scripts/setup_data/autum_trees.jpg'

#Base.metadata.drop_all()
#Base.metadata.create_all()

def initialize_team_members():
    joseph = dict(
        first_name='Joseph',
        last_name='Richardson',
        title='Co Founder',
        description='',
        linked_in_url='',
        github_url=''
        #image=Image()
    )

def initialize_images():
    for data in images:
        Image.create_new_image(**data)
