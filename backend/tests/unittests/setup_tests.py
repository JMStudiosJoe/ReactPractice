import unittest
from jmstudios_backend.database.db import Database
from tests.unittests.test_cases.team_test import TeamUnitTests
from tests.unittests.test_cases.session_test import SessionUnitTests

def suite():
    Database.connect_db('jmstudios', 'jmstudios', 'test_db')
    suite = unittest.TestSuite()
    suite.addTest(TeamUnitTests())
    suite.addTest(SessionUnitTests())
    return suite

suite()
