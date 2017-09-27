from flask import Flask
app = Flask(__name__)

import jmstudios_backend.api
import jmstudios_backend.endpoints.local_vote.representative_info
import jmstudios_backend.endpoints.local_vote.elections_info
import jmstudios_backend.endpoints.team_endpoints.team
import jmstudios_backend.endpoints.images
import jmstudios_backend.endpoints.projects
