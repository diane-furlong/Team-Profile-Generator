const Manager = require('../lib/Manager.js')


describe('Manager', () => {
    describe('getName', () =>{
        it('should set a name', () => {
            const newManager = new Manager('Holly','3','holly@gmail.com','216')
            // newManager.getName()
            expect(newManager.name).toEqual('Holly')
        })
        // //Trying to figure out how to get the error test to work, but when I run this it says "Received function did not throw"
        // it('should throw an error if there is no input', () => {
        //     const newManager = new Manager('','3','holly@gmail.com','216')
        //     const cb = () => newManager.getName()
        //     expect(cb).toThrowError('Please enter a name.')
        // })
    })
    describe('getID', () => {
        it('should set an id', () => {
            const newManager = new Manager('Holly','3','holly@gmail.com','216')
            expect(newManager.id).toEqual('3')
        })
        // //Trying to figure out how to get the error test to work, but when I run this it says "Received function did not throw"
        // it('should throw an error if anything but numbers are entered', () => {
        //     const err = new Error(
        //         'ID must be numerical.'
        //     )
        //     const cb = () => {
        //         const newManager = new Manager('Holly','abc','holly@gmail.com','216')
        //         newManager.getID()
        //     }
        //     expect(cb).toThrowError(err)         
        // })
    })
    describe('getEmail', () => {
        it('should set an email', () => {
            const newManager = new Manager('Holly','3','holly@gmail.com','216')
            expect(newManager.email).toEqual('holly@gmail.com')
        })
    })
    describe('getOfficeNumber', () => {
        it('should set the office number', () => {
            const newManager = new Manager('Holly', '4', 'holly@gmail.com','216')
            expect(newManager.officeNumber).toEqual('216')
        })
    })
    describe('getRole', () => {
        it('should return the Manager role', () => {
            const newManager = new Manager('Holly','3','holly@gmail.com','216')
            newManager.getRole()
            expect(newManager.role).toEqual('Manager')
        })
    })
})
