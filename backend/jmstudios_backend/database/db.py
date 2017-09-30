import sqlalchemy
from jmstudios_backend.database.engine import Engine
from jmstudios_backend.database.session import Session
from jmstudios_backend.database.models.team_member import TeamMember
from jmstudios_backend.database.models.images import Image
from jmstudios_backend.database.models.enigmas import Enigma
from jmstudios_backend.database.models.projects import Project

class Database():

    @classmethod
    def connect_db(cls, user, password, db, host='localhost', port=5432):

        url = 'postgresql://{}:{}@{}:{}/{}'
        url = url.format(user, password, host, port, db)

        print(url)
        con = sqlalchemy.create_engine(url, client_encoding='utf8')
        meta = sqlalchemy.MetaData(bind=con, reflect=True)

        Session.initialize(con)

        db_engine = Engine(meta, con)
        return con, meta
