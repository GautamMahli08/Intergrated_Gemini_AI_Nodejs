require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

const runPrompt = async () => {
  const prompt = `a = 5
b = 6
c = 7

a = float(input('Enter first side: '))
b = float(input('Enter second side: '))
c = float(input('Enter third side: '))

s = (a + b + c) / 2

area = (s*(s-a)*(s-b)*(s-c)) ** 0.5
print('The area of the triangle is %0.2f' %area)

Convert this code into Java`;

  try {
    // Get the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate response
    const result = await model.generateContent(prompt);
    const geminiResponse = await result.response.text();

    console.log("Gemini AI Response:", geminiResponse);
  } catch (error) {
    console.error("Error generating response:", error);
  }
};

runPrompt();
