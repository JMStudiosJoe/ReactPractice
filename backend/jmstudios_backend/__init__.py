from flask import Flask
app = Flask(__name__)

import jmstudios_backend.api
import jmstudios_backend.endpoints.local_vote.representative_info
import jmstudios_backend.endpoints.local_vote.elections_info
