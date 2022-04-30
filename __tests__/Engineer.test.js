const Engineer = require('../lib/Engineer');

describe('engineerName', () => {
    it('should return back engineer name', () => {
        const engineer = new Engineer('paul');
    
    expect(engineer.name).toEqual('paul')
    })
});

describe('engineerId', () => {
    it('should return back engineer ID', () => {
        const engineer = new Engineer('paul', '123')

    expect(engineer.id).toEqual('123')
    })
});

describe('engineerEmail', () => {
    it('should return back engineer email', () => {
        const engineer = new Engineer('paul', '123', 'paul@gmail.com')
    
    expect(engineer.email).toEqual('paul@gmail.com')
    })
});

describe('getGithub', () => {
    it('should return back engineer Github', () => {
        const engineer = new Engineer('paul', '123', 'paul@gmail.com', 'paulwon2223')
    
    expect(engineer.github).toEqual('paulwon2223')
    expect(engineer.getGithub()).toEqual('paulwon2223')
    })
});

describe('getRole', () => {
    it('should return back engineer as role', () => {
        const engineer = new Engineer
    
    expect(engineer.getRole()).toEqual('Engineer')
    })
})