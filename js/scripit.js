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
