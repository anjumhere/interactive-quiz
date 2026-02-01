const questions = [
    // SCIENCE (1-20)
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Brain"],
        correct: 2
    },
    {
        question: "How many bones are in the adult human body?",
        options: ["186", "206", "226", "246"],
        correct: 1
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2
    },
    {
        question: "What is the speed of light approximately?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
        correct: 0
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Oxygen", "Carbon", "Hydrogen"],
        correct: 3
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: 2
    },
    {
        question: "How many chromosomes do humans have?",
        options: ["23", "46", "48", "44"],
        correct: 1
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
        correct: 2
    },
    {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correct: 1
    },
    {
        question: "What type of animal is a dolphin?",
        options: ["Fish", "Reptile", "Mammal", "Amphibian"],
        correct: 2
    },
    {
        question: "What is the smallest unit of life?",
        options: ["Atom", "Molecule", "Cell", "Organ"],
        correct: 2
    },
    {
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correct: 3
    },
    {
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correct: 2
    },
    {
        question: "How many teeth does an adult human have?",
        options: ["28", "30", "32", "34"],
        correct: 2
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correct: 1
    },
    {
        question: "Which blood type is the universal donor?",
        options: ["A", "B", "AB", "O"],
        correct: 3
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2
    },

    // GEOGRAPHY (21-40)
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correct: 2
    },
    {
        question: "Which is the largest continent by area?",
        options: ["Africa", "North America", "Europe", "Asia"],
        correct: 3
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correct: 1
    },
    {
        question: "Which country has the largest population?",
        options: ["USA", "India", "China", "Indonesia"],
        correct: 1
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correct: 1
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correct: 2
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2
    },
    {
        question: "Which desert is the largest in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        correct: 3
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Which mountain is the tallest in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        correct: 2
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correct: 3
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "Vietnam"],
        correct: 1
    },
    {
        question: "What is the largest country by area?",
        options: ["Canada", "USA", "China", "Russia"],
        correct: 3
    },
    {
        question: "Which river flows through Paris?",
        options: ["Thames", "Seine", "Rhine", "Danube"],
        correct: 1
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correct: 2
    },
    {
        question: "Which country has the most time zones?",
        options: ["Russia", "USA", "France", "China"],
        correct: 2
    },
    {
        question: "What is the deepest ocean trench?",
        options: ["Java Trench", "Mariana Trench", "Puerto Rico Trench", "Tonga Trench"],
        correct: 1
    },
    {
        question: "Which African country was never colonized?",
        options: ["Nigeria", "Kenya", "Ethiopia", "Ghana"],
        correct: 2
    },
    {
        question: "What is the capital of Egypt?",
        options: ["Alexandria", "Cairo", "Luxor", "Giza"],
        correct: 1
    },
    {
        question: "Which strait separates Europe and Africa?",
        options: ["Bering Strait", "Strait of Gibraltar", "Strait of Hormuz", "Malacca Strait"],
        correct: 1
    },

    // HISTORY (41-60)
    {
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correct: 2
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        correct: 2
    },
    {
        question: "Which ancient wonder was located in Egypt?",
        options: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
        correct: 2
    },
    {
        question: "Who discovered America in 1492?",
        options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Amerigo Vespucci"],
        correct: 2
    },
    {
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Greek Empire", "Roman Empire", "Persian Empire", "Ottoman Empire"],
        correct: 1
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1910", "1911", "1912", "1913"],
        correct: 2
    },
    {
        question: "Who was the first man to walk on the Moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        correct: 1
    },
    {
        question: "Which wall fell in 1989?",
        options: ["Great Wall of China", "Berlin Wall", "Hadrian's Wall", "Wall of Jericho"],
        correct: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
        correct: 2
    },
    {
        question: "Which country started the Industrial Revolution?",
        options: ["France", "Germany", "USA", "Britain"],
        correct: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1
    },
    {
        question: "In which year did India gain independence?",
        options: ["1945", "1946", "1947", "1948"],
        correct: 2
    },
    {
        question: "Who was known as the 'Father of the Nation' in India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhas Chandra Bose"],
        correct: 1
    },
    {
        question: "Which war was fought between North and South Vietnam?",
        options: ["Korean War", "Vietnam War", "Gulf War", "Cold War"],
        correct: 1
    },
    {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
        correct: 2
    },
    {
        question: "Which civilization built Machu Picchu?",
        options: ["Aztec", "Maya", "Inca", "Olmec"],
        correct: 2
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic?",
        options: ["Bessie Coleman", "Amelia Earhart", "Harriet Quimby", "Jacqueline Cochran"],
        correct: 1
    },
    {
        question: "In which year did World War I begin?",
        options: ["1912", "1913", "1914", "1915"],
        correct: 2
    },
    {
        question: "Which Egyptian queen was known for her beauty?",
        options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Nefertari"],
        correct: 1
    },
    {
        question: "Who invented the printing press?",
        options: ["Johannes Gutenberg", "William Caxton", "Benjamin Franklin", "Bi Sheng"],
        correct: 0
    },

    // SPORTS (61-75)
    {
        question: "How many players are on a soccer team on the field?",
        options: ["9", "10", "11", "12"],
        correct: 2
    },
    {
        question: "In which sport would you perform a slam dunk?",
        options: ["Volleyball", "Basketball", "Tennis", "Badminton"],
        correct: 1
    },
    {
        question: "How many rings are on the Olympic flag?",
        options: ["4", "5", "6", "7"],
        correct: 1
    },
    {
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Argentina", "Brazil", "Italy"],
        correct: 2
    },
    {
        question: "What sport is played at Wimbledon?",
        options: ["Golf", "Cricket", "Tennis", "Rugby"],
        correct: 2
    },
    {
        question: "How long is a marathon in kilometers?",
        options: ["40.195 km", "42.195 km", "44.195 km", "46.195 km"],
        correct: 1
    },
    {
        question: "Which sport uses the term 'home run'?",
        options: ["Cricket", "Baseball", "Softball", "Rugby"],
        correct: 1
    },
    {
        question: "How many points is a touchdown worth in American football?",
        options: ["4", "5", "6", "7"],
        correct: 2
    },
    {
        question: "In which sport do you use a shuttlecock?",
        options: ["Tennis", "Squash", "Badminton", "Table Tennis"],
        correct: 2
    },
    {
        question: "Who has won the most Grand Slam titles in men's tennis?",
        options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
        correct: 2
    },
    {
        question: "What is the national sport of Japan?",
        options: ["Judo", "Karate", "Sumo", "Kendo"],
        correct: 2
    },
    {
        question: "How many holes are in a standard golf course?",
        options: ["9", "12", "18", "21"],
        correct: 2
    },
    {
        question: "Which sport is known as 'the beautiful game'?",
        options: ["Basketball", "Cricket", "Football/Soccer", "Rugby"],
        correct: 2
    },
    {
        question: "In cricket, how many runs is a century?",
        options: ["50", "100", "150", "200"],
        correct: 1
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "UK", "Brazil", "Japan"],
        correct: 2
    },

    // ENTERTAINMENT & ARTS (76-90)
    {
        question: "Who played Jack in the movie 'Titanic'?",
        options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"],
        correct: 1
    },
    {
        question: "Which band sang 'Bohemian Rhapsody'?",
        options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
        correct: 2
    },
    {
        question: "What is the name of Harry Potter's owl?",
        options: ["Hedwig", "Errol", "Pigwidgeon", "Scabbers"],
        correct: 0
    },
    {
        question: "Who directed the movie 'Jurassic Park'?",
        options: ["James Cameron", "Steven Spielberg", "George Lucas", "Christopher Nolan"],
        correct: 1
    },
    {
        question: "Which Disney movie features a character named Simba?",
        options: ["Aladdin", "The Jungle Book", "The Lion King", "Tarzan"],
        correct: 2
    },
    {
        question: "How many strings does a standard guitar have?",
        options: ["4", "5", "6", "7"],
        correct: 2
    },
    {
        question: "Who wrote the Harry Potter book series?",
        options: ["Stephenie Meyer", "J.K. Rowling", "Suzanne Collins", "Rick Riordan"],
        correct: 1
    },
    {
        question: "What is the highest-grossing film of all time?",
        options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars"],
        correct: 1
    },
    {
        question: "Which superhero is known as the 'Dark Knight'?",
        options: ["Superman", "Spider-Man", "Batman", "Iron Man"],
        correct: 2
    },
    {
        question: "Who sang 'Thriller'?",
        options: ["Prince", "Michael Jackson", "Elvis Presley", "Stevie Wonder"],
        correct: 1
    },
    {
        question: "What is the name of the fictional country in 'Black Panther'?",
        options: ["Zamunda", "Wakanda", "Genovia", "Latveria"],
        correct: 1
    },
    {
        question: "Which TV series features dragons and the Iron Throne?",
        options: ["The Witcher", "Lord of the Rings", "Game of Thrones", "Vikings"],
        correct: 2
    },
    {
        question: "Who painted 'The Starry Night'?",
        options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Salvador Dalí"],
        correct: 2
    },
    {
        question: "What is the name of Batman's butler?",
        options: ["Jarvis", "Alfred", "Watson", "Jeeves"],
        correct: 1
    },
    {
        question: "Which musical features the song 'Memory'?",
        options: ["Phantom of the Opera", "Les Misérables", "Cats", "Chicago"],
        correct: 2
    },

    // GENERAL KNOWLEDGE (91-100)
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        correct: 2
    },
    {
        question: "How many days are in a leap year?",
        options: ["364", "365", "366", "367"],
        correct: 2
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correct: 1
    },
    {
        question: "Which language has the most native speakers?",
        options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        correct: 2
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Lime", "Onion"],
        correct: 1
    },
    {
        question: "How many colors are in a rainbow?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "What does 'www' stand for in a website address?",
        options: ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"],
        correct: 0
    },
    {
        question: "Which organ pumps blood through the body?",
        options: ["Lungs", "Liver", "Heart", "Kidney"],
        correct: 2
    },
    {
        question: "What is the freezing point of water in Fahrenheit?",
        options: ["0°F", "32°F", "100°F", "212°F"],
        correct: 1
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correct: 1
    }
];

