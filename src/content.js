const content = [
    {
        "title": "Dune",
        "content": "A science fiction novel set in the distant future where interstellar travel is common and noble houses vie for control of the desert planet Arrakis and its valuable resource, melange."
    },
    {
        "title": "Foundation",
        "content": "A series of science fiction novels that follow the collapse and rebirth of a galactic empire, and the efforts of a group of scientists to preserve and rebuild human civilization."
    },
    {
        "title": "1984",
        "content": "A dystopian novel set in a totalitarian society where the government constantly monitors and manipulates its citizens."
    },
    {
        "title": "Brave New World",
        "content": "A dystopian novel set in a future world where genetic engineering and psychological conditioning have created a society without war, pain, or personal freedom."
    },
    {
        "title": "The Hitchhiker's Guide to the Galaxy",
        "content": "A comedic science fiction series that follows the misadventures of an ordinary human and his alien friend as they travel through space."
    },
    {
        "title": "Neuromancer",
        "content": "A cyberpunk novel set in a future where artificial intelligence, virtual reality, and cyberspace are integral parts of everyday life."
    },
    {
        "title": "Snow Crash",
        "content": "A cyberpunk novel that explores themes of information technology, virtual reality, and the impact of technology on society."
    },
    {
        "title": "Ender's Game",
        "content": "A military science fiction novel that follows a young boy as he trains in a battle school to prepare for an alien invasion."
    },
    {
        "title": "The Martian",
        "content": "A science fiction novel that follows an astronaut stranded on Mars and his efforts to survive and return to Earth."
    },
    {
        "title": "Ready Player One",
        "content": "A dystopian novel set in a future where most of humanity spends their time in a virtual reality world called the OASIS."
    },
    {
        "title": "The War of the Worlds",
        "content": "A science fiction novel that depicts an alien invasion of Earth and the ensuing conflict between humanity and the extraterrestrial beings."
    },
    {
        "title": "Fahrenheit 451",
        "content": "A dystopian novel set in a future society where books are banned and burned, and the protagonist works as a fireman responsible for burning them."
    },
    {
        "title": "The Time Machine",
        "content": "A science fiction novel that follows a time traveler as he journeys into the future and witnesses the evolution of human society."
    },
    {
        "title": "I, Robot",
        "content": "A collection of science fiction short stories that explore the relationship between humans and artificial intelligence."
    },
    {
        "title": "The Hunger Games",
        "content": "A dystopian novel set in a future where teenagers are forced to participate in a televised fight to the death as a form of entertainment and control."
    },
    {
        "title": "The Lord of the Rings",
        "content": "A high fantasy novel that follows a group of characters as they embark on a quest to destroy a powerful ring and defeat an evil lord."
    },
    {
        "title": "The Chronicles of Narnia",
        "content": "A series of fantasy novels that follow a group of children as they discover a magical world through a wardrobe."
    },
    {
        "title": "The Handmaid's Tale",
        "content": "A dystopian novel set in a future where a totalitarian regime has taken over the United States and reduced women to reproductive servitude."
    },
    {
        "title": "A Wrinkle in Time",
        "content": "A science fantasy novel that follows a young girl as she travels through space and time to rescue her father from an evil force."
    },
    {
        "title": "The Giver",
        "content": "A dystopian novel set in a future where all memories of the past have been erased and society is controlled by strict rules and regulations."
    },
    {
        "title": "The Maze Runner",
        "content": "A dystopian novel that follows a group of teenagers as they navigate a deadly maze and uncover the secrets of their post-apocalyptic world."
    },
    {
        "title": "The Warlord of Mars",
        "content": "A science fiction novel that follows John Carter as he continues his adventures on the planet Mars."
    },
    {
        "title": "The Invisible Man",
        "content": "A science fiction novel that follows a scientist who has discovered the secret of invisibility and the consequences it has on his sanity."
    },
    {
        "title": "The Time Traveler's Wife",
        "content": "A love story that follows a man with a genetic disorder that causes him to time travel and his relationship with his wife."
    },
    {
        "title": "Jurassic Park",
        "content": "A science fiction novel that explores the ethical implications of genetic engineering and the resurrection of dinosaurs."
    },
    {
        "title": "The War in the Air",
        "content": "A science fiction novel that depicts a future war fought with advanced aircraft and explores the impact of technology on warfare."
    },
    {
        "title": "The Andromeda Strain",
        "content": "A science fiction novel that follows a team of scientists as they investigate a deadly extraterrestrial microorganism."
    },
    {
        "title": "The Day of the Triffids",
        "content": "A post-apocalyptic novel that follows a group of survivors as they navigate a world overrun by intelligent, carnivorous plants."
    },
    {
        "title": "The Stand",
        "content": "A post-apocalyptic novel that follows a group of survivors as they confront a global pandemic and the ensuing struggle between good and evil."
    },
    {
        "title": "The Forever War",
        "content": "A military science fiction novel that follows a soldier as he fights in an interstellar war and experiences time dilation."
    },
    {
        "title": "Starship Troopers",
        "content": "A military science fiction novel that follows a young soldier as he enlists in the Mobile Infantry and fights against a race of giant alien insects."
    },
    {
        "title": "The Road",
        "content": "A post-apocalyptic novel that follows a father and son as they journey across a desolate landscape in search of safety and a better life."
    },
    {
        "title": "A Canticle for Leibowitz",
        "content": "A post-apocalyptic novel that follows a group of monks in a future where civilization has been destroyed by nuclear war."
    },
    {
        "title": "The Left Hand of Darkness",
        "content": "A science fiction novel that explores themes of gender and sexuality in a society where individuals are neither male nor female."
    },
    {
        "title": "The Three-Body Problem",
        "content": "A science fiction novel that follows a group of scientists as they discover that Earth is under threat from an alien civilization."
    },
    {
        "title": "The Windup Girl",
        "content": "A biopunk novel set in a future where genetically engineered organisms are used as a source of energy and power."
    },
    {
        "title": "Red Mars",
        "content": "A science fiction novel that follows the colonization and terraforming of the planet Mars."
    },
    {
        "title": "The Diamond Age",
        "content": "A science fiction novel that explores themes of nanotechnology, artificial intelligence, and the impact of technology on society."
    },
    {
        "title": "A Game of Thrones",
        "content": "A fantasy novel that follows the political and military struggles of several noble houses in the fictional continent of Westeros."
    },
    {
        "title": "The Man in the High Castle",
        "content": "An alternate history novel set in a world where the Axis powers won World War II and divided the United States into occupied territories."
    },
    {
        "title": "The Caves of Steel",
        "content": "A science fiction detective novel that follows a human detective and his robot partner as they investigate a murder on a crowded Earth."
    },
    {
        "title": "The Fifth Season",
        "content": "A fantasy novel that follows several characters in a world plagued by frequent catastrophic climate events."
    },
    {
        "title": "The City and the Stars",
        "content": "A science fiction novel that follows a young man as he discovers the truth about his city and its place in the universe."
    },
    {
        "title": "Children of Time",
        "content": "A science fiction novel that explores the evolution of a society of spiders and the last remnants of humanity."
    },
    {
        "title": "Old Man's War",
        "content": "A military science fiction novel that follows a 75-year-old man who enlists in the army to fight against alien species."
    },
    {
        "title": "The Expanse",
        "content": "A series of science fiction novels that follow the crew of a spaceship as they navigate political and military conflicts in a colonized solar system."
    },
    {
        "title": "Hyperion",
        "content": "A science fiction novel that follows a group of pilgrims as they travel to a mysterious and dangerous planet called Hyperion."
    },
    {
        "title": "The Forever War",
        "content": "A military science fiction novel that follows a soldier as he fights in an interstellar war and experiences time dilation."
    },
    {
        "title": "Starship Troopers",
        "content": "A military science fiction novel that follows a young soldier as he enlists in the Mobile Infantry and fights against a race of giant alien insects."
    }
]

export default content;