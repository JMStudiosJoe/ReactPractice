class MockData():

    @classmethod
    def get_team_member_mock(cls):
        return dict(
            first_name='test',
            last_name='testing',
            title='test title',
            description='test description',
        )

    @classmethod
    def get_project_mock(cls):
        return dict(
            name='test',
            position=0,
            problem='test problem',
            description='test description',
            solutions='test solutions',
            github_url='test gethub_url',
            sample_project_name='test sample_project_name',
        )

    @classmethod
    def get_link_mock(cls):
        return dict(
            name='test link name',
            position=0,
            url='testurl',
        )
