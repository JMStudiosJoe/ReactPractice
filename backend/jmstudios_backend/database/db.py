import sqlalchemy
from jmstudios_backend.database.engine import Engine
from sqlalchemy.orm import sessionmaker
from jmstudios_backend.database.models.team_member import TeamMember

Session = sessionmaker()
session = None

def connect(user, password, db, host='localhost', port=5432):
    url = 'postgresql://{}:{}@{}:{}/{}'
    url = url.format(user, password, host, port, db)
    print(url)
    con = sqlalchemy.create_engine(url, client_encoding='utf8')
    meta = sqlalchemy.MetaData(bind=con, reflect=True)

    Session.configure(bind=con)
    session = Session()
    member = TeamMember(first_name='joseph')
    import pdb; pdb.set_trace()

    db_engine = Engine(meta, con)
    return con, meta


def get_session():
    return session


def add_to_session(data):
    session.add(data)


def commit_session():
    session.commit()
