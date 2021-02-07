//set consts for the required npms
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

const writeFile = util.promisify(fs.writeFile)

teamArray = []

//write inquirer prompts to user about each employee
const promptManager = () =>
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
        }
    ])  
    .then(function(answer){
        const newManager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber)
        teamArray.push(newManager)
        console.log(teamArray)
        switch(answer.memberType){
            case 'Engineer':
                promptEngineer()
                break
            case 'Intern':
                promptIntern()
                break
            case 'Finish building my team':
                endPrompt()
        }
       
    })
    
const promptEngineer = () =>
    inquirer.prompt([
        {
            type:'input',
            message:"What is the engineer's name?",
            name:'engineerName',
        },
        {
            type:'input',
            message:"What is the engineer's id?",
            name:'engineerID'
        },
        {
            type:'input',
            message:"What is the engineer's email?",
            name:'engineerEmail'
        },
        {
            type:'input',
            message:"What is the engineer's phone number?",
            name:'engineerPhone'
        },
        {
            type:'list',
            message:"Which type of team member would you like to add?",
            choices:['Engineer', 'Intern', 'Finish building my team'],            
            name:'memberType',
        }
    ])
    .then(function(answer){
        const newEngineer = new Engineer(answer.engineerName, answer.engineerID, answer.engineerEmail, answer.engineerPhone)
        teamArray.push(newEngineer)
        console.log(teamArray)
        switch(answer.memberType){
            case 'Engineer':
                promptEngineer()
                break
            case 'Intern':
                promptIntern()
                break
            case 'Finish building my team':
                endPrompt()
        }
    })

    const promptIntern = () =>
    inquirer.prompt([
        {
            type:'input',
            message:"What is the intern's name?",
            name:'internName'
        },
        {
            type:'input',
            message:"What is the intern's id?",
            name:'internID'
        },
        {
            type:'input',
            message:"What is the intern's email?",
            name:'internEmail'
        },
        {
            type:'input',
            message:"What is the intern's phone number?",
            name:'internPhone'
        },
        {
            type:'list',
            message:"Which type of team member would you like to add?",
            choices:['Engineer', 'Intern', 'Finish building my team'],            
            name:'memberType'
        }
    ])
    .then(function(answer){
        const newIntern = new Intern(answer.internName, answer.internID, answer.internEmail, answer.internPhone)
        teamArray.push(newIntern)
        console.log(teamArray)
        switch(answer.memberType){
            case 'Engineer':
                promptEngineer()
                break
            case 'Intern':
                promptIntern()
                break
            case 'Finish building my team':
                endPrompt()
        }
    })

const endPrompt = () => {
    console.log(teamArray)
    const generateHTML = () =>
'team: ' + teamArray.value

    const write = (answer) => {
        writeFile('./dist/index.html', generateHTML(answer))
        .then(() => console.log('Success!'))
        .catch((err) => console.error(err))
    }
    write()
}

promptManager()

