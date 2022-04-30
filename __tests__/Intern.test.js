const Intern = require('./../lib/Intern');

describe('internName', () => {
    it('should return back intern name', () => {
        const intern = new Intern('paul');
    
    expect(intern.name).toEqual('paul')
    })
});

describe('internId', () => {
    it('should return back intern ID', () => {
        const intern = new Intern('paul', '123')

    expect(intern.id).toEqual('123')
    })
});

describe('internEmail', () => {
    it('should return back intern email', () => {
        const intern = new Intern('paul', '123', 'paul@gmail.com')
    
    expect(intern.email).toEqual('paul@gmail.com')
    })
});

describe('getSchool', () => {
    it('should return back intern school', () => {
        const intern = new Intern('paul', '123', 'paul@gmail.com', 'SMU')
    
    expect(intern.school).toEqual('SMU')
    expect(intern.getSchool()).toEqual('SMU')
    })
});

describe('getRole', () => {
    it('should return back intern as role', () => {
        const intern = new Intern
    
    expect(intern.getRole()).toEqual('Intern')
    })
})