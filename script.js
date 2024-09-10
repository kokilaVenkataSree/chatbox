document.getElementById("send-btn").addEventListener("click", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("chat-input").value;
 
    if (userInput.trim() !== "") {
        // Create a new message div for the user message
        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "user");
        userMessage.textContent = userInput;
 
        // Add the message to the chat box
        chatBox.appendChild(userMessage);
 
        // Clear the input
        document.getElementById("chat-input").value = "";
 
        // Auto-scroll to the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
