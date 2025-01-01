import eel
from google import generativeai
from decouple import config


generativeai.configure(api_key=config("API_KEY"))
model = generativeai.GenerativeModel("gemini-1.5-flash")
eel.init("web")  


@eel.expose    
def ai_bot(message):
    response = model.generate_content(message)
    return response.text


eel.start("index.html")

