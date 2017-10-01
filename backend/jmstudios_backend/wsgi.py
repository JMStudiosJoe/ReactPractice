from jmstudios_backend import app as application
from jmstudios_backend.database.db import Database

if __name__ == 'wsgi':
    Database.connect_db('jmstudios', 'jmstudios', 'jmstudios')
    application.run(port=5050)
