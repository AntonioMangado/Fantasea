require('../../config/db_mongo')
const mongoose = require('mongoose');
const Book = require("../../models/books.models")

const books = [
    {
        "id": 1,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "High Fantasy",
        "description": "Embark on a captivating journey with Bilbo Baggins, a comfort-loving hobbit who finds himself swept into an epic adventure. Joined by a group of dwarves and the wise wizard Gandalf, Bilbo sets out to reclaim the Lonely Mountain and its treasure guarded by the fearsome dragon Smaug.",
        "year": 1937,
        "image": "https://m.media-amazon.com/images/I/A11+Gq4ebyL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 2,
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "genre": "Young Adult Fantasy",
        "description": "Step into the magical world of Harry Potter, a young wizard destined for greatness. In his first year at Hogwarts School of Witchcraft and Wizardry, Harry discovers his identity, makes lifelong friends, and faces the dark wizard Voldemort, setting the stage for a thrilling series of adventures.",
        "year": 1997,
        "image": "https://m.media-amazon.com/images/I/515W3XN03YL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 3,
        "title": "The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe",
        "author": "C.S. Lewis",
        "genre": "Fantasy",
        "description": "Enter the enchanting realm of Narnia, where four siblings stumble upon a magical wardrobe that serves as a portal to a wondrous land. Guided by the noble lion Aslan, they must confront the malevolent White Witch and fulfill their destinies as kings and queens of Narnia.",
        "year": 1950,
        "image": "https://i.harperapps.com/covers/9780061974151/x350.jpg"
    },
    {
        "id": 4,
        "title": "The Name of the Wind",
        "author": "Patrick Rothfuss",
        "genre": "Epic Fantasy",
        "description": "Follow the life of Kvothe, a gifted musician and powerful magician, as he recounts his journey from a gifted child to a legendary hero. Unravel the mysteries of the world of Temerant and the enigmatic Chandrian.",
        "year": 2007,
        "image": "https://m.media-amazon.com/images/I/611iKJa7a-L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 5,
        "title": "A Game of Thrones",
        "author": "George R.R. Martin",
        "genre": "Epic Fantasy",
        "description": "Immerse yourself in the complex and treacherous world of Westeros, where noble families vie for power and the Iron Throne. As political intrigue and supernatural forces unfold, winter is coming, bringing with it danger and uncertainty.",
        "year": 1996,
        "image": "https://m.media-amazon.com/images/I/71P+4DslKmL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 6,
        "title": "Mistborn: The Final Empire",
        "author": "Brandon Sanderson",
        "genre": "High Fantasy",
        "description": "Discover a world ruled by the immortal Lord Ruler, where a street thief named Vin discovers her extraordinary magical abilities. Join a group of rebels as they plan a daring heist to overthrow the oppressive regime and bring about change.",
        "year": 2006,
        "image": "https://m.media-amazon.com/images/I/811qBmIYTFL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 7,
        "title": "The Magicians",
        "author": "Lev Grossman",
        "genre": "Urban Fantasy",
        "description": "Explore the life of Quentin Coldwater, a high school student who discovers that the magical land he read about in childhood books is real. Enroll in Brakebills, a secret university for magicians, and face the challenges and dangers of a magical world.",
        "year": 2009,
        "image": "https://m.media-amazon.com/images/I/81s0ylWxqwL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 8,
        "title": "The Lies of Locke Lamora",
        "author": "Scott Lynch",
        "genre": "Fantasy",
        "description": "Join the charismatic and cunning thief Locke Lamora as he leads a group of talented con artists known as the Gentlemen Bastards. Set in the sprawling city of Camorr, this tale of heists, intrigue, and friendship is both thrilling and humorous.",
        "year": 2006,
        "image": "https://m.media-amazon.com/images/I/91pbvnDj5FL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 9,
        "title": "Good Omens",
        "author": "Neil Gaiman and Terry Pratchett",
        "genre": "Humorous Fantasy",
        "description": "Prepare for the apocalypse as an angel and a demon, who have grown rather fond of Earth, team up to prevent the end of the world. With a humorous touch, this collaboration between Neil Gaiman and Terry Pratchett is a delightful exploration of morality and friendship.",
        "year": 1990,
        "image": "https://m.media-amazon.com/images/I/81hKmwaOfvL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 10,
        "title": "American Gods",
        "author": "Neil Gaiman",
        "genre": "Urban Fantasy",
        "description": "Embark on a road trip across America with Shadow Moon, an ex-convict who becomes entangled in a conflict between ancient gods and new deities. Neil Gaiman weaves a tale of mythology, belief, and the changing face of American culture.",
        "year": 2001,
        "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/716LpMKQ3iL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 11,
        "title": "The Way of Kings",
        "author": "Brandon Sanderson",
        "genre": "Epic Fantasy",
        "description": "Enter the richly detailed world of Roshar, where powerful magical storms shape the landscape and magic-wielding Knights Radiant battle ancient evils. As political intrigue unfolds, follow the lives of characters bound by destiny and honor.",
        "year": 2010,
        "image": "https://m.media-amazon.com/images/I/91UDzcPH-nL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "id": 12,
        "title": "The Dark Tower: The Gunslinger",
        "author": "Stephen King",
        "genre": "Dark Fantasy",
        "description": "Embark on a quest with Roland Deschain, the last Gunslinger, as he journeys across a desolate world in pursuit of the enigmatic Man in Black. Stephen King's epic blend of fantasy, horror, and western themes unfolds in this gripping tale.",
        "year": 1982,
        "image": "https://m.media-amazon.com/images/I/715w3hVk-dL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 13,
        "title": "Eragon",
        "author": "Christopher Paolini",
        "genre": "High Fantasy",
        "description": "Follow the farm boy Eragon as he discovers a mysterious dragon egg that catapults him into a world of magic, destiny, and rebellion against the tyrannical King Galbatorix. With his dragon Saphira, Eragon becomes a key player in the battle for freedom.",
        "year": 2002,
        "image": "https://m.media-amazon.com/images/I/51n1zt8jgHL.jpg"
    },
    {
        "id": 14,
        "title": "The Blade Itself",
        "author": "Joe Abercrombie",
        "genre": "Grimdark Fantasy",
        "description": "Enter the gritty and brutal world of the First Law Trilogy, where characters with dark pasts and dubious morals navigate political intrigue and impending war. Joe Abercrombie's tale explores the complexities of power and morality.",
        "year": 2006,
        "image": "https://m.media-amazon.com/images/I/918hDnFAmQL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 16,
        "title": "City of Stairs",
        "author": "Robert Jackson Bennett",
        "genre": "Urban Fantasy",
        "description": "Explore the city of Bulikov, where gods once walked and miracles were commonplace until a mysterious event stripped the city of its divine powers. In a world of political intrigue and forbidden histories, a determined investigator uncovers the secrets of the past.",
        "year": 2014,
        "image": "https://m.media-amazon.com/images/I/91aLZfrzzRL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 17,
        "title": "The Priory of the Orange Tree",
        "author": "Samantha Shannon",
        "genre": "High Fantasy",
        "description": "Embark on an epic journey in a world threatened by an ancient dragon. As nations prepare for war, a dragon-rider, a dragonless queen, and a dragon-rider from the East must unite to save their world from impending doom.",
        "year": 2019,
        "image": "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781635570298.jpg"
    },
    {
        "id": 18,
        "title": "The Shadow of What Was Lost",
        "author": "James Islington",
        "genre": "Epic Fantasy",
        "description": "Delve into a world where the Gifted have magical abilities, but memories of the past have been erased. As ancient prophecies unfold, three young friends must navigate a complex web of political intrigue and dark forces to uncover the truth of their world.",
        "year": 2014,
        "image": "https://m.media-amazon.com/images/I/51ouHDJYMgL.jpg"
    },
    {
        "id": 19,
        "title": "The Poppy War",
        "author": "R.F. Kuang",
        "genre": "Dark Fantasy",
        "description": "Follow the journey of Rin, a war orphan with a burning desire for power and revenge, as she gains entrance to the prestigious military academy of Sinegard. In a world inspired by Chinese history and mythology, Rin discovers the cost of wielding destructive magic.",
        "year": 2018,
        "image": "https://cdn.kobo.com/book-images/4fb9f04b-d4cb-476c-b3ae-ef2b6d8ecf77/1200/1200/False/the-poppy-war-the-poppy-war-book-1-1.jpg"
    },
    {
        "id": 20,
        "title": "The Black Prism",
        "author": "Brent Weeks",
        "genre": "Epic Fantasy",
        "description": "Enter a world where magic is harnessed through the manipulation of light. As the balance of power shifts and political intrigue unfolds, a powerful magician known as the Prism must navigate a world on the brink of war and unravel the mysteries of his own existence.",
        "year": 2010,
        "image": "https://m.media-amazon.com/images/I/71K3HDj-BBL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 21,
        "title": "The Stormlight Archive: Words of Radiance",
        "author": "Brandon Sanderson",
        "genre": "Epic Fantasy",
        "description": "Continue the epic journey in the world of Roshar as political intrigue, ancient mysteries, and magical storms shape the destinies of powerful characters. In this second installment of The Stormlight Archive, explore the bonds that connect disparate lives and the challenges that lie ahead.",
        "year": 2014,
        "image": "https://m.media-amazon.com/images/I/91tECQfrZTL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 22,
        "title": "The Wheel of Time: The Eye of the World",
        "author": "Robert Jordan",
        "genre": "High Fantasy",
        "description": "Embark on a sprawling adventure across a world on the brink of both salvation and destruction. As an ancient evil threatens to engulf the land, a young man named Rand al'Thor discovers his destiny as the Dragon Reborn, a figure prophesied to either save or doom the world.",
        "year": 1990,
        "image": "https://m.media-amazon.com/images/I/91cJ0-MXtGL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 24,
        "title": "The Broken Empire: Prince of Thorns",
        "author": "Mark Lawrence",
        "genre": "Dark Fantasy",
        "description": "Step into the dark and brutal world of Jorg Ancrath, a ruthless prince seeking revenge in a post-apocalyptic landscape. As he leads a band of outlaws, Jorg confronts the ghosts of his past and grapples with the harsh realities of power and ambition.",
        "year": 2011,
        "image": "https://m.media-amazon.com/images/I/81MmE+V-PgL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 25,
        "title": "The Inheritance Trilogy: The Hundred Thousand Kingdoms",
        "author": "N.K. Jemisin",
        "genre": "Fantasy",
        "description": "Enter a world of gods, mortals, and political intrigue as Yeine Darr is thrust into a deadly struggle for power. In the floating city of Sky, ancient secrets and divine conflicts unravel, challenging the boundaries between gods and humanity.",
        "year": 2010,
        "image": "https://m.media-amazon.com/images/I/71SBbVUfIqL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 26,
        "title": "The Night Circus",
        "author": "Erin Morgenstern",
        "genre": "Fantasy",
        "description": "Step into the mesmerizing world of a magical competition between two illusionists, Celia and Marco, who create wonders within the enchanting confines of the Night Circus. As their rivalry intensifies, the boundaries between reality and illusion blur in this atmospheric tale.",
        "year": 2011,
        "image": "https://m.media-amazon.com/images/I/71jqpBOycFL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 27,
        "title": "Jonathan Strange & Mr Norrell",
        "author": "Susanna Clarke",
        "genre": "Historical Fantasy",
        "description": "Set in an alternate 19th-century England where magic once existed but has faded into myth, two magicians, Jonathan Strange and Mr. Norrell, emerge to revive the practice. As they delve into the arcane arts, they become entangled in a web of rivalry and perilous consequences.",
        "year": 2004,
        "image": "https://m.media-amazon.com/images/I/71Lylsj5SiL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 28,
        "title": "A Day of Fallen Night",
        "author": "Samantha Shannon",
        "genre": "High Fantasy",
        "description": "“A Day of Fallen Night,” a striking standalone prequel to “Priory,” interweaves the stories of three women — Tunuva, Glorian, and Dumai — from three wildly different fantastical cultures. Yet they are united through their devotion to their loved ones and quests to hunt down the demonic wyrms which threaten their world.",
        "year": 2023,
        "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/A1DKHXieyQL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 29,
        "title": "The Book of the New Sun: The Shadow of the Torturer",
        "author": "Gene Wolfe",
        "genre": "Science Fantasy",
        "description": "Immerse yourself in the far-future world of Severian, an apprentice in the guild of torturers with a unique perspective on justice. As he embarks on a journey filled with strange landscapes and cryptic characters, the lines between science fiction and fantasy blur.",
        "year": 1980,
        "image": "https://m.media-amazon.com/images/I/51hMAv0is1L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 30,
        "title": "The Fifth Season",
        "author": "N.K. Jemisin",
        "genre": "Science Fantasy",
        "description": "Explore a world on the brink of cataclysmic change, where seismic activity and magical power are intertwined. In this tale of survival and oppression, three women with extraordinary abilities navigate a society on the verge of collapse.",
        "year": 2015,
        "image": "https://m.media-amazon.com/images/I/915orvpMXZL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 31,
        "title": "Senlin Ascends",
        "author": "Josiah Bancroft",
        "genre": "Steampunk Fantasy",
        "description": "Join Thomas Senlin, a mild-mannered headmaster, as he embarks on a journey through the fantastical and mysterious Tower of Babel to rescue his missing wife. In this steampunk-inspired world, each level of the tower holds unique challenges and secrets.",
        "year": 2013,
        "image": "https://m.media-amazon.com/images/I/811B-JCtgUL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 32,
        "title": "The Queen of the Tearling",
        "author": "Erika Johansen",
        "genre": "Fantasy",
        "description": "Witness the ascension of Kelsea Glynn to the throne of the Tearling, a kingdom in a world plagued by political intrigue and dark magic. As Kelsea grapples with her destiny, she must confront enemies both within and beyond her borders.",
        "year": 2014,
        "image": "https://m.media-amazon.com/images/I/81JQ-u+67GL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 33,
        "title": "The Goblin Emperor",
        "author": "Katherine Addison",
        "genre": "Fantasy",
        "description": "Follow the unexpected rise of Maia Drazhar, a young goblin, to the throne of the Elflands. As he navigates the treacherous world of court politics and cultural differences, Maia must find his place as emperor in a realm filled with intrigue and danger.",
        "year": 2014,
        "image": "https://m.media-amazon.com/images/I/81aIOdz+eAL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 34,
        "title": "The Girl with All the Gifts",
        "author": "M.R. Carey",
        "genre": "Post-Apocalyptic Fantasy",
        "description": "In a world ravaged by a fungal infection turning humans into zombie-like creatures, a gifted girl named Melanie holds the key to humanity's survival. As she and a group of survivors journey through a perilous landscape, they discover the truth about their existence.",
        "year": 2014,
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403033579i/17235026.jpg"
    },
    {
        "id": 35,
        "title": "Red Sister",
        "author": "Mark Lawrence",
        "genre": "Dark Fantasy",
        "description": "Enter the world of Abeth, where young girls with extraordinary abilities are trained in the arts of combat and magic at the Convent of Sweet Mercy. As Nona Grey discovers her unique powers, she becomes entangled in a deadly game of political intrigue and ancient mysteries.",
        "year": 2017,
        "image": "https://m.media-amazon.com/images/I/9177lf8SYEL._AC_UF1000,1000_QL80_.jpgl"
    },
    {
        "id": 36,
        "title": "The Bear and the Nightingale",
        "author": "Katherine Arden",
        "genre": "Historical Fantasy",
        "description": "Transport yourself to medieval Russia, where young Vasilisa Petrovna defies societal norms and embraces the old beliefs of spirits and magic. As dark forces threaten her village, Vasya must harness her connection to the supernatural to protect her loved ones.",
        "year": 2017,
        "image": "https://m.media-amazon.com/images/I/91e0ECVqLFL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 37,
        "title": "The City of Brass",
        "author": "S.A. Chakraborty",
        "genre": "Historical Fantasy",
        "description": "Journey to 18th-century Cairo, where Nahri, a skilled con artist with healing abilities, accidentally summons a powerful djinn. As political tensions rise and magical forces awaken, Nahri must navigate a world of treacherous politics and ancient beings.",
        "year": 2017,
        "image": "https://m.media-amazon.com/images/I/71Jnymsej5L._AC_UF1000,1000_QL80_.jpgºº"
    },
    {
        "id": 38,
        "title": "The Library at Mount Char",
        "author": "Scott Hawkins",
        "genre": "Dark Fantasy",
        "description": "Enter a mysterious library overseen by a seemingly omniscient figure known as Father. As Carolyn and her fellow librarians unlock the secrets of the library's vast knowledge, they discover the dark and twisted truths that bind them to a higher purpose.",
        "year": 2015,
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1453225113i/26892110.jpg"
    },
    {
        "id": 39,
        "title": "Uprooted",
        "author": "Naomi Novik",
        "genre": "Fantasy",
        "description": "In a village on the edge of an ominous and magical forest known as the Wood, a young woman named Agnieszka discovers her unexpected and powerful connection to a wizard known as the Dragon. Together, they must face the malevolent forces threatening their land.",
        "year": 2015,
        "image": "https://m.media-amazon.com/images/I/71Nq79P-l-L._AC_UF1000,1000_QL80_.jpgl"
    },
    {
        "id": 40,
        "title": "The Bone Season",
        "author": "Samantha Shannon",
        "genre": "Dystopian Fantasy",
        "description": "In a dystopian future where clairvoyants are hunted for their abilities, Paige Mahoney, a powerful dreamwalker, becomes a key player in the criminal underworld. As she navigates a city ruled by an otherworldly race, Paige discovers a conspiracy that could change everything.",
        "year": 2013,
        "image": "https://m.media-amazon.com/images/I/81eAekpmyiL._AC_UF1000,1000_QL80_.jpg"
    }
]

Book.deleteMany()
    .then(function(){
        console.log("All book data deleted");}) // Success
    .catch(function(error){
        console.log(error); // Failure
    });

Book.insertMany(books)
    .then(function(){ 
        console.log("Data inserted")})  // Success 
    .catch(function(error){ 
        console.log(error)      // Failure 
    });