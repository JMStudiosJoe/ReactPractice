import unittest
from jmstudios_backend.database.db import Database

class UnitTests(unittest.TestCase):

    def setUp(self):
        print('setup test db')
        Database.connect_db('jmstudios', 'jmstudios', 'test_db')
        from tests.unittests.test_cases.team_test import TeamUnitTests
        from tests.unittests.test_cases.session_test import SessionUnitTests

    def tearDown(self):
        print('----- TEARING DOWN ---------')

    def test_setup(self):
        print('testing setup')


if __name__ == '__main__':
    unittest.main()
