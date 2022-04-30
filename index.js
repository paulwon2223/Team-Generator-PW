// requiring the neccessary directory
const inq = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern');
const generateTeam = require('./src/generateTeam')

// main array in which the data from the quesitons will be stored in
let teamArray = [];

// generates user info first and displays on page
const generalQuestion = () => {
    inq.prompt([
        {
        message: 'Enter your name (required)',
        name: 'name',
        value: 'input',
        },
        {
        message: 'Enter your office ID (required)',
        name: 'id',
        value: 'input',
        },
        {
        message: 'Enter your email (required)',
        name: 'email',
        value: 'input',
        },
    ]).then((data) => {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        selectEmployee();
    })
};

// asks user which type of employee they want to generate and invokes its own function accordignly
const selectEmployee = () => {
    inq.prompt([
    {
        message: 'Add employee or select done when finished',
        name: 'addEmployee',
        type: 'list',
        choices: ['Manager', 
                  'Engineer', 
                  'Intern',
                  'Done'],
    },       
    ]).then((data) => {
        const employeeChoices = data.addEmployee;

        // invokes its own according function depending on the choice
        if(employeeChoices === 'Manager') {
            managerChoices();
        } else if (employeeChoices === 'Engineer') {
            engineerChoices();
        } else if (employeeChoices === 'Intern') {
            internChoices();
        } else if (employeeChoices === 'Done') {
            finishChoices();
        }
    })
};

// function that invokes questions for manager
const managerChoices = () => {
    inq.prompt([
        {
        message: 'Enter mananger name',
        name: 'managerName',
        value: 'input', 
        },
        {
        message: 'Enter manager ID',
        name: 'managerId',
        value: 'input', 
        },
        {
        message: 'Enter manager email',
        name: 'managerEmail',
        value: 'input', 
        },
        {
        message: 'Enter manager office number',
        name: 'managerOffice',
        value: 'input', 
        },
    ]).then((data) => {
        const newManager = new Manager (data.managerName, data.managerId, data.managerEmail, data.managerOffice)
        // pushing data for manager into main array 
        teamArray.push(newManager);
        console.log(teamArray);
        selectEmployee();
    })
};

// function that invokes questions for engineer
const engineerChoices = () => {
    inq.prompt([
        {
        message: 'Enter engineer name',
        name: 'engineerName',
        value: 'input', 
        },
        {
        message: 'Enter engineer ID',
        name: 'engineerId',
        value: 'input', 
        },
        {
        message: 'Enter engineer email',
        name: 'engineerEmail',
        value: 'input', 
        },
        {
        message: 'Enter engineer github username',
        name: 'engineerUsername',
        value: 'input', 
        },
    ]).then((data) => {
        const newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerUsername)
        teamArray.push(newEngineer)
        console.log(teamArray);
        selectEmployee();
    })
};

// function that invokes questions for intern
const internChoices = () => {
    inq.prompt([
        {
        message: 'Enter intern name',
        name: 'internName',
        value: 'input', 
        },
        {
        message: 'Enter intern ID',
        name: 'internId',
        value: 'input', 
        },
        {
        message: 'Enter intern email',
        name: 'internEmail',
        value: 'input', 
        },
        {
        message: 'Enter intern`s university',
        name: 'internSchool',
        value: 'input', 
        },
    ]).then((data) => {
        const newIntern = new Intern (data.internName, data.internId, data.internEmail, data.internSchool)
        teamArray.push(newIntern)
        console.log(teamArray);
        selectEmployee();
    })
};

// when finished generating team, this function creates the html file using fs 
const finishChoices = () => {
    console.log('Team Profile Successfully Created!');
    fs.writeFileSync('test.html', generateTeam(teamArray), 'UTF-8')
}

// invoking main question
generalQuestion();