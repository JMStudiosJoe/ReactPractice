import unittest
from jmstudios_backend.tests.unittests.test_cases.team_test import TeamUnitTests
from jmstudios_backend.tests.unittests.test_cases.session_test import SessionUnitTests


class UnitTests(unittest.TestCase):

    def test_setup(self):
        print(self)


if __name__ == '__main__':
    unittest.main(exit=False)
