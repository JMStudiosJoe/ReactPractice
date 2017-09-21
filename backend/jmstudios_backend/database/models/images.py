from sqlalchemy import Column, Integer, String
from jmstudios_backend.database.base import Base
from jmstudios_backend.database.session import Session


class Image(Base):
    __tablename__ = 'image'

    id = Column(Integer, primary_key=True)
    type = Column(String(60))
    name = Column(String(60))
    image_url = Column(String(200))

    @classmethod
    def create_new_image(cls, name, type, path):
        url = cls.upload_image_to_s3(name, path)
        new_image = cls(type=type, name=name, image_url=url)

        Session.add_to_session(new_image)
        Session.commit_session()

        return new_image.id

    @classmethod
    def get_cls_query(cls):
        return Session.get_session().query(cls)

    @classmethod
    def get_by_id(cls, image_id):
        print(image_id)
        image = Session.get_session().query(cls).filter(cls.id == image_id).first()
        if image:
            return image.json()
        else:
            return {}


    @classmethod
    def get_all_parallax_query(cls):
        return cls.get_cls_query().filter(cls.type == 'parallax')

    @classmethod
    def get_by_name(cls, name):
        image = Session.get_session().query(cls).filter(cls.name == name).first()
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
        image_url = cls.generate_s3_url(name, bucket_name)
        try:
            s3.meta.client.upload_file(path, bucket_name, name)
            object_acl = s3.ObjectAcl(bucket_name, name)
            response = object_acl.put(ACL='public-read')
            return image_url
        except Exception as e:
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
