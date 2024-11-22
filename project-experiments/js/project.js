document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("image-container");
    const image = document.getElementById("clickable-image");
  
    image.addEventListener("click", (event) => {
      // Get the bounding rectangle of the image
      const rect = image.getBoundingClientRect();
      const x = event.clientX - rect.left; // X position within the image
      const y = event.clientY - rect.top;  // Y position within the image
  
      // Show a prompt to the user
      const userInput = prompt("Enter your text:");
  
      // Exit if the user cancels or enters nothing
      if (!userInput) return;
  
      // Create the button
      const button = document.createElement("button");
      button.classList.add("dot");
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
  
      // Add an image inside the button (use your image link here)
      const img = document.createElement("img");
      img.src = "image/ghiblidog.gif"; // Replace with your button image link
      img.alt = "Dot"; // Optional alt text for the image
      img.style.width = "100%"; // Make the image fill the button
      img.style.height = "100%";
      img.style.borderRadius = "50%"; // Optional: Round image
      button.appendChild(img);
  
      // Save the user input as a tooltip or a hidden attribute
      button.title = userInput; // Tooltip when hovering
      button.setAttribute("data-text", userInput); // Save input for later use
  
      // Add an event listener to show the text when clicked
      button.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the image click event
        alert(`Button Text: ${userInput}`);
      });
  
      // Append the button to the image container
      imageContainer.appendChild(button);
    });
  });