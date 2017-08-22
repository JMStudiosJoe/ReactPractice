import json
from urllib import request


class RequestHandler():
    def __init__(self):
        self.encoder = 'utf8'

    def get_with_url(self, url):
        req = request.Request(url)
        response = request.urlopen(req)
        json_response = json.loads(response.read().decode(self.encoder))

        return json_response
