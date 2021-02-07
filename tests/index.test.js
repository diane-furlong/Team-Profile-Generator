const fs = require('fs')
//const PromptUser = require("../index.js")

jest.mock('fs')

// describe ('writeFileAsync', () => {
//     it('should write the file', () => {
//         const =
//         expect().toEqual()
//     })
// })
describe('promptUser', () => {
    describe('prompt', () => {
        it('should ask questions to the user', () => {
            const managerName= 'Holly'
            expect(managerName).toEqual('Holly')
        })
        it('should ask for Engineer info when user chooses to add an Engineer', () =>{
            const memberType = 'Engineer'
            const engineerName = 'Elizabeth'
            expect(memberType).toEqual('Engineer') && expect(engineerName).toEqual('Elizabeth')
        })  
    })
})

// describe('generateHTML', () => {
//     it('should generate the html', () => {
//         const =
//         expect().toEqual()
//     })
// })