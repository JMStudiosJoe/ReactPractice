from sqlalchemy.orm import sessionmaker


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
