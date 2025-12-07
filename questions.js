const QUIZ_DATA = {
    daily: {
        GEOGRAPHY: {
            chapters: [
                {
                   
    name: "Solar System",
    questions: [
        {
            id: "geo_d_c1_q1",
            question: "The Nebular Hypothesis of solar system formation was first proposed by:",
            options: ["Fred Hoyle", "Immanuel Kant", "Copernicus", "Chamberlin and Moulton"],
            correct: 1,
            explanation: "Proposed in 1755, later modified by Laplace in 1796. Explains the solar system formed from a rotating cloud of gas and dust."
        },
        {
            id: "geo_d_c1_q2",
            question: "Which of the following is/are luminous celestial bodies? 1. Stars 2. Planets 3. Galaxies",
            options: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
            correct: 1,
            explanation: "Stars emit light, galaxies are clusters of luminous stars. Planets only reflect sunlight → non-luminous."
        },
        {
            id: "geo_d_c1_q3",
            question: "Consider the following statements about Venus: 1. It rotates clockwise. 2. Its rotation is slower than its revolution. 3. It is the brightest planet.",
            options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
            correct: 3,
            explanation: "Venus has retrograde (clockwise) rotation, one rotation takes 243 Earth days > revolution (225 days). Brightest due to thick clouds reflecting sunlight."
        },
        {
            id: "geo_d_c1_q4",
            question: "Which one of the following planets has the largest number of moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: 1,
            explanation: "Saturn has the highest number of moons (latest data), the highest in the solar system."
        },
        {
            id: "geo_d_c1_q5",
            question: "Which planet has the longest revolution period?",
            options: ["Jupiter", "Uranus", "Neptune", "Pluto"],
            correct: 2,
            explanation: "Neptune takes 165 Earth years to complete one revolution around the Sun. (Pluto is a dwarf planet, not a main planet)."
        },
        {
            id: "geo_d_c1_q6",
            question: "Arrange the following correctly according to distance from the Sun: Mercury, Uranus, Earth, Neptune",
            options: ["Mercury – Earth – Uranus – Neptune", "Mercury – Neptune – Earth – Uranus", "Earth – Mercury – Uranus – Neptune", "Mercury – Uranus – Neptune – Earth"],
            correct: 0,
            explanation: "Order of planets: Mercury (1st) → Earth (3rd) → Uranus (7th) → Neptune (8th)."
        },
        {
            id: "geo_d_c1_q7",
            question: "The Kuiper Belt is mainly associated with:",
            options: ["Origin of stars", "Dwarf planets like Pluto", "Asteroid distribution", "Formation of satellites"],
            correct: 1,
            explanation: "Kuiper Belt beyond Neptune contains icy objects & dwarf planets (Pluto, Haumea, Makemake, Eris)."
        },
        {
            id: "geo_d_c1_q8",
            question: "Which of the following statements is correct about the Moon?",
            options: ["It rotates and revolves at different speeds", "Its gravity is equal to Earth's", "One side always faces Earth due to synchronous rotation", "Light from the Moon takes 8 minutes to reach Earth"],
            correct: 2,
            explanation: "Moon's rotation time = revolution time (27.3 days), so only one side is visible from Earth."
        },
        {
            id: "geo_d_c1_q9",
            question: "Match the following pairs correctly: 1. Callisto – (A) Mars, 2. Deimos– (B) Jupiter, 3. Titan – (C) Saturn, 4. Triton – (D) Neptune",
            options: ["1-A, 2-B, 3-C, 4-D", "1-B, 2-A, 3-C, 4-D", "1-A, 2-C, 3-D, 4-B", "1-D, 2-C, 3-B, 4-A"],
            correct: 1,
            explanation: "Deimos = Mars; Callisto = Jupiter; Titan = Saturn's largest moon; Triton = Neptune's largest moon."
        },
        {
            id: "geo_d_c1_q10",
            question: "Aditya-L1 mission of ISRO is related to:",
            options: ["Studying the Moon's surface", "Observing Mars atmosphere", "Solar observatory at Lagrange Point", "Exploration of asteroid belt"],
            correct: 2,
            explanation: "India's first solar mission placed at L1 point to study solar atmosphere & radiation."
        },
        {
            id: "geo_d_c1_q11",
            question: "Consider the following statements about Jupiter: 1. Jupiter has the longest rotational period among the planets. 2. The Great Red Spot is a persistent anticyclonic storm on Jupiter. 3. Ganymede is the largest satellite in the Solar System. Which statements are correct?",
            options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
            correct: 2,
            explanation: "Statement 1 is false — Jupiter has the shortest rotation (~9.9 hours). Statements 2 and 3 are true: Great Red Spot is a long-lived storm, and Ganymede is the largest moon."
        },
        {
            id: "geo_d_c1_q12",
            question: "Consider the following statements about Saturn: 1. Saturn's mean density is less than water. 2. Saturn's rings were observed in the 17th century. 3. Cassini discovered a gap in Saturn's rings. Which statements are correct?",
            options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
            correct: 3,
            explanation: "All are true. Saturn's low density (<1 g/cm³), rings observed by Galileo/Huygens (1655), and Cassini discovered the gap (1675)."
        },
        {
            id: "geo_d_c1_q13",
            question: "Consider the following statements about Uranus: 1. Uranus appears greenish due to methane absorbing red light. 2. Uranus has the warmest surface temperature. 3. William Herschel discovered Uranus in 1781. Which statements are correct?",
            options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
            correct: 0,
            explanation: "Statements 1 and 3 are true — methane gives Uranus its blue-green hue and Herschel discovered it. Statement 2 is false — Uranus is quite cold."
        },
        {
            id: "geo_d_c1_q14",
            question: "Consider the following statements about Neptune: 1. Neptune's existence was predicted mathematically before observation. 2. Triton has a retrograde orbit. 3. Neptune is the innermost ice giant. Which statements are correct?",
            options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
            correct: 1,
            explanation: "Statement 1 true — predicted by Le Verrier/Adams. Triton orbits retrograde (statement 2 true). Statement 3 false — Neptune is the outermost major planet."
        },
        {
            id: "geo_d_c1_q15",
            question: "Assertion: In 2006 the IAU reclassified Pluto as a 'dwarf planet.' Reason: Pluto's orbit lies within the main asteroid belt.",
            options: ["Both A and R are true, and R explains A", "Both A and R are true, but R doesn't explain A", "A is true but R is false", "Both A and R are false"],
            correct: 2,
            explanation: "Assertion is true — IAU redefined 'planet' in 2006. Reason is false — Pluto is a Kuiper Belt Object, not in the asteroid belt."
        },
        {
            id: "geo_d_c1_q16",
            question: "Consider the following statements about Pluto: 1. Pluto's orbital period is approximately 248 Earth years. 2. Pluto is in the Kuiper Belt. 3. Charon is Pluto's largest satellite. Which statements are correct?",
            options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
            correct: 3,
            explanation: "All three are true. Pluto's orbit takes ~248 years, it's in the Kuiper Belt beyond Neptune, and Charon is its largest moon."
        },
        {
            id: "geo_d_c1_q17",
            question: "Consider statements: 1. Stars produce light via nuclear fusion. 2. Fireflies glow by reflecting sunlight. 3. Asteroids shine by reflecting sunlight. Which are correct?",
            options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
            correct: 0,
            explanation: "Statement 1 true — stellar light from fusion. Statement 2 false — fireflies produce light chemically (bioluminescence), not by reflection. Statement 3 true."
        },
        {
            id: "geo_d_c1_q18",
            question: "Consider statements about comets: 1. Comets have a 'dirty snowball' composition. 2. Halley's Comet has a ~76 year period. 3. Comet tails point toward the Sun. Which are correct?",
            options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
            correct: 1,
            explanation: "Statements 1 and 2 are true. Statement 3 false — comet tails are pushed away from the Sun by solar wind, not toward it."
        },
        {
            id: "geo_d_c1_q19",
            question: "Consider statements: 1. All asteroids are beyond Neptune. 2. A meteoroid becomes a meteor in Earth's atmosphere. 3. Main asteroid belt is between Mars and Jupiter. Which are correct?",
            options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
            correct: 2,
            explanation: "Statement 1 false — many asteroids are in the main belt between Mars and Jupiter. Statements 2 and 3 are correct."
        },
        {
            id: "geo_d_c1_q20",
            question: "Assertion: Neptune has the shortest orbital period among planets. Reason: Neptune is closest to the Sun.",
            options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true but R false", "Both false"],
            correct: 3,
            explanation: "Both false. Neptune is the farthest planet with a very long orbital period (~165 years), not the shortest."
        },
        {
            id: "geo_d_c1_q21",
            question: "Match planets with features: A. Mercury B. Venus C. Mars D. Jupiter with 1. Olympus Mons 2. Hottest planet 3. Smallest planet 4. Great Red Spot",
            options: ["A-3, B-2, C-1, D-4", "A-2, B-3, C-4, D-1", "A-1, B-4, C-2, D-3", "A-4, B-1, C-3, D-2"],
            correct: 0,
            explanation: "Mercury = smallest; Venus = hottest; Mars = Olympus Mons (largest volcano); Jupiter = Great Red Spot (giant storm)."
        },
        {
            id: "geo_d_c1_q22",
            question: "Which statement about comets is correct?",
            options: ["Tails directed toward the Sun", "Tails directed away from the Sun", "They have no tails", "Tails parallel to orbits"],
            correct: 1,
            explanation: "Comet tails are formed by solar wind and radiation pressure, always pointing away from the Sun."
        },
        {
            id: "geo_d_c1_q23",
            question: "Consider statements about the Sun: 1. ~99% of Solar System mass is in the Sun. 2. Sun is primarily hydrogen and helium. 3. Photons take thousands to millions of years to reach photosphere. Which are correct?",
            options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
            correct: 3,
            explanation: "All three correct. Sun holds most Solar System mass, is mainly H (~73%) and He (~25%), and photons diffuse outward over long timescales."
        },
        {
            id: "geo_d_c1_q24",
            question: "Consider statements about Jupiter: 1. Jupiter has no ring system. 2. Galileo discovered four Galilean satellites. 3. Ganymede is the largest moon. Which are correct?",
            options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
            correct: 2,
            explanation: "Statement 1 false — Jupiter has a faint ring system. Statements 2 and 3 true — Galileo observed four moons, Ganymede is largest."
        },
        {
            id: "geo_d_c1_q25",
            question: "Which statement is correct?",
            options: ["Saturn's density is similar to Earth", "Earth and Venus are almost similar in size", "Jupiter and Mars are similar in size", "Mars is the warmest planet"],
            correct: 1,
            explanation: "Earth and Venus are twin planets with similar radius, mass and composition. Venus is slightly smaller than Earth."
        }
    ]
},
                {
                    name: "Latitude and Longitude",
                    questions: [
                       
    {
        "id": "geo_d_c2_q1",
        "question": "What is the shape of the Earth commonly referred to in geography, characterized by being slightly flat at the poles and bulged at the equator?",
        "options": ["Perfect Sphere", "Oblate Spheroid", "Pear Shape", "Circular Disc"],
        "correct": 1,
        "explanation": "The Earth's shape is described as a Geoid or Oblate Spheroid, which is a little flat from the top and bottom (poles) and bulged at the center (equator) due to centrifugal force."
    },
    {
        "id": "geo_d_c2_q2",
        "question": "What is the specific angular distance (longitude) of the Prime Meridian, also known as the Greenwich Meridian?",
        "options": ["90∘ East", "180∘ Longitude", "0∘ Longitude", "23.5∘ North"],
        "correct": 2,
        "explanation": "The Prime Meridian's specific angular distance (longitude) is 0∘ Longitude. This line, which passes through Greenwich, England, is the internationally accepted reference point from which all other longitudes are measured, 180∘ to the East and 180∘ to the West."
    },
    {
        "id": "geo_d_c2_q3",
        "question": "What is the primary cause for the occurrence of Tides (the periodic rise and fall of ocean water levels)?",
        "options": ["Earth's Rotation", "Gravitational pull of the Moon", "Earth's Revolution", "Centrifugal Force"],
        "correct": 1,
        "explanation": "Tides are caused primarily by the gravitational pull of the Moon."
    },
    {
        "id": "geo_d_c2_q4",
        "question": "How many total degrees of longitude are used to divide the Earth?",
        "options": ["361", "180", "360", "181"],
        "correct": 2,
        "explanation": "The total number of longitudes is 360 (from to East and to West)."
    },
    {
        "id": "geo_d_c2_q5",
        "question": "Which date marks the occurrence of Aphelion, the point when the Earth is farthest from the Sun in its orbit?",
        "options": ["3rd January", "21st June", "4th July", "22nd December"],
        "correct": 2,
        "explanation": "Aphelion (अपसौर) occurs on 4th July, when the distance between the Earth and the Sun is maximum (152.1 million kilometers)."
    },
    {
        "id": "geo_d_c2_q6",
        "question": "The Earth rotates on its own axis from which direction?",
        "options": ["East to West", "North to South", "West to East", "South to North"],
        "correct": 2,
        "explanation": "The Earth rotates on its own axis from West to East, which is counter-clockwise (Anticlockwise)."
    },
    {
        "id": "geo_d_c2_q7",
        "question": "What is the approximate distance between two consecutive lines of latitude (for of latitude)?",
        "options": ["100 km", "111 km", "120 km", "150 km"],
        "correct": 1,
        "explanation": "The distance between each degree of latitude is approximately 111 km."
    },
    {
        "id": "geo_d_c2_q8",
        "question": "Which line of latitude demarcates the northern extent of the Torrid Zone?",
        "options": ["Equator", "Arctic Circle", "Tropic of Capricorn", "Tropic of Cancer"],
        "correct": 3,
        "explanation": "The Torrid Zone is located between the Tropic of Cancer (23∘5′′N) and the Tropic of Capricorn (23∘5′′S)."
    },
    {
        "id": "geo_d_c2_q9",
        "question": "The movement of Earth around the Sun in an elliptical orbit is called:",
        "options": ["Rotation", "Axial Inclination", "Revolution", "Eclipse"],
        "correct": 2,
        "explanation": "The Earth revolves around the Sun in an elliptical orbit, a process called Revolution."
    },
    {
        "id": "geo_d_c2_q10",
        "question": "In which specific alignment of the Earth, Moon, and Sun does a Lunar Eclipse happen?",
        "options": ["Moon comes between Sun and Earth", "Earth comes between Sun and Moon", "Sun comes between Moon and Earth", "Moon is perpendicular to Sun and Earth"],
        "correct": 1,
        "explanation": "A Lunar eclipse occurs when the Earth comes between the Sun and the Moon, casting the Earth's shadow on the Moon."
    },
    {
        "id": "geo_d_c2_q11",
        "question": "What is the precise duration of the Earth's Revolution around the Sun, as mentioned in the document?",
        "options": ["365 days 6 hours", "365 days 6 hours 9 minutes", "365 days 5 hours 48 minutes", "365 days 6 hours 4 minutes"],
        "correct": 1,
        "explanation": "One complete revolution takes exactly 365 days 6 hours 9 minutes."
    },
    {
        "id": "geo_d_c2_q12",
        "question": "The equatorial radius of the Earth (6378 km) is greater than the polar radius (6357 km). This difference is primarily due to:",
        "options": ["Stronger gravitational force at the Equator.", "Greater centrifugal force at the Equator", "Axial inclination of 23.5∘", "The presence of major land masses near the equator"],
        "correct": 1,
        "explanation": "The Earth bulges at the center (equator) because of the more Centrifugal force (केन्द्रीय अपसारी बल) at the Equator, which results in a greater equatorial radius."
    },
    {
        "id": "geo_d_c2_q13",
        "question": "The Indian Standard Time (IST) is ahead of Greenwich Mean Time (GMT) by:",
        "options": ["4 hours 30 minutes", "5 hours", "5 hours 30 minutes", "6 hours"],
        "correct": 2,
        "explanation": ""
    },
    {
        "id": "geo_d_c2_q14",
        "question": "A geographical grid has:\n1. Lines that run east to west around the globe to mark latitude.\n2. Lines that run north to south from north pole to south pole indicate longitude.\nWhich of the statements given above is/are correct?",
        "options": ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        "correct": 2,
        "explanation": "A geographical grid is formed by the intersection of latitudes (east–west) and longitudes (north–south) — used to determine any location on Earth."
    },
    {
        "id": "geo_d_c2_q15",
        "question": "What is the value of the Earth's axial inclination (अक्षीय झुकाव) with respect to the perpendicular to the orbital plane?",
        "options": ["66.5∘", "23.5∘", "90∘", "10∘"],
        "correct": 1,
        "explanation": "The axial inclination (अक्षीय झुकाव) is given as 23.5∘(or 23∘30∘)."
    },
    {
        "id": "geo_d_c2_q16",
        "question": "Which of the following describes the geographical extent of the Frigid Zone in the Southern Hemisphere?",
        "options": ["Between Tropic of Capricorn and Equator.", "Between Tropic of Capricorn and Antarctic Circle", "Beyond the Antarctic Circle (66.5∘ S)", "Between Antarctic Circle and Equator"],
        "correct": 2,
        "explanation": "The Frigid zone is located beyond the Arctic and Antarctic circles and is the coldest region on Earth."
    },
    {
        "id": "geo_d_c2_q17",
        "question": "Which key event of the Earth's movement around the Sun results in the change of seasons?",
        "options": ["Earth's Rotation.", "Earth's Revolution and the tilt of its axis.", "Perihelion and Aphelion distance variation.", "Earth's orbital speed fluctuation"],
        "correct": 1,
        "explanation": "Seasons are caused by the Earth's revolution around the sun and the tilt of its axis."
    },
    {
        "id": "geo_d_c2_q18",
        "question": "The distance between two longitudes is maximum at the Equator. What is this maximum distance?",
        "options": ["111.0 km", "111.32 km", "120.5 km", "105.42 km"],
        "correct": 1,
        "explanation": "The distance between each longitude is maximum at the equator at 111.32 km and decreases towards the poles, where it is 0."
    },
    {
        "id": "geo_d_c2_q19",
        "question": "Which of the following countries is NOT listed as a nation through which the Prime Meridian (0∘ Longitude) passes?",
        "options": ["Spain", "Algeria", "Mali", "Nigeria"],
        "correct": 3,
        "explanation": "The list of countries is: United Kingdom (UK), France, Spain, Algeria, Mali, Burkina Faso, Ghana, and Togo. Nigeria is not on this list."
    },
    {
        "id": "geo_d_c2_q20",
        "question": "During which position (relative to Earth's orbit) does the phenomenon of a 'Super Moon' occur?",
        "options": ["When the Moon's orbit is farthest from Earth during a New Moon.", "When the Moon's orbit is closest to Earth during a Full or New Moon.", "When there are two full moons within a single calendar month.", "When the Earth blocks the sun's light causing the moon to look reddish."],
        "correct": 1,
        "explanation": "A Super Moon is defined as when the Moon's orbit is closest to Earth during a full/new moon."
    },
    {
        "id": "geo_d_c2_q21",
        "question": "Which statement is correct concerning the comparison of the Earth's rotational speed (घूर्णी गति) at different geographical locations?",
        "options": ["Polar speed is greater than Equatorial speed.", "Equatorial speed is greater than Polar speed", "Speed is uniform across all latitudes.", "Speed increases as latitude increases."],
        "correct": 1,
        "explanation": "The rotational speed of the Earth is maximum at the Equator and minimum at the Poles (ध्रुव). This is explicitly stated as Equatorial speed (भूमध्यरेखीय गति) >>>>>Polar speed (ध्रुवीय गति)."
    },
    {
        "id": "geo_d_c2_q22",
        "question": "The Equinox (Equinox) is characterized by which of the following conditions?",
        "options": ["The North Pole is maximally tilted towards the Sun.", "The Southern Hemisphere experiences Summer Solstice.", "Neither of the poles is tilted towards the Sun.", "The Sun's rays are directly overhead the Tropic of Cancer."],
        "correct": 2,
        "explanation": "An Equinox is the time when the Sun’s apparent path crosses the equator, and crucially, neither of the pole is tilted towards the sun, making day and night approximately equal."
    },
    {
        "id": "geo_d_c2_q23",
        "question": "Why are all lines of Longitude considered 'Great Circles', whereas the Equator is the only line of Latitude that is a Great Circle?",
        "options": ["Because longitude runs from east to west, dividing the Earth into two equal hemispheres.", "Because longitude is the smallest possible circle that can be drawn around a sphere.", "Because the equator is the largest circle that passes through the center of the Earth, and all longitudes (meridians) also pass through the center.", "Because longitudes connect two poles, while other latitudes are smaller parallel circles."],
        "correct": 2,
        "explanation": "A Great Circle is the largest possible circle drawn around a sphere that divides it into two equal parts (Hemispheres). The Equator is the only latitude that passes through the center. All longitudes (meridians) run North to South and form a complete circle that passes through the center; hence they are all Great Circles."
    },
    {
        "id": "geo_d_c2_q24",
        "question": "A ship crosses the International Date Line (180∘Meridian) while traveling westward (e.g., from the Pacific Ocean towards Asia). Based on the concept of time calculation, what date adjustment must be made?",
        "options": ["Repeat the same date (add 1 day to the calendar)", "Skip one date (subtract 1 day from the calendar)", "Add 12 hours to the time.", "Subtract 12 hours from the time."],
        "correct": 0,
        "explanation": "When moving East from the Prime Meridian, time increases. When moving West, time decreases. Moving West across the IDL means you are moving from a day 'behind' to a day 'ahead'."
    },
    {
        "id": "geo_d_c2_q25",
        "question": "The maximum tides, known as 'Spring Tides', occur when the Sun, Earth, and Moon are in which specific arrangement?",
        "options": ["In perpendicular alignment to each other.", "In a straight-line alignment.", "When the Moon is at its farthest point (Apogee).", "During the Equinoxes only."],
        "correct": 1,
        "explanation": "Spring Tides occur when the Earth, Moon, and Sun are aligned along a straight line, combining their gravitational pull to produce the maximum tidal range."
    }

                    ]
                },
     {
                    name: "Earth's Interior & Plate Techtonics",
                    questions: []
     },
     {
                    name: " Ocean and Continents",
                    questions: []
     },
      {
                    name: "Rocks and Volcano",
                    questions: []
     },
     {
                    name: "Geomorphic Processes",
                    questions: []
     },
       {
                    name: "Landforms",
                    questions: []
     },
     {
                    name: "Atmosphere",
                    questions: []
     }, 
       
     {
                    name: "Condensation and Precipitation",
                    questions: []
     },
       {
                    name: "Wind",
                    questions: []
     },
     {
                    name: "Cyclone and Ocean Currents",
                    questions: []
     },
 {
                    name: "India and It's Location",
                    questions: []
     },
     {
                    name: "Himalayas",
                    questions: []
     },
        {
                    name: "Peninsular Plateau",
                    questions: []
     },
     {
                    name: "Plains and Islands",
                    questions: []
     },         
        {
                    name: "Himalayan River System",
                    questions: []
     },
     {
                    name: "Peninsular River System",
                    questions: []
     },
                 {
                    name: "Dams, LAkes and Waterfalls",
                    questions: []
     },
     {
                    name: "Monsson",
                    questions: []
     },
                 {
                    name: "Forests and Grasslands",
                    questions: []
     },
     {
                    name: "Soil",
                    questions: []
     },
                 {
                    name: "Agriculture",
                    questions: []
     },
     {
                    name: "Minerals",
                    questions: []
     },
                 {
                    name: "Transport",
                    questions: []
     },
     {
                    name: "World Map",
                    questions: []
     },
                 {
                    name: "Human Geography",
                    questions: []
     }
            
            
            ]
        },
        POLITY: {
            chapters: [
                {
                    name: "The Constitution",
                    questions: [
                        {
                            id: "pol_d_c1_q1",
                            question: "When was the Indian Constitution adopted?",
                            options: ["26 January 1950", "26 November 1949", "15 August 1947", "26 January 1949"],
                            correct: 1,
                            explanation: "The Constitution of India was adopted on 26 November 1949 and came into effect on 26 January 1950."
                        },
                        {
                            id: "pol_d_c1_q2",
                            question: "Who is known as the Father of the Indian Constitution?",
                            options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel"],
                            correct: 2,
                            explanation: "Dr. B.R. Ambedkar is known as the Father of the Indian Constitution as he chaired the Drafting Committee."
                        },
                        {
                            id: "pol_d_c1_q3",
                            question: "How many articles were there in the original Constitution of India?",
                            options: ["395", "448", "365", "400"],
                            correct: 0,
                            explanation: "The original Constitution had 395 articles divided into 22 parts and 8 schedules."
                        },
                        {
                            id: "pol_d_c1_q4",
                            question: "The Preamble of the Indian Constitution declares India as:",
                            options: ["Socialist, Secular, Democratic Republic", "Federal, Secular, Democratic Republic", "Socialist, Religious, Democratic Republic", "Unitary, Secular, Democratic Republic"],
                            correct: 0,
                            explanation: "The Preamble declares India as a Sovereign, Socialist, Secular, Democratic Republic."
                        },
                        {
                            id: "pol_d_c1_q5",
                            question: "Which Article of the Constitution deals with the amendment procedure?",
                            options: ["Article 356", "Article 360", "Article 368", "Article 370"],
                            correct: 2,
                            explanation: "Article 368 deals with the power of Parliament to amend the Constitution and the procedure thereof."
                        }
                    ]
                },
                {
                    name: "Fundamental Rights",
                    questions: [
                        {
                            id: "pol_d_c2_q1",
                            question: "How many Fundamental Rights are guaranteed by the Indian Constitution?",
                            options: ["5", "6", "7", "8"],
                            correct: 1,
                            explanation: "Originally there were 7 Fundamental Rights, but after the 44th Amendment deleted the Right to Property, there are now 6."
                        },
                        {
                            id: "pol_d_c2_q2",
                            question: "Which Article prohibits discrimination on grounds of religion, race, caste, sex or place of birth?",
                            options: ["Article 14", "Article 15", "Article 16", "Article 17"],
                            correct: 1,
                            explanation: "Article 15 prohibits discrimination on grounds of religion, race, caste, sex or place of birth."
                        },
                        {
                            id: "pol_d_c2_q3",
                            question: "Right to Education is guaranteed under which Article?",
                            options: ["Article 19", "Article 21", "Article 21A", "Article 22"],
                            correct: 2,
                            explanation: "Article 21A provides free and compulsory education to children between 6 to 14 years of age."
                        },
                        {
                            id: "pol_d_c2_q4",
                            question: "Which Article abolishes untouchability?",
                            options: ["Article 14", "Article 15", "Article 16", "Article 17"],
                            correct: 3,
                            explanation: "Article 17 abolishes untouchability and forbids its practice in any form."
                        },
                        {
                            id: "pol_d_c2_q5",
                            question: "Freedom of Speech and Expression is guaranteed under:",
                            options: ["Article 19(1)(a)", "Article 19(1)(b)", "Article 19(1)(c)", "Article 19(1)(d)"],
                            correct: 0,
                            explanation: "Article 21A provides free and compulsory education to children between 6 to 14 years of age."
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
                    name: "Solar System",
                    questions: [
                        {
                            id: "geo_w_c1_q1",
                            question: "Which planet has the most moons?",
                            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                            correct: 1,
                            explanation: "Saturn has the most confirmed moons with over 80 satellites, surpassing Jupiter."
                        },
                        {
                            id: "geo_w_c1_q2",
                            question: "What is the hottest planet in our Solar System?",
                            options: ["Mercury", "Venus", "Mars", "Jupiter"],
                            correct: 1,
                            explanation: "Venus is the hottest planet with surface temperatures around 465°C due to its thick atmosphere and greenhouse effect."
                        },
                        {
                            id: "geo_w_c1_q3",
                            question: "Which planet is known for its prominent ring system?",
                            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                            correct: 1,
                            explanation: "Saturn is famous for its spectacular ring system made of ice and rock particles."
                        },
                        {
                            id: "geo_w_c1_q4",
                            question: "What is the asteroid belt located between?",
                            options: ["Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Saturn and Uranus"],
                            correct: 1,
                            explanation: "The asteroid belt is located between the orbits of Mars and Jupiter."
                        },
                        {
                            id: "geo_w_c1_q5",
                            question: "Which planet rotates on its side?",
                            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                            correct: 2,
                            explanation: "Uranus rotates on its side with an axial tilt of about 98 degrees, making it unique among planets."
                        }
                    ]
                },
                {
                    name: "Latitude and Longitude",
                    questions: [
                        {
                            id: "geo_w_c2_q1",
                            question: "What is the maximum value of longitude?",
                            options: ["90°", "180°", "270°", "360°"],
                            correct: 1,
                            explanation: "Longitude ranges from 0° to 180° East and 0° to 180° West, making 180° the maximum value."
                        },
                        {
                            id: "geo_w_c2_q2",
                            question: "The Tropic of Capricorn is located at:",
                            options: ["23.5°N", "23.5°S", "66.5°N", "66.5°S"],
                            correct: 1,
                            explanation: "The Tropic of Capricorn is located at approximately 23.5° South latitude."
                        },
                        {
                            id: "geo_w_c2_q3",
                            question: "How many time zones are there in the world approximately?",
                            options: ["12", "24", "36", "48"],
                            correct: 1,
                            explanation: "There are approximately 24 time zones in the world, based on the 15° longitudinal divisions."
                        },
                        {
                            id: "geo_w_c2_q4",
                            question: "The International Date Line approximately follows which longitude?",
                            options: ["0°", "90°E", "180°", "90°W"],
                            correct: 2,
                            explanation: "The International Date Line roughly follows the 180° meridian with some deviations."
                        },
                        {
                            id: "geo_w_c2_q5",
                            question: "Which of these is NOT a line of latitude?",
                            options: ["Equator", "Prime Meridian", "Arctic Circle", "Tropic of Cancer"],
                            correct: 1,
                            explanation: "The Prime Meridian is a line of longitude (0°), not latitude."
                        }
                    ]
                }
            ]
        },
        POLITY: {
            chapters: [
                {
                    name: "The Constitution",
                    questions: [
                        {
                            id: "pol_w_c1_q1",
                            question: "The Constitution of India is described as:",
                            options: ["Rigid", "Flexible", "Partly rigid and partly flexible", "Completely rigid"],
                            correct: 2,
                            explanation: "The Indian Constitution is partly rigid and partly flexible, allowing amendments with different procedures."
                        },
                        {
                            id: "pol_w_c1_q2",
                            question: "Which part of the Constitution contains Fundamental Rights?",
                            options: ["Part I", "Part II", "Part III", "Part IV"],
                            correct: 2,
                            explanation: "Part III (Articles 12-35) of the Indian Constitution contains Fundamental Rights."
                        },
                        {
                            id: "pol_w_c1_q3",
                            question: "The term 'Secular' was added to the Preamble by which amendment?",
                            options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "61st Amendment"],
                            correct: 0,
                            explanation: "The 42nd Amendment Act, 1976 added the words 'Socialist' and 'Secular' to the Preamble."
                        },
                        {
                            id: "pol_w_c1_q4",
                            question: "Who has the power to amend the Constitution?",
                            options: ["President", "Prime Minister", "Parliament", "Supreme Court"],
                            correct: 2,
                            explanation: "Under Article 368, Parliament has the power to amend the Constitution."
                        },
                        {
                            id: "pol_w_c1_q5",
                            question: "How many schedules are currently in the Indian Constitution?",
                            options: ["8", "10", "12", "14"],
                            correct: 2,
                            explanation: "Currently, there are 12 schedules in the Indian Constitution (originally there were 8)."
                        }
                    ]
                },
                {
                    name: "Fundamental Rights",
                    questions: [
                        {
                            id: "pol_w_c2_q1",
                            question: "Which Fundamental Right is also known as the 'Heart and Soul' of the Constitution?",
                            options: ["Right to Equality", "Right to Freedom", "Right to Constitutional Remedies", "Right against Exploitation"],
                            correct: 2,
                            explanation: "Dr. B.R. Ambedkar called the Right to Constitutional Remedies (Article 32) as the heart and soul of the Constitution."
                        },
                        {
                            id: "pol_w_c2_q2",
                            question: "Article 21 guarantees:",
                            options: ["Right to Equality", "Right to Life and Personal Liberty", "Right to Freedom of Religion", "Right to Property"],
                            correct: 1,
                            explanation: "Article 21 states that 'No person shall be deprived of his life or personal liberty except according to procedure established by law.'"
                        },
                        {
                            id: "pol_w_c2_q3",
                            question: "Which Article prohibits traffic in human beings and forced labor?",
                            options: ["Article 22", "Article 23", "Article 24", "Article 25"],
                            correct: 1,
                            explanation: "Article 23 prohibits traffic in human beings, begar (forced labor), and other forms of forced labor."
                        },
                        {
                            id: "pol_w_c2_q4",
                            question: "The Right to Property was removed from Fundamental Rights by which amendment?",
                            options: ["42nd Amendment", "43rd Amendment", "44th Amendment", "45th Amendment"],
                            correct: 2,
                            explanation: "The 44th Amendment Act, 1978 removed the Right to Property from the list of Fundamental Rights."
                        },
                        {
                            id: "pol_w_c2_q5",
                            question: "Which Article provides for Prohibition of employment of children in factories?",
                            options: ["Article 22", "Article 23", "Article 24", "Article 25"],
                            correct: 2,
                            explanation: "Article 24 prohibits employment of children below 14 years in any factory, mine or hazardous work."
                        }
                    ]
                }
            ]
        }
    }
};
