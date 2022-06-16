import { workingPositions } from './workingPositions';

const employees = [
    {
        name: 'Vincent Staggs',
        age: 25,
        admin: false,
        possition: workingPositions.JUNIOR,
    },
    {
        name: 'Tom Macinnis',
        age: 35,
        admin: true,
        possition: workingPositions.MANAGER
    },
    {
        name: 'Sherwood Keel',
        age: 27,
        admin: true,
        possition: workingPositions.PROGRAMMER
    },
    {
        name: 'Chas Stubbs',
        age: 28,
        admin: false,
        possition: workingPositions.EXPERT
    },
    {
        name: 'Dorian Spoon',
        age: 25,
        admin: false,
        possition: workingPositions.JUNIOR
    },
    {
        name: 'Paris Haag',
        age: 35,
        admin: true,
        possition: workingPositions.MANAGER
    },
    {
        name: 'Eddie Bohl',
        age: 27,
        admin: true,
        possition: workingPositions.PROGRAMMER
    },
    {
        name: 'George Downes',
        age: 28,
        admin: false,
        possition: workingPositions.EXPERT
    },
    {
        name: 'Sonny Mcdowell',
        age: 45,
        admin: false,
        possition: workingPositions.PROGRAMMER
    },
    {
        name: 'Andrew Billman',
        age: 25,
        admin: true,
        possition: workingPositions.MANAGER
    },
    {
        name: 'Delmar Neptune',
        age: 27,
        admin: true,
        possition: workingPositions.PROGRAMMER
    },
    {
        name: 'Keith Axelrod',
        age: 28,
        admin: false,
        possition: workingPositions.JUNIOR
    },
    {
        name: 'Maynard Hoffmeister',
        age: 25,
        admin: true,
        possition: workingPositions.EXPERT
    },
    {
        name: 'Sherman Browning',
        age: 35,
        admin: true,
        possition: workingPositions.MANAGER
    },
    {
        name: 'Christian Reber',
        age: 27,
        admin: true,
        possition: workingPositions.EXPERT
    },
    {
        name: 'Jewel Aceuedo',
        age: 28,
        admin: false,
        possition: workingPositions.EXPERT
    },
];


//   ES5 export
module.exports = {employees}


//   ES6 export
export {employees};


 