from jmstudios_backend.database.session import Session
import  jmstudios_backend.database.db
import unittest


class SessionUnitTests(unittest.TestCase):

    def setup(self):
        print('setup session')
        db.connect(test=True)

    def test_add_to_session(self):
        print(Session)
