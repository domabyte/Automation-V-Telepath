from cmd import PROMPT
import replicate
import os
import sys
# from dotenv import load_dotenv
# load_dotenv()
# REPLICATE_API_TOKEN = os.getenv('REPLICATE_API_TOKEN')
REPLICATE_API_TOKEN = "r8_2Dsb8m27hKRvr2j1Yp6igtTQT1ISxuC0znT0A"
# print(REPLICATE_API_TOKEN)
PROMPT = sys.argv[1]
PROMPT = "a photo of 8k ultra realistic archangel with 6 wings, full body, intricate purple and blue neon armor, ornate, cinematic lighting, trending on artstation, 4k, hyperrealistic, focused, high details, unreal engine 5, cinematic --ar 9:16 --s 1250 --q 2"

client = replicate.Client(api_token=REPLICATE_API_TOKEN)
model = client.models.get("stability-ai/stable-diffusion")
version = model.versions.get("27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478")
image_urls = version.predict(prompt=PROMPT)
print(image_urls)