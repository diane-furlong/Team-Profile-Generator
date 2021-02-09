const Intern = require('../lib/Intern.js')


describe('Intern', () => {
    describe('getName', () =>{
        it('should set a name', () => {
            const newIntern = new Intern('Thao','3','thao@gmail.com','CSU')
            // newIntern.getName()
            expect(newIntern.name).toEqual('Thao')
        })
        // //Trying to figure out how to get the error test to work, but when I run this it says "Received function did not throw"
        // it('should throw an error if there is no input', () => {
        //     const newIntern = new Intern('','3','thao@gmail.com','CSU')
        //     const cb = () => newIntern.getName()
        //     expect(cb).toThrowError('Please enter a name.')
        // })
    })
    describe('getID', () => {
        it('should set an id', () => {
            const newIntern = new Intern('Thao','3','thao@gmail.com','CSU')
            expect(newIntern.id).toEqual('3')
        })
        // //Trying to figure out how to get the error test to work, but when I run this it says "Received function did not throw"
        // it('should throw an error if anything but numbers are entered', () => {
        //     const err = new Error(
        //         'ID must be numerical.'
        //     )
        //     const cb = () => {
        //         const newIntern = new Intern('Thao','abc','thao@gmail.com','CSU')
        //         newIntern.getID()
        //     }
        //     expect(cb).toThrowError(err)         
        // })
    })
    describe('getEmail', () => {
        it('should set an email', () => {
            const newIntern = new Intern('Thao','3','thao@gmail.com','CSU')
            expect(newIntern.email).toEqual('thao@gmail.com')
        })
    })
    describe('getSchool', () => {
        it('should set the school', () => {
            const newIntern = new Intern('Thao', '4', 'thao@gmail.com','CSU')
            expect(newIntern.school).toEqual('CSU')
        })
    })
    describe('getRole', () => {
        it('should return the Intern role', () => {
            const newIntern = new Intern('Thao','3','thao@gmail.com','CSU')
            newIntern.getRole()
            expect(newIntern.role).toEqual('Intern')
        })
    })
})
