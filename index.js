// External packages
const inquirer = require('inquirer');
const fs = require("fs");
const util = require('util');

// Internal modules
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");

// Inquirer prompt 
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        default: 'emiliatrentham',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: "What is the name of your GitHub repo?",
        default: 'README-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required to generate a badge.");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What would you like to title your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Provide a brief description of your project: ",
        name: "description",
    },
    {
        type: "input",
        message: "Describe the installation process if any: ",
        name: "installation",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples of your project in use.",
    },
    {
        type: "list",
        message: "What badge would you like",
        choices: ["MIT", "Apache_2_0", "Mozilla"],
        name: "license",
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project.",
        name: 'installation'
    },
    {
        type: "input",
        name: "contributing",
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "What tests are included?"
    }
];

// Write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("Success! Your README.md file has been generated");  
    }
    );
}

const writeFileAsync = util.promisify(writeToFile);

// Master function
async function init() {
    try {

        // Prompt Inquirer questions
        const userAnswer = await inquirer.prompt(questions);
        console.log("Your responses: ", userAnswer);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Call GitHub API to fetch user info
        const userInfo = await api.getUser(userAnswers);
        console.log("GitHub user info: ", userInfo);
    
        // Pass Inquirer answers and GitHub user info to build README
        console.log("Building your README...")
        const markdown = generateMarkdown(userAnswers, userInfo);
        console.log(markdown);
    
        // Draft markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init();

