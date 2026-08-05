// Physics Quiz Questions

const physicsQuestions = [{
        question: 'What is the SI unit of force?',
        options: ['Joule', 'Newton', 'Watt', 'Pascal'],
        answer: 1
    },
    {
        question: 'Which scientist proposed the theory of gravity?',
        options: ['Albert Einstein', 'Isaac Newton', 'Nikola Tesla', 'Marie Curie'],
        answer: 1
    },
    {
        question: 'What is the speed of light in a vacuum?',
        options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
        answer: 0
    },
    {
        question: 'What do we call the change in velocity over time?',
        options: ['Speed', 'Distance', 'Acceleration', 'Momentum'],
        answer: 2
    },
    {
        question: 'What is the name of the force that is responsible for holding protons and neutrons together in the nucleus of an atom?',
        options: ['Electromagnetic Force', 'Strong Nuclear Force', 'Weak Nuclear Force', 'Gravitational Force'],
        answer: 1
    },
    {
        question: 'What is the force that pulls objects toward Earth?',
        options: ['Magnetism', 'Gravity', 'Friction', 'Electricity'],
        answer: 1
    },
    {
        question: 'What is the name of the process by which a solid turns into a liquid?',
        options: ['Freezing', 'Condensation', 'Melting', 'Evaporation'],
        answer: 2
    },
    {
        question: 'Which part of the atom has a negative charge?',
        options: ['Proton', 'Neutron', 'Electron', 'Nucleus'],
        answer: 2
    },
    {
        question: 'What does a thermometer measure?',
        options: ['Pressure', 'Temperature', 'Volume', 'Mass'],
        answer: 1
    },
    {
        question: 'What is the term for the amount of matter in an object?',
        options: ['Weight', 'Mass', 'Density', 'Volume'],
        answer: 1
    }
];

// Astronomy Quiz Questions

const astronomyQuestions = [{
        question: 'What is the largest planet in our solar system?',
        options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
        answer: 2
    },
    {
        question: 'What is the name of Earth\'s natural satellite?',
        options: ['Mars', 'The Moon', 'Venus', 'Comet'],
        answer: 1
    },
    {
        question: 'Which planet is known as the Morning Star or Evening Star?',
        options: ['Mercury', 'Venus', 'Mars', 'Uranus'],
        answer: 1
    },
    {
        question: 'What galaxy is our solar system a part of?',
        options: ['Andromeda', 'Milky Way', 'Whirlpool', 'Sombrero'],
        answer: 1
    },
    {
        question: 'What is a light-year?',
        options: ['A unit of time', 'A unit of distance', 'A type of star', 'A type of planet'],
        answer: 1
    },
    {
        question: 'Which celestial object is known for having a tail when near the Sun?',
        options: ['Asteroid', 'Meteor', 'Comet', 'Moon'],
        answer: 2
    },
    {
        question: 'What causes day and night on Earth?',
        options: ['Earth\'s orbit around the Sun', 'The Moon\'s orbit', 'Earth\'s rotation', 'The Sun\'s movement'],
        answer: 2
    },
    {
        question: 'Which planet is famous for its rings?',
        options: ['Mars', 'Saturn', 'Mercury', 'Venus'],
        answer: 1
    },
    {
        question: 'What is the name of the nearest star to the Sun?',
        options: ['Proxima Centauri', 'Sirius', 'Polaris', 'Betelgeuse'],
        answer: 0
    },
    {
        question: 'What do astronomers call a large cloud of gas and dust in space?',
        options: ['Nebula', 'Meteorite', 'Asteroid Belt', 'Galaxy'],
        answer: 0
    }
];

// Mixed Quiz Questions

const allQuestions = [...physicsQuestions, ...astronomyQuestions];