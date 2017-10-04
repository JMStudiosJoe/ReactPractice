import unittest
from sqlalchemy.ext.declarative import declarative_base

from jmstudios_backend.database.db import Database
from tests.unittests.test_cases.team_test import TeamUnitTests
from tests.unittests.test_cases.session_test import SessionUnitTests
from tests.unittests.test_cases.project_test import ProjectUnitTests
from tests.unittests.test_cases.link_test import LinkUnitTests

def reset_test_db(meta):
    Base = declarative_base()
    Base.metadata.drop_all(meta)
    Base.metadata.create_all(meta)

def suite():
    meta, con = Database.connect_db('jmstudios', 'jmstudios', 'test_db')
    suite = unittest.TestSuite()
    suite.addTest(TeamUnitTests())
    suite.addTest(SessionUnitTests())
    reset_test_db(meta)
    return suite

print(__name__)
suite()
