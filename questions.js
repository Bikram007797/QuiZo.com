const QUIZ_DATA = {
    daily: {
        GEOGRAPHY: {
            chapters: [
                {
                    name: "Physical Geography",
                    sets: [
                        {
                            questions: [
                               
  {
    "id": "solar_system_q1",
    "question": "The Nebular Hypothesis of solar system formation was first proposed by:",
    "options": ["Fred Hoyle", "Immanuel Kant", "Copernicus", "Chamberlin and Moulton"],
    "correct": 1,
    "explanation": "Proposed in 1755, later modified by Laplace in 1796. Explains the solar system formed from a rotating cloud of gas and dust."
  },
  {
    "id": "solar_system_q2",
    "question": "Which of the following is/are luminous celestial bodies? 1. Stars 2. Planets 3. Galaxies",
    "options": ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    "correct": 1,
    "explanation": "Stars emit light, galaxies are clusters of luminous stars. Planets only reflect sunlight → non-luminous."
  },
  {
    "id": "solar_system_q3",
    "question": "Consider the following statements about Venus: 1. It rotates clockwise. 2. Its rotation is slower than its revolution. 3. It is the brightest planet.",
    "options": ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    "correct": 3,
    "explanation": "Venus has retrograded (clockwise) rotation, one rotation takes 243 Earth days > revolution (225 days). Brightest due to thick clouds reflecting sunlight."
  },
  {
    "id": "solar_system_q4",
    "question": "Which one of the following planets has the largest number of moons?",
    "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
    "correct": 1,
    "explanation": "Saturn has the highest no. of moons (latest data), the highest in the solar system."
  },
  {
    "id": "solar_system_q5",
    "question": "Which planet has the longest revolution period?",
    "options": ["Jupiter", "Uranus", "Neptune", "Pluto"],
    "correct": 2,
    "explanation": "Neptune takes 165 Earth years to complete one revolution around the Sun. (Pluto is a dwarf planet, not a main planet)."
  },
  {
    "id": "solar_system_q6",
    "question": "Arrange the following correctly according to distance from the Sun: Mercury, Uranus, Earth, Neptune",
    "options": ["Mercury – Earth – Uranus – Neptune", "Mercury – Neptune – Earth – Uranus", "Earth – Mercury – Uranus – Neptune", "Mercury – Uranus – Neptune – Earth"],
    "correct": 0,
    "explanation": "Order of planets: Mercury (1st) → Earth (3rd) → Uranus (7th) → Neptune (8th)."
  },
  {
    "id": "solar_system_q7",
    "question": "The Kuiper Belt is mainly associated with:",
    "options": ["Origin of stars", "Dwarf planets like Pluto", "Asteroid distribution", "Formation of satellites"],
    "correct": 1,
    "explanation": "Kuiper Belt beyond Neptune contains icy objects & dwarf planets (Pluto, Haumea, Makemake, Eris)."
  },
  {
    "id": "solar_system_q8",
    "question": "Which of the following statements is correct about the Moon?",
    "options": ["It rotates and revolves at different speeds", "Its gravity is equal to Earth's", "One side always faces Earth due to synchronous rotation", "Light from the Moon takes 8 minutes to reach Earth"],
    "correct": 2,
    "explanation": "Moon's rotation time = revolution time (27.3 days), so only one side is visible from Earth."
  },
  {
    "id": "solar_system_q9",
    "question": "Match the following pairs correctly: 1. Callisto – (A) Mars 2. Deimos – (B) Jupiter 3. Titan – (C) Saturn 4. Triton – (D) Neptune",
    "options": ["1-A, 2-B, 3-C, 4-D", "1-B, 2-A, 3-C, 4-D", "1-A, 2-C, 3-D, 4-B", "1-D, 2-C, 3-B, 4-A"],
    "correct": 1,
    "explanation": "Deimos = Mars; Callisto = Jupiter; Titan = Saturn's largest moon; Triton = Neptune's largest moon."
  },
  {
    "id": "solar_system_q10",
    "question": "Aditya-L1 mission of ISRO is related to:",
    "options": ["Studying the Moon's surface", "Observing Mars atmosphere", "Solar observatory at Lagrange Point", "Exploration of asteroid belt"],
    "correct": 2,
    "explanation": "India's first solar mission placed at L1 point to study solar atmosphere & radiation."
  },
  {
    "id": "solar_system_q11",
    "question": "Consider the following statements about Jupiter: 1. Jupiter has the longest rotational period (i.e., it takes longer to spin once) among the planets. 2. The Great Red Spot is a persistent anticyclonic storm on Jupiter. 3. Ganymede, one of Jupiter's moons, is the largest satellite in the Solar System.",
    "options": ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    "correct": 2,
    "explanation": "Statement 1 is false — Jupiter actually has the shortest rotation period (~9.9 hours). Statements 2 and 3 are true: the Great Red Spot is a long-lived storm, and Ganymede is the largest moon (larger than Mercury in diameter)."
  },
  {
    "id": "solar_system_q12",
    "question": "Consider the following statements about Saturn and its rings/moons: 1. Saturn's mean density is less than water, so it would float in a large enough body of water. 2. Saturn's rings were observed in the 17th century and Huygens (1655) provided a major early description. 3. Cassini discovered a prominent gap in Saturn's rings in the 17th century (Cassini Division).",
    "options": ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    "correct": 3,
    "explanation": "All are true. Saturn's low mean density (<1 g/cm³) is well known. Galileo first observed ringlike features; Huygens provided a coherent description (1655) and Cassini later described the major gap (1675)."
  },
  {
    "id": "solar_system_q13",
    "question": "Consider the following statements about Uranus: 1. Uranus appears greenish because methane in its atmosphere absorbs red light and reflects blue/green wavelengths. 2. Uranus has the warmest surface temperature among the planets. 3. William Herschel is credited with discovering Uranus in 1781.",
    "options": ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    "correct": 0,
    "explanation": "Statements 1 and 3 are true — methane gives Uranus its blue-green hue and Herschel discovered it. Statement 2 is false — Uranus is not the warmest (it's quite cold)."
  },
  {
    "id": "solar_system_q14",
    "question": "Consider the following statements about Neptune: 1. Neptune's existence was predicted mathematically (perturbations in Uranus's orbit) before observational confirmation. 2. Triton is Neptune's largest moon and has a retrograde orbit. 3. Neptune is the innermost of the ice giant planets.",
    "options": ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    "correct": 1,
    "explanation": "Statement 1 is true — Le Verrier and Adams predicted Neptune; Galle observed it (1846). Triton is Neptune's largest moon and orbits retrograde (statement 2 true). Statement 3 is false — Neptune is the outermost of the major planets(not the innermost ice giant)."
  },
  {
    "id": "solar_system_q15",
    "question": "Assertion: In 2006 the International Astronomical Union (IAU) reclassified Pluto as a 'dwarf planet.' Reason: This reclassification occurred because Pluto's orbit lies within the main asteroid belt between Mars and Jupiter.",
    "options": ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true but R is false", "Both A and R are false"],
    "correct": 2,
    "explanation": "Assertion is true — the IAU redefined 'planet' in 2006, leading to Pluto's reclassification as a dwarf planet. The Reason is false — Pluto does not orbit in the main asteroid belt; it is a Kuiper Belt Object."
  },
  {
    "id": "solar_system_q16",
    "question": "Consider the following statements about Pluto and the Kuiper Belt: 1. Pluto's orbital period around the Sun is approximately 248 Earth years. 2. Pluto is a member of the Kuiper Belt population. 3. Charon is the largest of Pluto's satellites.",
    "options": ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    "correct": 3,
    "explanation": "All three are true. Pluto's orbit takes ~248 years, it resides in the Kuiper Belt beyond Neptune, and Charon is the largest of its known moons."
  },
  {
    "id": "solar_system_q17",
    "question": "Consider the following statements about luminous and non-luminous bodies: 1. Stars are luminous because they produce light via internal nuclear fusion. 2. Fireflies glow (bioluminescence) because they reflect sunlight using specialized scales. 3. Non-luminous objects like asteroids and comets shine in our sky by reflecting sunlight.",
    "options": ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    "correct": 0,
    "explanation": "Statement 1 true — stellar light originates from fusion. Statement 2 is false — fireflies produce light chemically, not by reflecting sunlight. Statement 3 is true — many small bodies are visible because they reflect sunlight."
  },
  {
    "id": "solar_system_q18",
    "question": "Consider the following statements about comets: 1. Comets are composed of rock, dust, ices and gases (a 'dirty snowball' composition). 2. Halley's Comet has an orbital period of roughly 76 years. 3. Comet tails always point toward the Sun when a comet is near perihelion.",
    "options": ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    "correct": 1,
    "explanation": "Statements 1 and 2 are true. Statement 3 is false — comet tails are pushed away from the Sun by the solar wind and radiation pressure."
  },
  {
    "id": "solar_system_q19",
    "question": "Consider the following statements about asteroids and meteoroids: 1. All asteroids are located beyond Neptune in the Kuiper Belt. 2. A meteoroid becomes a meteor when it enters Earth's atmosphere, and a meteorite if it reaches the ground. 3. The main asteroid belt is located between the orbits of Mars and Jupiter.",
    "options": ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    "correct": 2,
    "explanation": "Statement 1 is false — many asteroids inhabit the main belt between Mars and Jupiter. Statement 2 defines meteoroid→meteor→meteorite correctly. Statement 3 is correct."
  },
  {
    "id": "solar_system_q20",
    "question": "Assertion: Neptune has the shortest orbital period among the planets. Reason: Neptune is the closest planet to the Sun, so it completes its orbit fastest.",
    "options": ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not explain A", "A is true but R is false", "Both A and R are false"],
    "correct": 3,
    "explanation": "Both statements are false. Neptune is the farthest of the eight classical planets and therefore has a very long orbital period (~165 Earth years), not the shortest."
  },
  {
    "id": "solar_system_q21",
    "question": "Match the following planets with their unique features:",
    "options": ["A-3, B-2, C-1, D-4", "A-2, B-3, C-4, D-1", "A-1, B-4, C-2, D-3", "A-4, B-1, C-3, D-2"],
    "correct": 0,
    "explanation": "Mercury = smallest planet; Venus = hottest planet; Mars = Olympus Mons (largest volcano); Jupiter = Great Red Spot (giant storm)."
  },
  {
    "id": "solar_system_q22",
    "question": "Which of the following statements regarding comets is correct? a. Their tails are always directed towards the Sun b. Their tails are always directed away from the Sun c. They do not have any tails d. Their tails are directed parallel to their orbits",
    "options": ["a", "b", "c", "d"],
    "correct": 1,
    "explanation": "The tail of a comet is formed due to solar wind and radiation pressure. It always points away from the Sun, regardless of the comet's direction of motion."
  },
  {
    "id": "solar_system_q23",
    "question": "Consider the following statements about the Sun (energy and structure): 1. Approximately 99% of the Solar System's mass is in the Sun. 2. The Sun's composition is primarily hydrogen and helium with heavier elements in trace amounts. 3. Photons created in the core take a long, diffusive path (thousands to millions of years) to reach the photosphere before streaming to space.",
    "options": ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    "correct": 3,
    "explanation": "All three are correct. The Sun holds the lion's share of Solar System mass, is mainly H (~73%) and He (~25%), and radiative transport means photons diffuse outward over long timescales."
  },
  {
    "id": "solar_system_q24",
    "question": "Consider the following statements about Jupiter (satellites and rings): 1. Jupiter has no ring system at all. 2. Galileo discovered the four large Galilean satellites (Io, Europa, Ganymede, Callisto). 3. Ganymede is the largest moon in the Solar System.",
    "options": ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    "correct": 2,
    "explanation": "Statement 1 is false — Jupiter does have a faint ring system (discovered later). Statements 2 and 3 are true — Galileo observed the four Galilean moons, and Ganymede is the largest moon."
  },
  {
    "id": "solar_system_q25",
    "question": "Which of the following statement is correct?",
    "options": ["The density of Saturn is similar to that of Earth", "The Size of Earth and Venus are almost similar", "The size of Jupiter and Mars is similar", "Mars is the warmest planet"],
    "correct": 1,
    "explanation": "Earth and Venus are considered twin planets because their radius, mass and composition are close to each other. Venus is just slightly smaller than Earth."
  }

                            ]
                        },
                        {
                            questions: [
                                {
                                    id: "geo_d_c1_s2_q1",
                                    question: "Which continent has the most countries?",
                                    options: ["Africa", "Asia", "Europe", "South America"],
                                    correct: 0,
                                    explanation: "Africa has 54 recognized countries."
                                },
                                {
                                    id: "geo_d_c1_s2_q2",
                                    question: "Which is the largest desert in the world (by area)?",
                                    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                                    correct: 3,
                                    explanation: "The Antarctic polar desert is the largest by area."
                                },
                                {
                                    id: "geo_d_c1_s2_q3",
                                    question: "Which river is the longest in the world?",
                                    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                                    correct: 1,
                                    explanation: "Nile traditionally considered longest (country dependent)."
                                },
                                {
                                    id: "geo_d_c1_s2_q4",
                                    question: "The tectonic plates meet at _______.",
                                    options: ["Mantle", "Lithosphere", "Asthenosphere", "Crust"],
                                    correct: 1,
                                    explanation: "Plates are part of Earth's lithosphere."
                                },
                                {
                                    id: "geo_d_c1_s2_q5",
                                    question: "What is the term for the area where freshwater mixes with seawater?",
                                    options: ["Estuary", "Delta", "Gulf", "Basin"],
                                    correct: 0,
                                    explanation: "An estuary is a partially enclosed coastal water body where freshwater from rivers meets seawater."
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Human Geography",
                    sets: [
                        {
                            questions: [
                                {
                                    id: "geo_d_c2_s1_q1",
                                    question: "Which continent has the most countries?",
                                    options: ["Africa", "Asia", "Europe", "South America"],
                                    correct: 0,
                                    explanation: "Africa has 54 recognized countries."
                                },
                                {
                                    id: "geo_d_c2_s1_q2",
                                    question: "Which is the largest desert in the world (by area)?",
                                    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                                    correct: 3,
                                    explanation: "The Antarctic polar desert is the largest by area."
                                },
                                {
                                    id: "geo_d_c2_s1_q3",
                                    question: "Which river is the longest in the world?",
                                    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                                    correct: 1,
                                    explanation: "Nile traditionally considered longest (country dependent)."
                                },
                                {
                                    id: "geo_d_c2_s1_q4",
                                    question: "The tectonic plates meet at _______.",
                                    options: ["Mantle", "Lithosphere", "Asthenosphere", "Crust"],
                                    correct: 1,
                                    explanation: "Plates are part of Earth's lithosphere."
                                },
                                {
                                    id: "geo_d_c2_s1_q5",
                                    question: "What is the term for the area where freshwater mixes with seawater?",
                                    options: ["Estuary", "Delta", "Gulf", "Basin"],
                                    correct: 0,
                                    explanation: "An estuary is a partially enclosed coastal water body where freshwater from rivers meets seawater."
                                }
                            ]
                        },
                        {
                            questions: [
                                {
                                    id: "geo_d_c2_s2_q1",
                                    question: "Which continent has the most countries?",
                                    options: ["Africa", "Asia", "Europe", "South America"],
                                    correct: 0,
                                    explanation: "Africa has 54 recognized countries."
                                },
                                {
                                    id: "geo_d_c2_s2_q2",
                                    question: "Which is the largest desert in the world (by area)?",
                                    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                                    correct: 3,
                                    explanation: "The Antarctic polar desert is the largest by area."
                                },
                                {
                                    id: "geo_d_c2_s2_q3",
                                    question: "Which river is the longest in the world?",
                                    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                                    correct: 1,
                                    explanation: "Nile traditionally considered longest (country dependent)."
                                },
                                {
                                    id: "geo_d_c2_s2_q4",
                                    question: "The tectonic plates meet at _______.",
                                    options: ["Mantle", "Lithosphere", "Asthenosphere", "Crust"],
                                    correct: 1,
                                    explanation: "Plates are part of Earth's lithosphere."
                                },
                                {
                                    id: "geo_d_c2_s2_q5",
                                    question: "What is the term for the area where freshwater mixes with seawater?",
                                    options: ["Estuary", "Delta", "Gulf", "Basin"],
                                    correct: 0,
                                    explanation: "An estuary is a partially enclosed coastal water body where freshwater from rivers meets seawater."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        POLITY: {
            chapters: [
                {
                    name: "Constitutional Basics",
                    sets: [
                        {
                            questions: [
                                {
                                    id: "pol_d_c1_s1_q1",
                                    question: "Who is the supreme law of the land in India?",
                                    options: ["President", "Constitution", "Parliament", "Supreme Court"],
                                    correct: 1,
                                    explanation: "The Constitution is the supreme law of India."
                                },
                                {
                                    id: "pol_d_c1_s1_q2",
                                    question: "Which article of the Indian Constitution deals with equality before the law?",
                                    options: ["Article 12", "Article 14", "Article 21", "Article 19"],
                                    correct: 1,
                                    explanation: "Article 14 guarantees equality before law."
                                },
                                {
                                    id: "pol_d_c1_s1_q3",
                                    question: "Under which Article of the Indian Constitution can the President proclaim a Financial Emergency?",
                                    options: ["Article 352", "Article 356", "Article 360", "Article 368"],
                                    correct: 2,
                                    explanation: "Article 360 empowers the President to proclaim a Financial Emergency if India's financial stability or credit is threatened."
                                },
                                {
                                    id: "pol_d_c1_s1_q4",
                                    question: "The 'Doctrine of Basic Structure' of the Indian Constitution was propounded by the Supreme Court in which landmark case?",
                                    options: ["Golak Nath vs. State of Punjab (1967)", "Kesavananda Bharati vs. State of Kerala (1973)", "Minerva Mills vs. Union of India (1980)", "S.R. Bommai vs. Union of India (1994)"],
                                    correct: 1,
                                    explanation: "The Basic Structure doctrine was established in the Kesavananda Bharati case (1973)."
                                },
                                {
                                    id: "pol_d_c1_s1_q5",
                                    question: "The creation of a new state in India involves the:",
                                    options: ["Parliament passing a simple majority bill after the President's recommendation", "Parliament passing a bill with a two-thirds majority", "Concerned State Legislature passing a resolution, followed by a simple majority in Parliament", "Parliament passing a bill by simple majority, provided it is first referred to the concerned State Legislature for its opinion"],
                                    correct: 3,
                                    explanation: "Article 3 requires the bill to be referred to the state legislature before Parliament passes it by simple majority."
                                }
                            ]
                        },
                        {
                            questions: [
                                {
                                    id: "pol_d_c1_s2_q1",
                                    question: "Who is the supreme law of the land in India?",
                                    options: ["President", "Constitution", "Parliament", "Supreme Court"],
                                    correct: 1,
                                    explanation: "The Constitution is the supreme law of India."
                                },
                                {
                                    id: "pol_d_c1_s2_q2",
                                    question: "Which article of the Indian Constitution deals with equality before the law?",
                                    options: ["Article 12", "Article 14", "Article 21", "Article 19"],
                                    correct: 1,
                                    explanation: "Article 14 guarantees equality before law."
                                },
                                {
                                    id: "pol_d_c1_s2_q3",
                                    question: "Under which Article of the Indian Constitution can the President proclaim a Financial Emergency?",
                                    options: ["Article 352", "Article 356", "Article 360", "Article 368"],
                                    correct: 2,
                                    explanation: "Article 360 empowers the President to proclaim a Financial Emergency if India's financial stability or credit is threatened."
                                },
                                {
                                    id: "pol_d_c1_s2_q4",
                                    question: "The 'Doctrine of Basic Structure' of the Indian Constitution was propounded by the Supreme Court in which landmark case?",
                                    options: ["Golak Nath vs. State of Punjab (1967)", "Kesavananda Bharati vs. State of Kerala (1973)", "Minerva Mills vs. Union of India (1980)", "S.R. Bommai vs. Union of India (1994)"],
                                    correct: 1,
                                    explanation: "The Basic Structure doctrine was established in the Kesavananda Bharati case (1973)."
                                },
                                {
                                    id: "pol_d_c1_s2_q5",
                                    question: "The creation of a new state in India involves the:",
                                    options: ["Parliament passing a simple majority bill after the President's recommendation", "Parliament passing a bill with a two-thirds majority", "Concerned State Legislature passing a resolution, followed by a simple majority in Parliament", "Parliament passing a bill by simple majority, provided it is first referred to the concerned State Legislature for its opinion"],
                                    correct: 3,
                                    explanation: "Article 3 requires the bill to be referred to the state legislature before Parliament passes it by simple majority."
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Fundamental Rights",
                    sets: [
                        {
                            questions: [
                                {
                                    id: "pol_d_c2_s1_q1",
                                    question: "Who is the supreme law of the land in India?",
                                    options: ["President", "Constitution", "Parliament", "Supreme Court"],
                                    correct: 1,
                                    explanation: "The Constitution is the supreme law of India."
                                },
                                {
                                    id: "pol_d_c2_s1_q2",
                                    question: "Which article of the Indian Constitution deals with equality before the law?",
                                  options: ["Article 12", "Article 14", "Article 21", "Article 19"],
                                correct: 1,
                                explanation: "Article 14 guarantees equality before law."
                            },
                            {
                                id: "pol_d_c2_s1_q3",
                                question: "Under which Article of the Indian Constitution can the President proclaim a Financial Emergency?",
                                options: ["Article 352", "Article 356", "Article 360", "Article 368"],
                                correct: 2,
                                explanation: "Article 360 empowers the President to proclaim a Financial Emergency if India's financial stability or credit is threatened."
                            },
                            {
                                id: "pol_d_c2_s1_q4",
                                question: "The 'Doctrine of Basic Structure' of the Indian Constitution was propounded by the Supreme Court in which landmark case?",
                                options: ["Golak Nath vs. State of Punjab (1967)", "Kesavananda Bharati vs. State of Kerala (1973)", "Minerva Mills vs. Union of India (1980)", "S.R. Bommai vs. Union of India (1994)"],
                                correct: 1,
                                explanation: "The Basic Structure doctrine was established in the Kesavananda Bharati case (1973)."
                            },
                            {
                                id: "pol_d_c2_s1_q5",
                                question: "The creation of a new state in India involves the:",
                                options: ["Parliament passing a simple majority bill after the President's recommendation", "Parliament passing a bill with a two-thirds majority", "Concerned State Legislature passing a resolution, followed by a simple majority in Parliament", "Parliament passing a bill by simple majority, provided it is first referred to the concerned State Legislature for its opinion"],
                                correct: 3,
                                explanation: "Article 3 requires the bill to be referred to the state legislature before Parliament passes it by simple majority."
                            }
                        ]
                    },
                    {
                        questions: [
                            {
                                id: "pol_d_c2_s2_q1",
                                question: "Who is the supreme law of the land in India?",
                                options: ["President", "Constitution", "Parliament", "Supreme Court"],
                                correct: 1,
                                explanation: "The Constitution is the supreme law of India."
                            },
                            {
                                id: "pol_d_c2_s2_q2",
                                question: "Which article of the Indian Constitution deals with equality before the law?",
                                options: ["Article 12", "Article 14", "Article 21", "Article 19"],
                                correct: 1,
                                explanation: "Article 14 guarantees equality before law."
                            },
                            {
                                id: "pol_d_c2_s2_q3",
                                question: "Under which Article of the Indian Constitution can the President proclaim a Financial Emergency?",
                                options: ["Article 352", "Article 356", "Article 360", "Article 368"],
                                correct: 2,
                                explanation: "Article 360 empowers the President to proclaim a Financial Emergency if India's financial stability or credit is threatened."
                            },
                            {
                                id: "pol_d_c2_s2_q4",
                                question: "The 'Doctrine of Basic Structure' of the Indian Constitution was propounded by the Supreme Court in which landmark case?",
                                options: ["Golak Nath vs. State of Punjab (1967)", "Kesavananda Bharati vs. State of Kerala (1973)", "Minerva Mills vs. Union of India (1980)", "S.R. Bommai vs. Union of India (1994)"],
                                correct: 1,
                                explanation: "The Basic Structure doctrine was established in the Kesavananda Bharati case (1973)."
                            },
                            {
                                id: "pol_d_c2_s2_q5",
                                question: "The creation of a new state in India involves the:",
                                options: ["Parliament passing a simple majority bill after the President's recommendation", "Parliament passing a bill with a two-thirds majority", "Concerned State Legislature passing a resolution, followed by a simple majority in Parliament", "Parliament passing a bill by simple majority, provided it is first referred to the concerned State Legislature for its opinion"],
                                correct: 3,
                                explanation: "Article 3 requires the bill to be referred to the state legislature before Parliament passes it by simple majority."
                            }
                        ]
                    }
                ]
            }
        ]
    }
},
weekly: {
    GEOGRAPHY: {
        chapters: [
            {
                name: "Physical Geography",
                sets: [
                    {
                        questions: [
                            {
                                id: "geo_w_c1_s1_q1",
                                question: "Which continent has the most countries?",
                                options: ["Africa", "Asia", "Europe", "South America"],
                                correct: 0,
                                explanation: "Africa has 54 recognized countries."
                            },
                            {
                                id: "geo_w_c1_s1_q2",
                                question: "Which is the largest desert in the world (by area)?",
                                options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                                correct: 3,
                                explanation: "The Antarctic polar desert is the largest by area."
                            },
                            {
                                id: "geo_w_c1_s1_q3",
                                question: "Which river is the longest in the world?",
                                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                                correct: 1,
                                explanation: "Nile traditionally considered longest (country dependent)."
                            },
                            {
                                id: "geo_w_c1_s1_q4",
                                question: "The tectonic plates meet at _______.",
                                options: ["Mantle", "Lithosphere", "Asthenosphere", "Crust"],
                                correct: 1,
                                explanation: "Plates are part of Earth's lithosphere."
                            },
                            {
                                id: "geo_w_c1_s1_q5",
                                question: "What is the term for the area where freshwater mixes with seawater?",
                                options: ["Estuary", "Delta", "Gulf", "Basin"],
                                correct: 0,
                                explanation: "An estuary is a partially enclosed coastal water body where freshwater from rivers meets seawater."
                            }
                        ]
                    },
                    {
                        questions: [
                            {
                                id: "geo_w_c1_s2_q1",
                                question: "Which continent has the most countries?",
                                options: ["Africa", "Asia", "Europe", "South America"],
                                correct: 0,
                                explanation: "Africa has 54 recognized countries."
                            },
                            {
                                id: "geo_w_c1_s2_q2",
                                question: "Which is the largest desert in the world (by area)?",
                                options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                                correct: 3,
                                explanation: "The Antarctic polar desert is the largest by area."
                            },
                            {
                                id: "geo_w_c1_s2_q3",
                                question: "Which river is the longest in the world?",
                                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                                correct: 1,
                                explanation: "Nile traditionally considered longest (country dependent)."
                            },
                            {
                                id: "geo_w_c1_s2_q4",
                                question: "The tectonic plates meet at _______.",
                                options: ["Mantle", "Lithosphere", "Asthenosphere", "Crust"],
                                correct: 1,
                                explanation: "Plates are part of Earth's lithosphere."
                            },
                            {
                                id: "geo_w_c1_s2_q5",
                                question: "What is the term for the area where freshwater mixes with seawater?",
                                options: ["Estuary", "Delta", "Gulf", "Basin"],
                                correct: 0,
                                explanation: "An estuary is a partially enclosed coastal water body where freshwater from rivers meets seawater."
                            }
                        ]
                    }
                ]
            },
            {
                name: "Human Geography",
                sets: [
                    {
                        questions: [
                            {
                                id: "geo_w_c2_s1_q1",
                                question: "Which continent has the most countries?",
                                options: ["Africa", "Asia", "Europe", "South America"],
                                correct: 0,
                                explanation: "Africa has 54 recognized countries."
                            },
                            {
                                id: "geo_w_c2_s1_q2",
                                question: "Which is the largest desert in the world (by area)?",
                                options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                                correct: 3,
                                explanation: "The Antarctic polar desert is the largest by area."
                            },
                            {
                                id: "geo_w_c2_s1_q3",
                                question: "Which river is the longest in the world?",
                                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                                correct: 1,
                                explanation: "Nile traditionally considered longest (country dependent)."
                            },
                            {
                                id: "geo_w_c2_s1_q4",
                                question: "The tectonic plates meet at _______.",
                                options: ["Mantle", "Lithosphere", "Asthenosphere", "Crust"],
                                correct: 1,
                                explanation: "Plates are part of Earth's lithosphere."
                            },
                            {
                                id: "geo_w_c2_s1_q5",
                                question: "What is the term for the area where freshwater mixes with seawater?",
                                options: ["Estuary", "Delta", "Gulf", "Basin"],
                                correct: 0,
                                explanation: "An estuary is a partially enclosed coastal water body where freshwater from rivers meets seawater."
                            }
                        ]
                    },
                    {
                        questions: [
                            {
                                id: "geo_w_c2_s2_q1",
                                question: "Which continent has the most countries?",
                                options: ["Africa", "Asia", "Europe", "South America"],
                                correct: 0,
                                explanation: "Africa has 54 recognized countries."
                            },
                            {
                                id: "geo_w_c2_s2_q2",
                                question: "Which is the largest desert in the world (by area)?",
                                options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                                correct: 3,
                                explanation: "The Antarctic polar desert is the largest by area."
                            },
                            {
                                id: "geo_w_c2_s2_q3",
                                question: "Which river is the longest in the world?",
                                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                                correct: 1,
                                explanation: "Nile traditionally considered longest (country dependent)."
                            },
                            {
                                id: "geo_w_c2_s2_q4",
                                question: "The tectonic plates meet at _______.",
                                options: ["Mantle", "Lithosphere", "Asthenosphere", "Crust"],
                                correct: 1,
                                explanation: "Plates are part of Earth's lithosphere."
                            },
                            {
                                id: "geo_w_c2_s2_q5",
                                question: "What is the term for the area where freshwater mixes with seawater?",
                                options: ["Estuary", "Delta", "Gulf", "Basin"],
                                correct: 0,
                                explanation: "An estuary is a partially enclosed coastal water body where freshwater from rivers meets seawater."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    POLITY: {
        chapters: [
            {
                name: "Constitutional Basics",
                sets: [
                    {
                        questions: [
                            {
                                id: "pol_w_c1_s1_q1",
                                question: "Who is the supreme law of the land in India?",
                                options: ["President", "Constitution", "Parliament", "Supreme Court"],
                                correct: 1,
                                explanation: "The Constitution is the supreme law of India."
                            },
                            {
                                id: "pol_w_c1_s1_q2",
                                question: "Which article of the Indian Constitution deals with equality before the law?",
                                options: ["Article 12", "Article 14", "Article 21", "Article 19"],
                                correct: 1,
                                explanation: "Article 14 guarantees equality before law."
                            },
                            {
                                id: "pol_w_c1_s1_q3",
                                question: "Under which Article of the Indian Constitution can the President proclaim a Financial Emergency?",
                                options: ["Article 352", "Article 356", "Article 360", "Article 368"],
                                correct: 2,
                                explanation: "Article 360 empowers the President to proclaim a Financial Emergency if India's financial stability or credit is threatened."
                            },
                            {
                                id: "pol_w_c1_s1_q4",
                                question: "The 'Doctrine of Basic Structure' of the Indian Constitution was propounded by the Supreme Court in which landmark case?",
                                options: ["Golak Nath vs. State of Punjab (1967)", "Kesavananda Bharati vs. State of Kerala (1973)", "Minerva Mills vs. Union of India (1980)", "S.R. Bommai vs. Union of India (1994)"],
                                correct: 1,
                                explanation: "The Basic Structure doctrine was established in the Kesavananda Bharati case (1973)."
                            },
                            {
                                id: "pol_w_c1_s1_q5",
                                question: "The creation of a new state in India involves the:",
                                options: ["Parliament passing a simple majority bill after the President's recommendation", "Parliament passing a bill with a two-thirds majority", "Concerned State Legislature passing a resolution, followed by a simple majority in Parliament", "Parliament passing a bill by simple majority, provided it is first referred to the concerned State Legislature for its opinion"],
                                correct: 3,
                                explanation: "Article 3 requires the bill to be referred to the state legislature before Parliament passes it by simple majority."
                            }
                        ]
                    },
                    {
                        questions: [
                            {
                                id: "pol_w_c1_s2_q1",
                                question: "Who is the supreme law of the land in India?",
                                options: ["President", "Constitution", "Parliament", "Supreme Court"],
                                correct: 1,
                                explanation: "The Constitution is the supreme law of India."
                            },
                            {
                                id: "pol_w_c1_s2_q2",
                                question: "Which article of the Indian Constitution deals with equality before the law?",
                                options: ["Article 12", "Article 14", "Article 21", "Article 19"],
                                correct: 1,
                                explanation: "Article 14 guarantees equality before law."
                            },
                            {
                                id: "pol_w_c1_s2_q3",
                                question: "Under which Article of the Indian Constitution can the President proclaim a Financial Emergency?",
                                options: ["Article 352", "Article 356", "Article 360", "Article 368"],
                                correct: 2,
                                explanation: "Article 360 empowers the President to proclaim a Financial Emergency if India's financial stability or credit is threatened."
                            },
                            {
                                id: "pol_w_c1_s2_q4",
                                question: "The 'Doctrine of Basic Structure' of the Indian Constitution was propounded by the Supreme Court in which landmark case?",
                                options: ["Golak Nath vs. State of Punjab (1967)", "Kesavananda Bharati vs. State of Kerala (1973)", "Minerva Mills vs. Union of India (1980)", "S.R. Bommai vs. Union of India (1994)"],
                                correct: 1,
                                explanation: "The Basic Structure doctrine was established in the Kesavananda Bharati case (1973)."
                            },
                            {
                                id: "pol_w_c1_s2_q5",
                                question: "The creation of a new state in India involves the:",
                                options: ["Parliament passing a simple majority bill after the President's recommendation", "Parliament passing a bill with a two-thirds majority", "Concerned State Legislature passing a resolution, followed by a simple majority in Parliament", "Parliament passing a bill by simple majority, provided it is first referred to the concerned State Legislature for its opinion"],
                                correct: 3,
                                explanation: "Article 3 requires the bill to be referred to the state legislature before Parliament passes it by simple majority."
                            }
                        ]
                    }
                ]
            },
            {
                name: "Fundamental Rights",
                sets: [
                    {
                        questions: [
                            {
                                id: "pol_w_c2_s1_q1",
                                question: "Who is the supreme law of the land in India?",
                                options: ["President", "Constitution", "Parliament", "Supreme Court"],
                                correct: 1,
                                explanation: "The Constitution is the supreme law of India."
                            },
                            {
                                id: "pol_w_c2_s1_q2",
                                question: "Which article of the Indian Constitution deals with equality before the law?",
                                options: ["Article 12", "Article 14", "Article 21", "Article 19"],
                                correct: 1,
                                explanation: "Article 14 guarantees equality before law."
                            },
                            {
                                id: "pol_w_c2_s1_q3",
                                question: "Under which Article of the Indian Constitution can the President proclaim a Financial Emergency?",
                                options: ["Article 352", "Article 356", "Article 360", "Article 368"],
                                correct: 2,
                                explanation: "Article 360 empowers the President to proclaim a Financial Emergency if India's financial stability or credit is threatened."
                            },
                            {
                                id: "pol_w_c2_s1_q4",
                                question: "The 'Doctrine of Basic Structure' of the Indian Constitution was propounded by the Supreme Court in which landmark case?",
                                options: ["Golak Nath vs. State of Punjab (1967)", "Kesavananda Bharati vs. State of Kerala (1973)", "Minerva Mills vs. Union of India (1980)", "S.R. Bommai vs. Union of India (1994)"],
                                correct: 1,
                                explanation: "The Basic Structure doctrine was established in the Kesavananda Bharati case (1973)."
                            },
                            {
                                id: "pol_w_c2_s1_q5",
                                question: "The creation of a new state in India involves the:",
                                options: ["Parliament passing a simple majority bill after the President's recommendation", "Parliament passing a bill with a two-thirds majority", "Concerned State Legislature passing a resolution, followed by a simple majority in Parliament", "Parliament passing a bill by simple majority, provided it is first referred to the concerned State Legislature for its opinion"],
                                correct: 3,
                                explanation: "Article 3 requires the bill to be referred to the state legislature before Parliament passes it by simple majority."
                            }
                        ]
                    },
                    {
                        questions: [
                            {
                                id: "pol_w_c2_s2_q1",
                                question: "Who is the supreme law of the land in India?",
                                options: ["President", "Constitution", "Parliament", "Supreme Court"],
                                correct: 1,
                                explanation: "The Constitution is the supreme law of India."
                            },
                            {
                                id: "pol_w_c2_s2_q2",
                                question: "Which article of the Indian Constitution deals with equality before the law?",
                                options: ["Article 12", "Article 14", "Article 21", "Article 19"],
                                correct: 1,
                                explanation: "Article 14 guarantees equality before law."
                            },
                            {
                                id: "pol_w_c2_s2_q3",
                                question: "Under which Article of the Indian Constitution can the President proclaim a Financial Emergency?",
                                options: ["Article 352", "Article 356", "Article 360", "Article 368"],
                                correct: 2,
                                explanation: "Article 360 empowers the President to proclaim a Financial Emergency if India's financial stability or credit is threatened."
                            },
                            {
                                id: "pol_w_c2_s2_q4",
                                question: "The 'Doctrine of Basic Structure' of the Indian Constitution was propounded by the Supreme Court in which landmark case?",
                                options: ["Golak Nath vs. State of Punjab (1967)", "Kesavananda Bharati vs. State of Kerala (1973)", "Minerva Mills vs. Union of India (1980)", "S.R. Bommai vs. Union of India (1994)"],
                                correct: 1,
                                explanation: "The Basic Structure doctrine was established in the Kesavananda Bharati case (1973)."
                            },
                            {
                                id: "pol_w_c2_s2_q5",
                                question: "The creation of a new state in India involves the:",
                                options: ["Parliament passing a simple majority bill after the President's recommendation", "Parliament passing a bill with a two-thirds majority", "Concerned State Legislature passing a resolution, followed by a simple majority in Parliament", "Parliament passing a bill by simple majority, provided it is first referred to the concerned State Legislature for its opinion"],
                                correct: 3,
                                explanation: "Article 3 requires the bill to be referred to the state legislature before Parliament passes it by simple majority."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
};
