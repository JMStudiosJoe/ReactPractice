from jmstudios_backend.database.base import Base
from jmstudios_backend.database.models.team_member import TeamMember
from jmstudios_backend.database import db

class Engine():
    def __init__(self, meta, con):
        self.meta = meta
        self.con = con


