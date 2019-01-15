// FACTORY //

const dog = () => {
    let sound = 'woof'
    return {
        talk: () => console.log(sound),
        changeBreed: () => sound = 'meow'
    }
}

const sniffles = dog();
sniffles.talk();
sniffles.changeBreed();
sniffles.talk();

const puddles = dog();
puddles.talk();



// COMPOSITION - defining things by what they do, where
    // inheritance using classes/factories is defining things
        // by what they are (anmials => cat, dog, robotdog?)

const barker = (state) => ({
    bark: () => console.log('Woof, I am ' + state.name)
})

const driver = (state) => ({
    drive: () => state.position = state.position + state.speed
})

const killer = (state) => ({
    kill: () => state.name = 'killer'
})

const murderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0
    }
    return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state)
    )
}

barker({name: 'karo'}).bark();
console.log(murderRobotDog('sniffles').kill())
