from request_handler.request_handler import RequestHandler


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
