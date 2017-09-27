import json
from flask import make_response

from jmstudios_backend import app
from jmstudios_backend.database.models.projects import Project


@app.route('/api/projects/get_all', methods=['GET'])
def handle_get_all_projects():
    all_projects = Project.get_all()

    response = {
        'projects': all_projects
    }
    resp = make_response(json.dumps(response))
    return resp
