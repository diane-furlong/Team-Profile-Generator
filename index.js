//set consts for the required npms
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

const writeFileAsync = util.promisify(fs.writeFile)

//write inquirer prompts to user
const promptUser = () =>
    inquirer.prompt([
        {
            type:'input',
            message:"What is the team manager's name?",
            name:'managerName'

        },
        {
            type:'input',
            message:"What is the team manager's id?",
            name:'managerID'
        },
        {
            type:'input',
            message:"What is the team manager's email?",
            name:'managerEmail',
        },
        {
            type:'input',
            message:"What is the team manager's office number?",
            name:'managerOfficeNumber',
        },
        {
            type:'list',
            message:"Which type of team member would you like to add?",
            choices:['Engineer', 'Intern', 'Finish building my team'],            
            name:'memberType',
        },
        {
            type:'input',
            message:"What is the engineer's name?",
            name:'engineerName',
            when: function(answers){
                //only run if user answered engineer to memberType
                return answers.memberType === 'Engineer'
            },
        },
        {
            type:'input',
            message:"What is the engineer's id?",
            name:'engineerID',
            when: function(answers){
                //only run if user answered engineer to memberType
                return answers.memberType === 'Engineer'
            }
        },
        {
            type:'input',
            message:"What is the engineer's email?",
            name:'engineerEmail',
            when: function(answers){
                //only run if user answered engineer to memberType
                return answers.memberType === 'Engineer'
            }
        },
        {
            type:'input',
            message:"What is the engineer's office number?",
            name:'engineerOfficeNumber',
            when: function(answers){
                //only run if user answered engineer to memberType
                return answers.memberType === 'Engineer'
            },
        },
        {
            type:'input',
            message:"What is the intern's name?",
            name:'internName',
            when: function(answers){
                //only run if user answered intern to memberType
                return answers.memberType === 'Intern'
            },
        },
        {
            type:'input',
            message:"What is the intern's id?",
            name:'internID',
            when: function(answers){
                //only run if user answered intern to memberType
                return answers.memberType === 'Intern'
            },
        },
        {
            type:'input',
            message:"What is the intern's email?",
            name:'internEmail',
            when: function(answers){
                //only run if user answered intern to memberType
                return answers.memberType === 'Intern'
            },
        },
        {
            type:'input',
            message:"What is the intern's office number?",
            name:'internOfficeNumber',
            when: function(answers){
                //only run if user answered intern to memberType
                return answers.memberType === 'Intern'
            },
        },
        {
            type:'list',
            message:"Which type of team member would you like to add?",
            choices:['Engineer', 'Intern', 'Finish building my team'],            
            name:'memberType',
        }
    ])

const generateHTML = (answer) =>
`member type: ${answer.memberType}
manager name: ${answer.managerName}`

promptUser()
.then((answer) => writeFileAsync('index.html', generateHTML(answer)))
.then(() => console.log('Success!'))
.catch((err) => console.error(err))