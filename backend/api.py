from flask import Flask, make_response, request
import json
from urllib import request as url_request
from database import db
app = Flask(__name__)

@app.route('/api/local_vote_matters/elections_info', methods=['GET'])
def handle_elections():
    local_vote_api = LocalVoteMattersAPI()
    response = local_vote_api.get_all_elections_info()
    resp = make_response(json.dumps(response))
    return resp


@app.route('/api/local_vote_matters/representative_info', methods=['POST', 'OPTIONS'])
def get_address():
    address = json.loads(list(request.form.keys())[0])['address']
    local_vote_api = LocalVoteMattersAPI()
    response = local_vote_api.get_representative_info(address)

    resp = make_response(json.dumps(response))
    return resp


class RequestHandler():
    def __init__(self):
        self.encoder = 'utf8'

    def get_with_url(self, url):
        req = url_request.Request(url)
        response = url_request.urlopen(req)
        json_response = json.loads(response.read().decode(self.encoder))

        return json_response


class LocalVoteMattersAPI():
    def __init__(self):
        self.API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E'
        self.endURL = '&key='+ self.API_KEY
        self.baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address='
        self.baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true'
        self.url_handler = RequestHandler()
        #self.baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/voterinfo?address='

    def get_representative_info(self, address):
        formatted_address = address.replace(' ', '+')
        representative_url = '{}{}{}'.format(self.baseRepURL, formatted_address, self.endURL)
        return self.url_handler.get_with_url(representative_url)

    def get_all_elections_info(self):
        elections_url = '{}{}'.format(self.baseElectionsURL, self.endURL)
        return self.url_handler.get_with_url(elections_url)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, debug=True)
