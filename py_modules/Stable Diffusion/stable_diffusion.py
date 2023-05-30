from cmd import PROMPT
import replicate
import os
import sys
from dotenv import load_dotenv
load_dotenv()
REPLICATE_API_TOKEN = os.getenv('REPLICATE_API_TOKEN')

PROMPT = sys.argv[1]

client = replicate.Client(api_token=REPLICATE_API_TOKEN)
model = client.models.get("stability-ai/stable-diffusion")
image_urls = model.predict(prompt=PROMPT)
print(image_urls)