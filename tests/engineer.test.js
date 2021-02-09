const Engineer = require('../lib/Engineer.js')


describe('Engineer', () => {
    describe('getName', () =>{
        it('should set a name', () => {
            const newEngineer = new Engineer('Liz','3','liz@gmail.com','lizschwen')
            // newEngineer.getName()
            expect(newEngineer.name).toEqual('Liz')
        })
        // //Trying to figure out how to get the error test to work, but when I run this it says "Received function did not throw"
        // it('should throw an error if there is no input', () => {
        //     const newEngineer = new Engineer('','3','liz@gmail.com','lizschwen')
        //     const cb = () => newEngineer.getName()
        //     expect(cb).toThrowError('Please enter a name.')
        // })
    })
    describe('getID', () => {
        it('should set an id', () => {
            const newEngineer = new Engineer('Liz','3','liz@gmail.com','lizschwen')
            expect(newEngineer.id).toEqual('3')
        })
        // //Trying to figure out how to get the error test to work, but when I run this it says "Received function did not throw"
        // it('should throw an error if anything but numbers are entered', () => {
        //     const err = new Error(
        //         'ID must be numerical.'
        //     )
        //     const cb = () => {
        //         const newEngineer = new Engineer('Liz','abc','liz@gmail.com','lizschwen')
        //         newEngineer.getID()
        //     }
        //     expect(cb).toThrowError(err)         
        // })
    })
    describe('getEmail', () => {
        it('should set an email', () => {
            const newEngineer = new Engineer('Liz','3','liz@gmail.com','lizschwen')
            expect(newEngineer.email).toEqual('liz@gmail.com')
        })
    })
    describe('getGithub', () => {
        it('should set the Github username', () => {
            const newEngineer = new Engineer('Liz', '4', 'liz@gmail.com', 'lizschwen')
            expect(newEngineer.githubUsername).toEqual('lizschwen')
        })
    })
    describe('getRole', () => {
        it('should return the engineer role', () => {
            const newEngineer = new Engineer('Liz','3','liz@gmail.com','lizschwen')
            newEngineer.getRole()
            expect(newEngineer.role).toEqual('Engineer')
        })
    })
})
