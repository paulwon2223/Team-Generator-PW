const Manager = require('./../lib/Manager');

describe('managerName', () => {
    it('should return back manager name', () => {
        const manager = new Manager('paul');
    
    expect(manager.name).toEqual('paul')
    })
});

describe('managerId', () => {
    it('should return back manager ID', () => {
        const manager = new Manager('paul', '123')

    expect(manager.id).toEqual('123')
    })
});

describe('managerEmail', () => {
    it('should return back manager email', () => {
        const manager = new Manager('paul', '123', 'paul@gmail.com')
    
    expect(manager.email).toEqual('paul@gmail.com')
    })
});

describe('getOfficeNumber', () => {
    it('should return back manager office number', () => {
        const manager = new Manager('paul', '123', 'paul@gmail.com', '123')
    
    expect(manager.officeNumber).toEqual('123')
    expect(manager.getOfficeNumber()).toEqual('123')
    })
});

describe('getRole', () => {
    it('should return back manager as role', () => {
        const manager = new Manager
    
    expect(manager.getRole()).toEqual('Manager')
    })
})