// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Short description of your project (what, why, how)."
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install the app?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do we use your app?"
    },
    {
        type: "input",
        name: "credits",
        message: "List collaborators if any."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Chose a license for your app.",
        choices: ["Apache Licence 2.0", "MIT License", "GNU GPLv3"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();