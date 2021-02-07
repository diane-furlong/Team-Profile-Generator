const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, githubUsername){
        super(name, id, email)
        this.githubUsername = githubUsername
    }
    getGithub(){
        return this.githubUsername
    }
    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer