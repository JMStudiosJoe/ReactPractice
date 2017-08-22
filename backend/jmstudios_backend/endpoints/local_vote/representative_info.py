import json
from flask import request, make_response, request

from jmstudios_backend import app
from jmstudios_backend.local_vote_api.local_vote_matters import LocalVoteMattersAPI


@app.route('/api/local_vote_matters/representative_info', methods=['POST', 'OPTIONS'])
def get_address():
    address = json.loads(list(request.form.keys())[0])['address']
    local_vote_api = LocalVoteMattersAPI()
    response = local_vote_api.get_representative_info(address)

    resp = make_response(json.dumps(response))
    return resp
