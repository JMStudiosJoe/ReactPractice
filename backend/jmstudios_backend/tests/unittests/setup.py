import unittest
from jmstudios_backend.tests.unittests.test_cases.team_test import TeamUnitTests
from jmstudios_backend.tests.unittests.test_cases.session_test import SessionUnitTests
from jmstudios_backend.database.db import Database


class UnitTests(unittest.TestCase):

    def setUp(self):
        Database.connect_db('jmstudios', 'jmstudios', 'test_db')

    def tearDown(self):
        print('----- TEARING DOWN ---------')


if __name__ == '__main__':
    unittest.main(exit=False)
