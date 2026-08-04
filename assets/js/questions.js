/*
  questions.js
  ------------
  Question bank for the Physics & Astronomy Quiz.
  Each question object has:
    - category: "physics" | "astronomy" | "mixed"
    - question: string shown to the user
    - answers: array of 4 possible answers
    - correctIndex: index (0-3) of the correct answer in `answers`
*/

const QUESTIONS = [
  // ---------------- Physics ----------------
  {
    category: "physics",
    question: "What is the SI unit of force?",
    answers: ["Joule", "Newton", "Watt", "Pascal"],
    correctIndex: 1
  },
  {
    category: "physics",
    question: "Which law states that every action has an equal and opposite reaction?",
    answers: [
      "Newton's First Law",
      "Newton's Second Law",
      "Newton's Third Law",
      "Law of Conservation of Energy"
    ],
    correctIndex: 2
  },
  {
    category: "physics",
    question: "What is the speed of light in a vacuum (approx.)?",
    answers: [
      "300,000 km/s",
      "150,000 km/s",
      "3,000 km/s",
      "30,000 km/s"
    ],
    correctIndex: 0
  },
  {
    category: "physics",
    question: "Which particle has a negative electric charge?",
    answers: ["Proton", "Neutron", "Electron", "Positron"],
    correctIndex: 2
  },
  {
    category: "physics",
    question: "What quantity does the unit 'Ohm' measure?",
    answers: ["Current", "Voltage", "Resistance", "Power"],
    correctIndex: 2
  },
  {
    category: "physics",
    question: "What is the formula for kinetic energy?",
    answers: ["mgh", "1/2 mv^2", "F = ma", "P = IV"],
    correctIndex: 1
  },
  {
    category: "physics",
    question: "Which scientist developed the theory of general relativity?",
    answers: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"],
    correctIndex: 2
  },
  {
    category: "physics",
    question: "What type of wave does not require a medium to travel through?",
    answers: ["Sound wave", "Electromagnetic wave", "Water wave", "Seismic wave"],
    correctIndex: 1
  },
  {
    category: "physics",
    question: "What is the term for the resistance of an object to changes in its motion?",
    answers: ["Momentum", "Inertia", "Velocity", "Acceleration"],
    correctIndex: 1
  },
  {
    category: "physics",
    question: "Which of these is a vector quantity?",
    answers: ["Speed", "Mass", "Velocity", "Energy"],
    correctIndex: 2
  },

  // ---------------- Astronomy ----------------
  {
    category: "astronomy",
    question: "Which planet is known as the Red Planet?",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctIndex: 1
  },
  {
    category: "astronomy",
    question: "What is the closest star to Earth?",
    answers: ["Proxima Centauri", "Alpha Centauri", "The Sun", "Sirius"],
    correctIndex: 2
  },
  {
    category: "astronomy",
    question: "What galaxy is Earth located in?",
    answers: ["Andromeda", "Triangulum", "Milky Way", "Whirlpool"],
    correctIndex: 2
  },
  {
    category: "astronomy",
    question: "Which planet has the most extensive ring system?",
    answers: ["Uranus", "Neptune", "Jupiter", "Saturn"],
    correctIndex: 3
  },
  {
    category: "astronomy",
    question: "What is a light-year a measurement of?",
    answers: ["Time", "Distance", "Brightness", "Mass"],
    correctIndex: 1
  },
  {
    category: "astronomy",
    question: "What causes a lunar eclipse?",
    answers: [
      "The Moon passes between the Sun and Earth",
      "Earth passes between the Sun and the Moon",
      "The Sun passes between Earth and the Moon",
      "The Moon's orbit changes shape"
    ],
    correctIndex: 1
  },
  {
    category: "astronomy",
    question: "Which of these is NOT a terrestrial planet?",
    answers: ["Mercury", "Venus", "Earth", "Neptune"],
    correctIndex: 3
  },
  {
    category: "astronomy",
    question: "What is the name of the boundary around a black hole beyond which nothing can escape?",
    answers: ["Photon sphere", "Event horizon", "Accretion disk", "Singularity"],
    correctIndex: 1
  },
  {
    category: "astronomy",
    question: "Which spacecraft mission first landed humans on the Moon?",
    answers: ["Apollo 11", "Gemini 8", "Apollo 8", "Voyager 1"],
    correctIndex: 0
  },
  {
    category: "astronomy",
    question: "What type of star is our Sun classified as?",
    answers: ["Red giant", "White dwarf", "Yellow dwarf", "Neutron star"],
    correctIndex: 2
  },

  // ---------------- Mixed (Physics + Astronomy crossover) ----------------
  {
    category: "mixed",
    question: "What force keeps planets in orbit around the Sun?",
    answers: ["Magnetism", "Gravity", "Nuclear force", "Friction"],
    correctIndex: 1
  },
  {
    category: "mixed",
    question: "What nuclear process powers the Sun and other stars?",
    answers: ["Nuclear fission", "Radioactive decay", "Nuclear fusion", "Combustion"],
    correctIndex: 2
  },
  {
    category: "mixed",
    question: "What is the term for the bending of light as it passes near a massive object like a star?",
    answers: ["Refraction", "Diffraction", "Gravitational lensing", "Reflection"],
    correctIndex: 2
  },
  {
    category: "mixed",
    question: "What phenomenon causes a star's light to shift toward red as it moves away from Earth?",
    answers: ["Doppler effect", "Photoelectric effect", "Diffraction", "Polarization"],
    correctIndex: 0
  },
  {
    category: "mixed",
    question: "According to Kepler's laws, what shape do planetary orbits trace around the Sun?",
    answers: ["Perfect circles", "Ellipses", "Parabolas", "Spirals"],
    correctIndex: 1
  },
  {
    category: "mixed",
    question: "What is the name for a region of spacetime where gravity is so strong that not even light can escape?",
    answers: ["Nebula", "Black hole", "Pulsar", "Wormhole"],
    correctIndex: 1
  },
  {
    category: "mixed",
    question: "Which conservation law explains why a spinning ice skater speeds up when pulling their arms in — the same principle that shapes rotating galaxies?",
    answers: [
      "Conservation of energy",
      "Conservation of momentum",
      "Conservation of angular momentum",
      "Conservation of mass"
    ],
    correctIndex: 2
  },
  {
    category: "mixed",
    question: "What is the name of the theoretical point of infinite density at the center of a black hole?",
    answers: ["Event horizon", "Singularity", "Photon sphere", "Nucleus"],
    correctIndex: 1
  },
  {
    category: "mixed",
    question: "Which force is responsible for both holding atomic nuclei together and powering stellar fusion?",
    answers: ["Weak nuclear force", "Strong nuclear force", "Electromagnetic force", "Gravitational force"],
    correctIndex: 1
  },
  {
    category: "mixed",
    question: "What term describes the leftover radiation from the early universe, detectable throughout the sky?",
    answers: [
      "Solar wind",
      "Cosmic microwave background radiation",
      "Gamma-ray burst",
      "Hawking radiation"
    ],
    correctIndex: 1
  }
];