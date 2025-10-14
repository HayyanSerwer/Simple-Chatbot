
This project is a simple chat application built with **React**, **Tailwind CSS**, **TypeScript**, and **FastAPI**. The app allows users to send messages to a chatbot powered by OpenAI's GPT model.


## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: FastAPI, OpenAI API
- **Styling**: Tailwind CSS
- **API Communication**: REST API
- **Environment Variables**: dotenv for managing API keys

## Prerequisites

- Python 3.7 or higher
- Node.js and npm 
- OpenAI API Key
- A `.env` file to store your OpenAI API key

## Setup and Installation

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/HayyanSerwer/Simple-Chatbot
cd chat-application
\`\`\`

### 2. Backend (FastAPI)

- Navigate to the backend directory and install dependencies.

\`\`\`bash
cd backend
python -m venv venv
source venv/bin/activate  # For Linux/MacOS
venv\\Scripts\\activate  # For Windows
\`\`\`

- Create a `.env` file in the backend directory to store your OpenAI API key:

\`\`\`
OPENAI_API_KEY=your-api-key-here
\`\`\`

- Run the FastAPI backend:

\`\`\`bash
uvicorn main:app --reload
\`\`\`

The server will start at \`http://127.0.0.1:8000\`.

### 3. Frontend (React + Tailwind CSS)

- Navigate to the frontend directory and install dependencies.

\`\`\`bash
cd frontend
npm install
\`\`\`

- To start the React application:

\`\`\`bash
npm run dev
\`\`\`

The frontend will start at \`http://127.0.0.1:5173\`.

### 4. CORS Configuration

Ensure that your FastAPI backend allows requests from your frontend. In the provided code, CORS is configured to accept requests from \`http://localhost:5173\`, which is the default port for Vite-based React applications.

## Running the App

1. Make sure both the backend and frontend servers are running.
2. Open your browser and go to \`http://localhost:5173\` (the React frontend).
3. Type a message in the input box and hit "Enter" to interact with the chatbot.

