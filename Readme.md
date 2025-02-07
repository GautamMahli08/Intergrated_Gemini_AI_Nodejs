🚀 Instructions to Run the Project <br>


1️⃣ Get Your Gemini API Key Before running the project, create your own API key:<br>
👉 Visit: Google AI Studio <br>
👉 Generate an API key.<br>
👉 Copy the key and paste it into the .env file (without quotes).<br>


GOOGLE_GEMINI_API_KEY=your_api_key_here<br>
🛑 Note: Do NOT use quotes around the API key.<br>

2️⃣ Install Dependencies <br>
Run the following commands in VS Code terminal (or any terminal):<br>


npm init -y   # Initialize Node.js project (if not already done) <br>
npm install axios   # Install Axios for API requests <br>
npm install @google/generative-ai dotenv   # Install Google AI SDK and dotenv <br>
✅ Final Setup Checklist <br>
✔️ Ensure .env is correctly formatted (no quotes around the API key). <br>
✔️ All required dependencies are installed using npm install. <br>
✔️ Run your JavaScript file using: <br>
node your_script.js<br>

📌 Notes <br>
Do not expose your API key in public repositories. <br>
If you get an authentication error, recheck your .env file and restart the terminal. <br>
