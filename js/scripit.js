const technologies = [
  "Frontend",
  "Backend",
  "DevOps",
  "Full Stack",
  "AI and Data Scientist",
  "Data Analyst",
  "New",
  "Android",
  "iOS",
  "New",
  "PostgreSQL",
  "Blockchain",
  "QA",
  "Software Architect",
  "Cyber Security",
  "UX Design",
  "Game Developer",
  "Technical Writer",
  "MLOps",
];

const bu = [
  "Computer Science",
  "React",
  "Angular",
  "Vue",
  "JavaScript",
  "Node.js",
  "TypeScript",
  "Python",
  "SQL",
  "System Design",
  "API Design",
  "ASP.NET Core",
  "Java",
  "C++",
  "Flutter",
  "Spring Boot",
  "Go Roadmap",
  "Rust",
  "GraphQL",
  "Design and Architecture",
  "Design System",
  "React Native",
  "AWS",
  "Code Review",
  "Docker",
  "Kubernetes",
  "Linux",
  "MongoDB",
  "Prompt Engineering",
  "Data Structures & Algorithms",
];

const bu1 = [
  "Backend Performance",
  "Frontend Performance",
  "API Security",
  "Code Reviews",
  "AWS",
];

const buttons = [];
const buttons2 = [];
const buttons3 = [];

// Create the initial buttons
for (let i = 0; i < technologies.length; i++) {
  const button = document.createElement("button");
  button.textContent = technologies[i];
  button.style.backgroundImage =
    "url(https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg)"; // style as before
  button.style.backgroundSize = "20px";
  button.style.backgroundRepeat = "no-repeat";
  button.style.backgroundPosition = "right";
  button.style.padding = "10px";
  button.style.borderRadius = "5px";
  button.className = `image-button  text-] hover:bg-[#0f172a] border`; // style as before
  button.value = technologies[i];
  buttons.push(button);
}

for (let i = 0; i < bu.length; i++) {
  const button = document.createElement("button");
  button.textContent = bu[i];
  button.style.backgroundImage =
    "url(https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg)"; // style as before
  button.style.backgroundSize = "20px";
  button.style.backgroundRepeat = "no-repeat";
  button.style.backgroundPosition = "right";
  button.style.padding = "10px";
  button.style.borderRadius = "5px";
  button.className = `image-button  text-] hover:bg-[#0f172a] border`; // style as before
  button.value = bu[i];
  buttons2.push(button);
}

for (let i = 0; i < bu1.length; i++) {
  const button = document.createElement("button");
  button.textContent = bu1[i];
  button.style.backgroundImage =
    "url(https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg)"; // style as before
  button.style.backgroundSize = "20px";
  button.style.backgroundRepeat = "no-repeat";
  button.style.backgroundPosition = "right";
  button.style.padding = "10px";
  button.style.borderRadius = "5px";
  button.className = `image-button  text-] hover:bg-[#0f172a] border`; // style as before
  button.value = bu1[i];
  buttons3.push(button);
}

// Add the initial buttons to the containers
buttons.forEach((button) => {
  document.getElementById("buttons-container").appendChild(button);
});

buttons2.forEach((button) => {
  document.getElementById("buttons-container2").appendChild(button);
});

buttons3.forEach((button) => {
  document.getElementById("buttons-container3").appendChild(button);
});

// Add the Add Button to each container
const addButton = document.createElement("button");
addButton.textContent = "+ Create your own Roadmap";
addButton.style.backgroundImage =
  "url(https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg)"; // style as before
addButton.style.backgroundSize = "20px";
addButton.style.backgroundRepeat = "no-repeat";
addButton.style.backgroundPosition = "right";
addButton.style.padding = "10px";
addButton.style.borderRadius = "5px";
addButton.className = `image-button  text-white  border  hover:bg-[#0f172a] border`; // style as before

