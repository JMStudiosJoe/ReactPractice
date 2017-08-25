import sqlalchemy
from jmstudios_backend.database.engine import Engine
from sqlalchemy.orm import sessionmaker
from jmstudios_backend.database.models.team_member import TeamMember

Session = sessionmaker()

def connect(user, password, db, host='localhost', port=5432):
    url = 'postgresql://{}:{}@{}:{}/{}'
    url = url.format(user, password, host, port, db)
    print(url)
    con = sqlalchemy.create_engine(url, client_encoding='utf8')
    meta = sqlalchemy.MetaData(bind=con, reflect=True)

    Session.configure(bind=con)
    session = Session()
    member = TeamMember(first_name='joseph')
    # when added and commited here it saves to db but with global 
    # is being more difficult
    # import pdb; pdb.set_trace()

    db_engine = Engine(meta, con)
    return con, meta


def get_session():
    return Session()


def add_to_session(data):
    get_session().add(data)


def commit_session():
    get_session().commit()
