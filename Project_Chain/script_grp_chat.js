// Ensure the document is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Initial setup to activate chat and person
    document.querySelector(".chat[data-chat='person2']").classList.add("active-chat");
    document.querySelector(".person[data-chat='person2']").classList.add("active");
  
    let friends = {
      list: document.querySelector("ul.people"),
      all: document.querySelectorAll(".left .person"),
      name: ""
    };
  
    let chat = {
      container: document.querySelector(".container .right"),
      current: null,
      person: null,
      name: document.querySelector(".container .right .top .name")
    };
  
    // Add event listeners to each person element
    friends.all.forEach(f => {
      f.addEventListener("click", () => {
        if (!f.classList.contains("active")) {
          setActiveChat(f);
        }
      });
    });
  
    // Function to set the active chat
    function setActiveChat(f) {
      // Remove the 'active' class from currently active person
      friends.list.querySelector(".active").classList.remove("active");
      // Add the 'active' class to the clicked person
      f.classList.add("active");
      
      // Set the current chat to active chat
      chat.current = chat.container.querySelector(".active-chat");
      chat.person = f.getAttribute("data-chat");
      
      // Remove the 'active-chat' class from currently active chat
      chat.current.classList.remove("active-chat");
      // Add the 'active-chat' class to the chat corresponding to the clicked person
      chat.container.querySelector(`[data-chat="${chat.person}"]`).classList.add("active-chat");
      
      // Update the chat name
      friends.name = f.querySelector(".name").innerText;
      chat.name.innerHTML = friends.name;
    }
  });

  