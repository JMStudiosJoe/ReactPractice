from jmstudios_backend import app as application
from jmstudios_backend.database.db import Database

if __name__ == "__main__":
    print(application)
    application.run(port=5050)
    Database.connect_db('jmstudios', 'jmstudios', 'jmstudios')
