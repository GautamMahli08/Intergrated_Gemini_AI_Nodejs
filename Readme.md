🚀 Instructions to Run the Project <br>


1️⃣ Get Your Gemini API Key <br>
Before running the project, create your own API key:<br>
👉 Visit: Google AI Studio
👉 Generate an API key.
👉 Copy the key and paste it into the .env file (without quotes).


GOOGLE_GEMINI_API_KEY=your_api_key_here
🛑 Note: Do NOT use quotes around the API key.

2️⃣ Install Dependencies
Run the following commands in VS Code terminal (or any terminal):


npm init -y   # Initialize Node.js project (if not already done)
npm install axios   # Install Axios for API requests
npm install @google/generative-ai dotenv   # Install Google AI SDK and dotenv
✅ Final Setup Checklist
✔️ Ensure .env is correctly formatted (no quotes around the API key).
✔️ All required dependencies are installed using npm install.
✔️ Run your JavaScript file using:
node your_script.js

📌 Notes
Do not expose your API key in public repositories.
If you get an authentication error, recheck your .env file and restart the terminal.