// Add event listener to the Add Button
addButton.addEventListener("click", () => {
  // Generate a new random value
  const newValue = Math.floor(Math.random() * (technologies.length + 1));

  // Check if the new value is already taken
  let takenValue = false;
  if (takenValue) return;

  // If the value is not taken, create a new button
  const newButton = document.createElement("button");
  newButton.textContent = technologies[newValue];
  newButton.style.backgroundImage =
    "url(https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg)"; // style as before

  newButton.className =
    "url(https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg)"; // style as before

  newButton.value = technologies[newValue];
  buttons.push(newButton);

  // Add the new button to the container
  document.getElementById("buttons-container").appendChild(newButton);

  // Add event listener to the new button
  newButton.addEventListener("click", () => {
    // Generate a new random value
    const newValue2 = Math.floor(Math.random() * (technologies.length + 1));

    // Check if the new value is already taken
    let takenValue2 = false;
    if (takenValue2) return;

    // If the value is not taken, create a new button
    const newButton2 = document.createElement("button");
    newButton2.textContent = technologies[newValue2];
    newButton2.style.backgroundImage =
      "url(https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg)"; // style as before
    newButton2.className =
      "url(https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg)"; // style as before
    newButton2.value = technologies[newValue2];
    buttons.push(newButton2);
    document.getElementById("buttons-container").appendChild(newButton2);
  });
});

// Add the Add Button to the container
document.getElementById("buttons-container").appendChild(addButton);



function copyLink() {
  const link = "https://roadmap.sh/card/tall/66660fa0b998f3b3c7cf146fa";
  navigator.clipboard.writeText(link).then(() => {
      const button = document.getElementById("copy-link-button");
      button.innerHTML = '<i class="fas fa-check"></i> Link Copied!';
      setTimeout(() => {
          button.innerHTML = '<i class="fas fa-copy"></i> Copy Link';
      }, 1000);
  });
}

function copyTextareaContent(elementId, buttonId) {
  const textarea = document.getElementById(elementId);
  textarea.select();
  document.execCommand("copy");
  const button = document.getElementById(buttonId);
  button.innerHTML = '<i class="fas fa-check"></i>';
  setTimeout(() => {
      button.innerHTML = '<i class="fas fa-copy"></i>';
  }, 1000);
}

function downloadImage() {
  const link = document.createElement('a');
  link.href = 'https://roadmap.sh/card/tall/66660fa0b998f3b3c7cf146fa';  // Replace with the actual image URL
  link.download = 'roadmap_card.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function toggleImageSize(size) {
  const image = document.getElementById('roadmap-image');
  if (size === 'tall') {
      image.classList.remove('image-wide');
      image.classList.add('image-tall');
  } else if (size === 'wide') {
      image.classList.remove('image-tall');
      image.classList.add('image-wide');
  }
}

function toggleCardTheme(theme) {
  const card = document.getElementById('roadmap-card');
  if (theme === 'dark') {
      card.classList.remove('card-light');
      card.classList.add('card-dark');
  } else if (theme === 'light') {
      card.classList.remove('card-dark');
      card.classList.add('card-light');
  }
}
function copyToClipboard() {
  var copyText = document.getElementById("invite-link");
  var copyButton = document.getElementById("copy-button");
  
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  
  // Change button text to "Copied!"
  copyButton.textContent = "Copied!";
  copyButton.classList.remove("bg-blue-500", "hover:bg-blue-600");
  copyButton.classList.add("bg-green-500");

  // After 1 second, change it back to "Copy"
  setTimeout(function() {
      copyButton.textContent = "Copy";
      copyButton.classList.remove("bg-green-500");
      copyButton.classList.add("bg-blue-500", "hover:bg-blue-600");
  }, 1000);
}
// Toggle dropdown menu
document.getElementById('dropdown-button').addEventListener('click', function() {
  document.getElementById('dropdown-menu').classList.toggle('show');
});

// Set profile status
function setProfileStatus(status) {
  document.getElementById('dropdown-button-text').textContent = status;
  document.getElementById('dropdown-menu').classList.remove('show');
}

// Copy to clipboard functionality
function copyToClipboard() {
  var copyText = document.getElementById("profile-url");
  var copyButton = document.getElementById("copy-button");
  
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  document.execCommand("copy");
  
  // Change button text to "Copied!"
  copyButton.textContent = "Copied!";
  copyButton.classList.remove("bg-blue-500", "hover:bg-blue-600");
  copyButton.classList.add("bg-green-500");

  // After 1 second, change it back to "Copy"
  setTimeout(function() {
      copyButton.textContent = "Copy";
      copyButton.classList.remove("bg-green-500");
      copyButton.classList.add("bg-blue-500", "hover:bg-blue-600");
  }, 1000);
}