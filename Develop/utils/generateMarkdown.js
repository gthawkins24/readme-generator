// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `
    ![badge](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache_2.0') {
    return `
    [${license}](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (license === 'GPLv3') {
    return `
    [${license}](https://choosealicense.com/licenses/gpl-3.0/)`
  } else if (license === 'MIT') {
    return `
    [${license}](https://choosealicense.com/licenses/mit/)`
  } else if (license === 'Unlicense') {
    return `
    [${license}](https://choosealicense.com/licenses/unlicense/)`
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
  return `
  ##[License](#Table-of-Contents)
  
  ${renderLicenseLink(license)}
  `
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Questions](#questions)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Contribution](#contribution)
  
  ##[Description](#Table-of-Contents)

  ${data.description}

  ##[Installation](#Table-of-Contents)

  ${data.installation}

  ##[Questions](#Table-of-Contents)

  If you have additional questions, you can email me at the address below, or reach me at GitHub:

  Email: ${data.email}
  [GitHub](https://github.com/${data.githubName})

  ##[Usage]#(Table-of-Contents)

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ##[Tests](#Table-of-Contents)

  ${data.test}

  ##[Contribution](#Table-of-Contents)

  ${data.contribution}
`;
}

module.exports = generateMarkdown;
