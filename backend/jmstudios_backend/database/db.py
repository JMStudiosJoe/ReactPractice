import sqlalchemy
from jmstudios_backend.database.engine import Engine
from sqlalchemy.orm import sessionmaker
from jmstudios_backend.database.models.team_member import TeamMember


def connect(user, password, db, host='localhost', port=5432):
    url = 'postgresql://{}:{}@{}:{}/{}'
    url = url.format(user, password, host, port, db)
    con = sqlalchemy.create_engine(url, client_encoding='utf8')
    meta = sqlalchemy.MetaData(bind=con, reflect=True)

    Session.initialize(con)

    db_engine = Engine(meta, con)
    return con, meta


class Session(object):
    session = None
    connection = ''

    @classmethod
    def initialize(cls, connection):
        if cls.session is None:
            session = sessionmaker(bind=connection)
            cls.connection = connection
            cls.session = session()

    @classmethod
    def get_session(cls):
        return cls.session

    @classmethod
    def add_to_session(cls, data):
        cls.session.add(data)

    @classmethod
    def commit_session(cls):
        cls.session.commit()
