// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project? (required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You must enter a title!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a description of your project. (required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You must enter a description!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please enter usage information (required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You must enter usage information!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Please enter contribution guidelines. (required)",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You must enter contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: "Which license are you using?",
        choices: ['Apache_2.0', 'GPLv3', 'MIT', 'Unlicense', 'None']
    },
    {
        type: 'input',
        name: 'test',
        message: "Please write examples of how to test program. (required)",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("You must enter test information!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address? (required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions? (required)",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You must enter installation instructions!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub name? (required)',
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('You must enter a GitHub name');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync('README.md', generateMarkdown(data));
}

// TODO: Create a function to initialize app (converted to async function)
async function init() {
    const data = await inquirer.prompt(questions);
    return writeToFile(data);
};

// Function call to initialize app
init();
