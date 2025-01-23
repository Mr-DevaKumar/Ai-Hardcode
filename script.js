let questionDatabase = [];

fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questionDatabase = data;
    })
    .catch(error => {
        console.error("Error loading questions:", error);
    });

const chatBox = document.getElementById('chatBox');

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const userMessage = userInput.value.trim();

    if (userMessage) {
        addMessage(userMessage, 'user');
        userInput.value = '';

        setTimeout(() => {
            const aiResponse = generateAIResponse(userMessage);
            addMessage(aiResponse, 'ai');
        }, 1000);
    }
}

function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${type}`;
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(message) {
    const match = questionDatabase.find(item =>
        item.question.toLowerCase() === message.toLowerCase()
    );

    if (match) {
        return match.answer;
    }

    return "I'm sorry, I don't have an answer for that question. Please ask something else about machine learning or NLP.";
}
