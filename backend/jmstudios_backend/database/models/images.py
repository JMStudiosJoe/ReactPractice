from sqlalchemy import Column, Integer, String
from jmstudios_backend.database.base import Base
from jmstudios_backend.database.session import Session


class Image(Base):
    __tablename__ = 'image'

    id = Column(Integer, primary_key=True)
    type = Column(String(30))
    name = Column(String(30))
    image_url = Column(String(100))

    @classmethod
    def create_new_image(cls, name, type, path):
        print(type)
        cls.upload_image_to_s3(name, path)

    @classmethod
    def get_by_id(cls, image_id):
        image = Session.get_session().query(cls).filter(self.id == image_id).first()
        return image.json()

    @classmethod
    def get_all(cls):
        images = Session.get_session().query(cls).all()
        json_images = [image.json() for image in images]
        return json_images

    @classmethod
    def upload_image_to_s3(cls, name, path):
        import boto3
        bucket_name = 'jmstudiosimages'
        s3 = boto3.resource('s3')
        try:
            s3.meta.client.upload_file(path, bucket_name, name)
            object_acl = s3.ObjectAcl(bucket_name, name)
            response = object_acl.put(ACL='public-read')
        except e:
            print(e)

    @classmethod
    def generate_s3_url(cls, name, bucket_name):
        return 'https://s3-us-west-2.amazonaws.com/{}/{}'.format(bucket_name, name)

    def json(self):
        return {
            'id': self.id,
            'type': self.type,
            'name': self.name,
            'image_url': self.image_url
        }