const Employee = require('../lib/Employee')

describe('getName', () => {
    it('should return back employee name', () => {
        const employee = new Employee('Paul');
    
    expect(employee.name).toEqual('Paul');
    expect(employee.getName()).toEqual('Paul')
    })
});

describe('getId', () => {
    it('should return back employee name', () => {
        const employee = new Employee('Paul', '123');
    
    expect(employee.id).toEqual('123');
    expect(employee.getId()).toEqual('123')
    
    })
});

describe('getEmail', () => {
    it('should return back employee email', () => {
        const employee = new Employee('Paul', '123', 'paul@gmail.com');
    
    expect(employee.email).toEqual('paul@gmail.com');
    expect(employee.getEmail()).toEqual('paul@gmail.com')
    })
});

describe('getRole', () => {
    it('should return back employee as role', () => {
        const employee = new Employee
    
    expect(employee.getRole()).toEqual('Employee')
    })
})