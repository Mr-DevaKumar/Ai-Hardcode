// script.js

// Predefined responses for general questions
const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing fine, thanks for asking!",
    "bye": "Goodbye! Have a great day!",
    "what is your name": "I'm your friendly chatbot! You can call me ChatBot.",
    "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
    "what can you do": "I can answer your questions and chat with you about various topics!",
    "what is the time": "I'm sorry, I don't have access to the current time, but you can check your device's clock.",
    "where are you from": "I was created by developers at OpenAI!",
    "what is 2 + 2": "2 + 2 equals 4.",
    "who is the president of the united states": "The current president of the United States is Joe Biden.",
    "what is the capital of france": "The capital of France is Paris.",
    "how many continents are there": "There are 7 continents on Earth.",
    "who won the world series in 2020": "The Los Angeles Dodgers won the World Series in 2020.",
    "what is the tallest mountain in the world": "Mount Everest is the tallest mountain in the world.",
    "how far is the moon from earth": "The moon is approximately 384,400 kilometers away from Earth.",
    "what is photosynthesis": "Photosynthesis is the process by which plants use sunlight to synthesize foods from carbon dioxide and water.",
    "who invented the telephone": "The telephone was invented by Alexander Graham Bell in 1876.",
    "what is the largest animal in the world": "The blue whale is the largest animal on Earth.",
    "what is artificial intelligence": "Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.",
    "who is the founder of microsoft": "Bill Gates and Paul Allen co-founded Microsoft in 1975.",
    "what is the boiling point of water": "The boiling point of water is 100°C (212°F) at standard atmospheric pressure.",
    "how many states are in the united states": "There are 50 states in the United States.",
    // Add more questions and responses up to 200
    // Example:
    "who is elon musk": "Elon Musk is a tech entrepreneur and CEO of Tesla and SpaceX.",
    "what is the square root of 16": "The square root of 16 is 4.",
    "what is the largest ocean": "The Pacific Ocean is the largest ocean on Earth.",
    "what is the fastest animal on land": "The cheetah is the fastest land animal.",
    "how many countries are in africa": "There are 54 countries in Africa.",
    "what is the chemical formula for water": "The chemical formula for water is H2O.",
    "what is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",
    "who wrote romeo and juliet": "Romeo and Juliet was written by William Shakespeare.",
    "what is the internet": "The internet is a global system of interconnected computer networks that use the Internet Protocol Suite (TCP/IP).",
    "what is blockchain": "Blockchain is a decentralized digital ledger that records transactions across many computers.",
    "who painted the mona lisa": "The Mona Lisa was painted by Leonardo da Vinci.",
    // Continue adding questions and answers up to 200...
    "default": "I'm sorry, I didn't quite understand that. Could you rephrase?"
};

// Get DOM elements
const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

// Function to display messages
function displayMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Function to get a bot response based on user input
function getBotResponse(userText) {
    const userMessage = userText.toLowerCase().trim();

    // Check if the message matches any predefined responses
    for (const key in responses) {
        if (userMessage.includes(key)) {
            return responses[key];
        }
    }
    return responses["default"]; // Default response if no match found
}

// Send message when the user clicks the send button
sendButton.addEventListener("click", () => {
    const userText = userInput.value;
    if (userText.trim()) {
        // Display user message
        displayMessage(userText, "user");

        // Get and display bot response
        const botResponse = getBotResponse(userText);
        setTimeout(() => {
            displayMessage(botResponse, "bot");
        }, 1000); // Simulate a slight delay in bot response

        // Clear the input field
        userInput.value = "";
    }
});

// Optional: Allow user to press "Enter" to send the message
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton.click();
    }
});
