class MockData():

    @classmethod
    def get_team_member_mock(cls):
        return dict(
            first_name='test',
            last_name='testing',
            title='test title',
            description='test description',
            linked_in_url='linked in url test',
            github_url='test github url'
        )
