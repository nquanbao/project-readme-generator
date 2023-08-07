// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
const licenseInfo = [
    {
        licenseList: 'GNU AGPLv3',
        information: 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.',
        link: 'https://choosealicense.com/licenses/agpl-3.0/',
        badge: 'https://img.shields.io/badge/license-GNU_AGPLv3-blue'
    },
    {
        licenseList: 'GNU GPLv3',
        information: 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.',
        link: 'https://choosealicense.com/licenses/gpl-3.0/',
        badge: 'https://img.shields.io/badge/license-GNU_GPLv3-blue'
    },
    {
        licenseList: 'GNU LGPLv3',
        information: 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.',
        link: 'https://choosealicense.com/licenses/lgpl-3.0/',
        badge: 'https://img.shields.io/badge/license-GNU_LGPLv3-blue'
    },
    {
        licenseList: 'Mozilla Public License 2.0',
        information: 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.',
        link: 'https://choosealicense.com/licenses/mpl-2.0/',
        badge: 'https://img.shields.io/badge/license-Mozilla_Public_License_2.0-blue'
    },
    {
        licenseList: 'Apache License 2.0',
        information: 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
        link: 'https://choosealicense.com/licenses/apache-2.0/',
        badge: 'https://img.shields.io/badge/license-Apache_License_2.0-blue'
    },
    {
        licenseList: 'MIT License',
        information: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
        link: 'https://choosealicense.com/licenses/mit/',
        badge: 'https://img.shields.io/badge/license-MIT-blue'
    },
    {
        licenseList: 'Boost Software License 1.0',
        information: 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
        link: 'https://choosealicense.com/licenses/bsl-1.0/',
        badge: 'https://img.shields.io/badge/license-Boost_Software_License_1.0-blue'
    },
    {
        licenseList: 'The Unlicense',
        information: 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.',
        link: 'https://choosealicense.com/licenses/unlicense/',
        badge: 'https://img.shields.io/badge/license-The_Unlicense-blue'
    }
]

const generateReadMe = ({ title, discription1,discription2,discription3,installation,license,contributing,test,github,email},licenseInformation,link,badgeEL,img) =>
`# ${title}     ![Badge](${badgeEL})

## Description

- What was your motivation?
    
    ${discription1}

- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    
    ${discription2}

- What did you learn?
    
    ${discription3}

## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#tests)
- [Questions](#questions)

## Installation

    ${installation}

## Usage

![Sreenshot of App](${img})

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

[${license}](${link})
    
    ${licenseInformation}    

## Contributing
    ${contributing}

## Tests
    ${test}

## Questions

- My GitHub: [${github}](https://github.com/${github})

- If you have any question or need to report any issues about the application, please contact me by e-mail.

- My e-mail address : [${email}](${email})
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your projetc title?',
    },
    {
      type: 'input',
      name: 'discription1',
      message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'discription2',
        message: 'Why did you build this project?',
      },
      {
        type: 'input',
        name: 'discription3',
        message: 'What did you learn?',
      },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your app in step by step?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose your license which you use.',
      choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is your contributing?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What is your test?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
  ])
  .then((answers) => {
    
    for( let i = 0; i < licenseInfo.length; i++){
        if(answers.license === licenseInfo[i].licenseList){
            var licenseInformation = licenseInfo[i].information;
            var link = licenseInfo[i].link;
            var badgeEL = licenseInfo[i].badge;
            var img = './assets/img/screenshot.png';
            const readmecontent = generateReadMe(answers,licenseInformation,link,badgeEL,img);
            fs.writeFile('README.md', readmecontent, (err) =>
            err ? console.log(err) : console.log('Successfully created ReadMe.md!')
            );
        }
    }
  });
