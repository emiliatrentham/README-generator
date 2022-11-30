// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenses = {
  Apache_2_0: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  Mozilla: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
}

function renderLicenseBadge(licenseKey) {
  return licenses[licenseKey]
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, userInfo) {
  return `
  <h1 align="center">${data.title} 👋</h1>
   
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.username}/${data.repo}?style=flat&logo=appveyor) 
  ![License Badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat&logo=appveyor)<br />
   Check out the badges hosted by [shields.io](https://shields.io/).

  ## Description
  🔍 ${data.description}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  *Instructions and examples for use:*
  ${data.usage}

  ## Licenses
  ${renderLicenseBadge(data.license)}
  <br />
  This application is covered by the ${data.license} license. 

  ## Contributing 
  ${data.contributing}

  ## Tests
  *Application tests if any and how to run them:*
  ${data.tests}

  ---
  ## Questions?

  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="40%" />

  Contact me with any questions! <br />

  GitHub: [@${userInfo.login}](${userInfo.html_url})
 
 _Made with ❤️ by [README-generator](https://github.com/emiliatrentham/README-generator)_
`
}

module.exports = generateMarkdown;