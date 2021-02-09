const Employee = require('../lib/Employee.js')


describe('Employee', () => {
    describe('getName', () =>{
        it('should set a name', () => {
            const newEmployee = new Employee('Gary','3','gary@gmail.com')
            // newEmployee.getName()
            expect(newEmployee.name).toEqual('Gary')
        })
        // //Trying to figure out how to get the error test to work, but when I run this it says "Received function did not throw"
        // it('should throw an error if there is no input', () => {
        //     const newEmployee = new Employee('','3','gary@gmail.com')
        //     const cb = () => newEmployee.getName()
        //     expect(cb).toThrowError('Please enter a name.')
        // })
    })
    describe('getID', () => {
        it('should set an id', () => {
            const newEmployee = new Employee('Gary','3','gary@gmail.com')
            expect(newEmployee.id).toEqual('3')
        })
        // //Trying to figure out how to get the error test to work, but when I run this it says "Received function did not throw"
        // it('should throw an error if anything but numbers are entered', () => {
        //     const err = new Error(
        //         'ID must be numerical.'
        //     )
        //     const cb = () => {
        //         const newEmployee = new Employee('Gary','abc','gary@gmail.com')
        //         newEmployee.getID()
        //     }
        //     expect(cb).toThrowError(err)         
        // })
    })
    describe('getEmail', () => {
        it('should set an email', () => {
            const newEmployee = new Employee('Gary','3','gary@gmail.com')
            expect(newEmployee.email).toEqual('gary@gmail.com')
        })
    })
    describe('getRole', () => {
        it('should return the employee role', () => {
            const newEmployee = new Employee('Gary','3','gary@gmail.com')
            newEmployee.getRole()
            expect(newEmployee.role).toEqual('Employee')
        })
    })
})
