

const getNames = (axios, people) => {
    axios('https://swapi.co/api/people')
    return Promise.resolve(people.map(p => p.name))
}

module.exports = getNames