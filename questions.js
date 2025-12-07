const QUIZ_DATA = {
    daily: {
        GEOGRAPHY: {
            chapters: [
                {
                    name: "Solar System",
                    questions: [
                        {
                            id: "geo_d_c1_q1",
                            question: "Which planet is known as the Red Planet?",
                            options: ["Venus", "Mars", "Jupiter", "Saturn"],
                            correct: 1,
                            explanation: "Mars is called the Red Planet due to iron oxide (rust) on its surface, giving it a reddish appearance."
                        },
                        {
                            id: "geo_d_c1_q2",
                            question: "What is the largest planet in our Solar System?",
                            options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
                            correct: 2,
                            explanation: "Jupiter is the largest planet with a diameter of about 143,000 kilometers."
                        },
                        {
                            id: "geo_d_c1_q3",
                            question: "How many planets are there in our Solar System?",
                            options: ["7", "8", "9", "10"],
                            correct: 1,
                            explanation: "There are 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was reclassified as a dwarf planet in 2006."
                        },
                        {
                            id: "geo_d_c1_q4",
                            question: "Which planet is closest to the Sun?",
                            options: ["Venus", "Mercury", "Earth", "Mars"],
                            correct: 1,
                            explanation: "Mercury is the closest planet to the Sun, orbiting at an average distance of 58 million kilometers."
                        },
                        {
                            id: "geo_d_c1_q5",
                            question: "What is the name of Earth's natural satellite?",
                            options: ["Titan", "Europa", "Moon", "Phobos"],
                            correct: 2,
                            explanation: "The Moon is Earth's only natural satellite, orbiting at an average distance of 384,400 km."
                        }
                    ]
                },
                {
                    name: "Latitude and Longitude",
                    questions: [
                        {
                            id: "geo_d_c2_q1",
                            question: "What is the Prime Meridian?",
                            options: ["0° latitude", "0° longitude", "90° latitude", "180° longitude"],
                            correct: 1,
                            explanation: "The Prime Meridian is the line of 0° longitude that passes through Greenwich, England."
                        },
                        {
                            id: "geo_d_c2_q2",
                            question: "What is the Equator?",
                            options: ["0° longitude", "0° latitude", "90° longitude", "180° latitude"],
                            correct: 1,
                            explanation: "The Equator is the imaginary line at 0° latitude that divides Earth into Northern and Southern hemispheres."
                        },
                        {
                            id: "geo_d_c2_q3",
                            question: "How many degrees of latitude are there from the Equator to the North Pole?",
                            options: ["45°", "90°", "180°", "360°"],
                            correct: 1,
                            explanation: "There are 90 degrees of latitude from the Equator (0°) to the North Pole (90°N)."
                        },
                        {
                            id: "geo_d_c2_q4",
                            question: "Which line of latitude is located at 23.5°N?",
                            options: ["Tropic of Cancer", "Tropic of Capricorn", "Arctic Circle", "Antarctic Circle"],
                            correct: 0,
                            explanation: "The Tropic of Cancer is located at approximately 23.5° North latitude."
                        },
                        {
                            id: "geo_d_c2_q5",
                            question: "Lines of longitude are also called:",
                            options: ["Parallels", "Meridians", "Tropics", "Circles"],
                            correct: 1,
                            explanation: "Lines of longitude are called meridians and run from the North Pole to the South Pole."
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
