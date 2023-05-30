
from dotenv import load_dotenv
import sys
import os
import openai

#loading the dotenv file
load_dotenv()

#command line argument
PROMPT = sys.argv[1]

#Replicate api
REPLICATE_API_TOKEN = os.getenv('OPENAI_API_KEY')

# print(REPLICATE_API_TOKEN);

openai.api_key = REPLICATE_API_TOKEN

message_history = []

def chat(inp, role="user"):
    message_history.append({"role": role, "content": f"{inp}"})
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=message_history
   
    )
    reply_content = completion.choices[0].message.content
    message_history.append({"role": "assistant", "content": f"{reply_content}"})
    return reply_content



print(chat(PROMPT));

print(message_history);

# completion = openai.ChatCompletion.create(
#   model="gpt-3.5-turbo", # this is "ChatGPT" $0.002 per 1k tokens
#   messages=[{"role": "user", "content": "What is the circumference in km of the planet Earth?"}]
# )

# print(completion);
# reply_content = completion.choices[0].message.content
# print(reply_content)

