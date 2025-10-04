console.log("hello world");

// Buttons
let homeBtn = document.getElementById("homeBtn");
let aboutBtn = document.getElementById("aboutBtn");

// Divs
let about = document.getElementsByClassName("about")[0];
let portfolio = document.getElementsByClassName("portfolio")[0];

function showAboutMe() {
    about.style.display = "block";
    portfolio.style.display = "none";
}

function showPortfolio() {
    portfolio.style.display = "block";
    about.style.display = "none";
}

aboutBtn.addEventListener('click', function () {
    // console.log("About Clicked");
    showAboutMe();
});

homeBtn.addEventListener('click', function () {
    // console.log("Portfolio Clicked");
    showPortfolio();
});



/*
=============================
dark mode light mode toggle
=============================
*/

const body = document.body;
const sunIcon = document.querySelector(".ri-sun-line");
const moonIcon = document.querySelector(".ri-moon-line");

// initial state check (localStorage diye)
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  sunIcon.style.display = "inline-block";
  moonIcon.style.display = "none";
} else {
  body.classList.add("light");
  sunIcon.style.display = "none";
  moonIcon.style.display = "inline-block";
}

// toggle function
function toggleTheme() {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
    localStorage.setItem("theme", "light");
  }
}

// event listener
sunIcon.addEventListener("click", toggleTheme);
moonIcon.addEventListener("click", toggleTheme);





/*
=================================================
projects
=================================================
*/

const projectsJSON = [
    {
        name: "show-file-tree",
        url: "https://github.com/tahsinzidane/show-file-tree",
        about: `is a simple CLI tool to display directory structures in a clean tree format. It helps developers quickly visualize nested files and folders. <a href="https://www.npmjs.com/package/@tahsinzidane/sft">Install  it </a> globally via npm for instant use`
    },
    {
        name: "emoji selector ",
        url: "https://github.com/tahsinzidane/emoji-verse?tab=readme-ov-file#emoji-verse",
        about: "A simple emoji selector app built for Linux distributions. \nCrafted with Electron, it offers an easy way to search and copy emojis right from your desktop."
    },
];

const projectsContainer = document.getElementById("projects");

projectsJSON.forEach(project => {
    const projectHolder = document.createElement("p");
    projectHolder.innerHTML = `<a href="${project.url}" target="_blank">${project.name}</a> : ${project.about}`;
    projectsContainer.appendChild(projectHolder);
});


