const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, githubUsername, role){
        super(name, id, email, role)
        this.githubUsername = githubUsername
    }
    getGithub(){
        return this.githubUsername
    }
    getRole(){
        return this.role = "Engineer"
    }
}
module.exports = Engineer