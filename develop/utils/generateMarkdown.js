// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //https://img.shields.io/badge/license-MIT-green
  //https://img.shields.io/badge/license-Apache-green
  //https://img.shields.io/badge/license-GPL-green
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 

  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ## Credits
  
 ${data.credits}
  
  ## License
  
  This project is licensed under the ${data.license[0]}
  
  ## Badges
  
  ${renderLicenseSection()}

  ## Contact Info
  
  * [Github](https://github.com/${data.github})
  * [Email](${data.email})
  
  ## Contributing
  
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  
  ## Tests
  
  ${data.tests}
`;
}

module.exports = generateMarkdown;
