from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()  # <-- Load .env variables here before using them
client = OpenAI()
openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

origins = [
    "http://localhost:5173",  
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def greet():
    return "Welcome"

@app.get("/response")
def greet_response():
    return {"response": "responding with lights and sirens"}

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
def chat(request: ChatRequest):
    response = client.responses.create(
        model="gpt-4o-mini",
        input=request.message
    )
    return {"response": response.output_text}

