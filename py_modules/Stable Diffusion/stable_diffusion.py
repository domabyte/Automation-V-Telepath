#imports
from cmd import PROMPT
import sys
import replicate
from dotenv import load_dotenv
import os

#loading the dotenv file
load_dotenv()

#command line argument
PROMPT = sys.argv[1]

#Replicate api
REPLICATE_API_TOKEN = os.getenv('REPLICATE_API_TOKEN')


#model
# client = replicate.Client(api_token=REPLICATE_API_TOKEN)
# print("client",client)
# version = client.versions.get("stability-ai/stable-diffusion")
# print(version)
# image_urls = version.predict(prompt=PROMPT)
# print(image_urls)

model = replicate.models.get("stability-ai/stable-diffusion")

version = model.versions.get("27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478")

image_urls = version.predict(prompt=PROMPT)
print(image_urls);



