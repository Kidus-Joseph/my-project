export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
}

export const Items = [
    {
        id: 1,
        category: 'cleats',
        productName: 'Nike Mercurial Superfly 8 Elite FG Firm-Ground Soccer Cleats',
        productPrice:22099,
        description:'The Nike Mercurial Superfly 8 Elite FG features a new look with specialized components to let you play your fastest from start to finish. A stretchy collar provides extra support, and the innovative plate provides instant responsiveness for quicker cuts at high speeds.',
        isOff:false,
        productImage: require('../database/images/Cleats/Nike Mercurial Superfly 8 Elite FG Firm-Ground Soccer Cleats.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Cleats/Nike Mercurial Superfly 8 Elite FG Firm-Ground Soccer Cleats.png'),
            require('../database/images/Cleats/Nike Mercurial Superfly 8 Elite FG Firm-Ground Soccer Cleats 2.png'),
            require('../database/images/Cleats/Nike Mercurial Superfly 8 Elite KM FG Firm-Ground Soccer Cleats 3.png'),
        ]
    },
    {
        id: 2,
        category: 'cleats',
        productName: 'Nike Mercurial Superfly 8 Elite KM FG Firm-Ground Soccer Cleats',
        productPrice:29500,
        description:'Embody Kylian Mbappé\'s relentless pace with fiery design details. A Flyknit upper wraps your foot in lightweight fabric that moves with you when it\'s time to turn up the heat.',
        isOff:true,
        offPercentage:10,
        productImage: require('../database/images/Cleats/Nike Mercurial Superfly 8 Elite KM FG Firm-Ground Soccer Cleats.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Cleats/Nike Mercurial Superfly 8 Elite KM FG Firm-Ground Soccer Cleats.png'),
            require('../database/images/Cleats/Nike Mercurial Superfly 8 Elite KM FG Firm-Ground Soccer Cleats 2.png'),
            require('../database/images/Cleats/Nike Mercurial Superfly 8 Elite KM FG Firm-Ground Soccer Cleats 3.png'),
        ]
    },
    {
        id: 3,
        category: 'cleats',
        productName: 'Nike Tiempo Legend 9 Elite FG Firm-Ground Soccer Cleats',
        productPrice:23000,
        description:'One of our lightest Tiempos to date, the Nike Tiempo Legend 9 Elite FG lets you go on the offensive with a low-profile design that\'s reinvented for attackers. The upper has raised textures backed by soft foam pods for precise dribbling, passing and shooting, while studs on the bottom provide traction for quick cuts and sudden stops.',
        isOff:false,
        productImage: require('../database/images/Cleats/Nike Tiempo Legend 9 Elite FG Firm-Ground Soccer Cleats.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Cleats/Nike Tiempo Legend 9 Elite FG Firm-Ground Soccer Cleats.png'),
            require('../database/images/Cleats/Nike Tiempo Legend 9 Elite FG Firm-Ground Soccer Cleats 2.png'),
            require('../database/images/Cleats/Nike Tiempo Legend 9 Elite FG Firm-Ground Soccer Cleats 3.png'),
        ]
    },
    {
        id: 4,
        category: 'cleats',
        productName: 'Nike Tiempo Legend 9 Elite FG Firm-Ground Football Boots',
        productPrice:23000,
        description:'One of our lightest Tiempos to date, the Nike Tiempo Legend 9 Elite FG lets you go on the offensive with a low-profile design that\'s reinvented for attackers. The upper has raised textures backed by soft foam pods for precise dribbling, passing and shooting, while studs on the bottom provide traction for quick cuts and sudden stops.',
        isOff:false,
        productImage: require('../database/images/Cleats/Nike Tiempo Legend 9 Elite FG Firm-Ground Football Boots.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Cleats/Nike Tiempo Legend 9 Elite FG Firm-Ground Football Boots.png'),
            require('../database/images/Cleats/Nike Tiempo Legend 9 Elite FG Firm-Ground Football Boots 2.png'),
            require('../database/images/Cleats/Nike Tiempo Legend 9 Elite FG Firm-Ground Football Boots 3.png'),
        ]
    },
    {
        id: 5,
        category: 'cleats',
        productName: 'Nike Phantom GT2 Dynamic Fit Elite FG Firm-Ground Soccer Cleats',
        productPrice:27500,
        description:'Building off the Phantom GT, the Nike Phantom GT2 Elite FG features an updated design and raised patterning to help create optimal spin to control the flight of the ball. Off-center lacing provides a clean strike zone for skillful dribbling, passing and shooting.',
        isOff:true,
        offPercentage:30,
        productImage: require('../database/images/Cleats/Nike Phantom GT2 Dynamic Fit Elite FG Firm-Ground Soccer Cleats.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Cleats/Nike Phantom GT2 Dynamic Fit Elite FG Firm-Ground Soccer Cleats.png'),
            require('../database/images/Cleats/Nike Phantom GT2 Dynamic Fit Elite FG Firm-Ground Soccer Cleats 2.png'),
            require('../database/images/Cleats/Nike Phantom GT2 Dynamic Fit Elite FG Firm-Ground Soccer Cleats 3.png'),
        ]
    },
    {
        id: 6,
        category: 'cleats',
        productName: 'Adidas Adizero Primeknit Cleats',
        productPrice:24700,
        description:'Lace up the support to leave defenders behind. These Adizero Primeknit football cleats let you cut and run off the line with the speed to get clear. The engineered knit upper hugs the foot for the flex and support to focus on winning.',
        isOff:false,
        productImage: require('../database/images/Cleats/Adidas Adizero Primeknit Cleats.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Cleats/Adidas Adizero Primeknit Cleats.png'),
            require('../database/images/Cleats/Adidas Adizero Primeknit Cleats 2.png'),
            require('../database/images/Cleats/Adidas Adizero Primeknit Cleats 3.png'),
        ]
    },
    {
        id: 7,
        category: 'cleats',
        productName: 'Adidas Predator Edge Geometric+ Firm Ground Cleats',
        productPrice:2800,
        description:'Plot your path to total control in this limited-collection version of adidas\' all-new Predator Edge soccer cleats. Quietly taking charge behind an eye-catching design, their Zone Skin upper has a series of distinct ribbed sections that are perfectly placed and precision-sculpted for every kind of ball contact. Underneath, a split outsole shifts weight to the forefoot, adding power to strikes. The laceless adidas PRIMEKNIT collar keeps you locked in as you master the pitch.',
        isOff:true,
        offPercentage:25,
        productImage: require('../database/images/Cleats/Adidas Predator Edge Geometric+ Firm Ground Cleats.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Cleats/Adidas Predator Edge Geometric+ Firm Ground Cleats.png'),
            require('../database/images/Cleats/Adidas Predator Edge Geometric+ Firm Ground Cleats 2.png'),
            require('../database/images/Cleats/Adidas Predator Edge Geometric+ Firm Ground Cleats 3.png'),
        ]
    },
    {
        id: 8,
        category: 'cleats',
        productName: 'Adidas X Speedflow.3 Firm Ground Cleats',
        productPrice:24700,
        description:'From brain to cleat to ball. And back again. When sharpness of mind meets quickness of body, you become the fastest version of yourself. Find your flow and leave the rest behind. The semi-translucent Speedskin upper on these adidas X soccer cleats keeps you comfortable as you explode into action. Underneath, a TPU outsole lays down serious acceleration on firm ground. The foot-hugging fit straps you in for jinks and turns to keep you one step ahead.',
        isOff:false,
        productImage: require('../database/images/Cleats/Adidas X Speedflow.3 Firm Ground Cleats.png'),
        isAvailable: false,
        productImageList: [
            require('../database/images/Cleats/Adidas X Speedflow.3 Firm Ground Cleats.png'),
            require('../database/images/Cleats/Adidas X Speedflow.3 Firm Ground Cleats 2.png'),
            require('../database/images/Cleats/Adidas X Speedflow.3 Firm Ground Cleats 3.png'),
        ]
    },
    {
        id: 9,
        category: 'cleats',
        productName: 'Adidas Predator Freak.2 Firm Ground Cleats',
        productPrice:25000,
        description:'Every time you cross that white line you enter a whole new world. An alternative reality where you call the shots. The pitch is yours to control. Set your inner freak free in adidas Predator. These soccer cleats have a two-piece collar for easy entry and a mid-cut design for extra support. The adidas Primeknit upper wraps your foot for secure lockdown. A wide expanse of aggressive Demonskin 2.0 spines ensures you have as much influence over the ball as you do over your opponents.',
        isOff:false,
        productImage: require('../database/images/Cleats/Adidas Predator Freak.2 Firm Ground Cleats.png'),
        isAvailable: false,
        productImageList: [
            require('../database/images/Cleats/Adidas Predator Freak.2 Firm Ground Cleats.png'),
            require('../database/images/Cleats/Adidas Predator Freak.2 Firm Ground Cleats 2.png'),
            require('../database/images/Cleats/Adidas Predator Freak.2 Firm Ground Cleats 3.png'),
        ]
    },
    {
        id: 10,
        category: 'cleats',
        productName: 'Adidas X Speedflow+ Firm Ground Cleats',
        productPrice:25000,
        description:'When razor-sharp instincts flow into lightning pace, the pitch becomes your playground. Find your soccer groove in adidas X. These cleats support speed of thought and rapid feet. The Carbitex carbon-fiber insert and raised forefoot help spark explosive acceleration, and an Agilitycage straps you in for jinks and turns. The adidas PRIMEKNIT skin adds comfort and confidence.',
        isOff:true,
        offPercentage:5,
        productImage: require('../database/images/Cleats/Adidas X Speedflow+ Firm Ground Cleats.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Cleats/Adidas X Speedflow+ Firm Ground Cleats.png'),
            require('../database/images/Cleats/Adidas X Speedflow+ Firm Ground Cleats 2.png'),
            require('../database/images/Cleats/Adidas X Speedflow+ Firm Ground Cleats 3.png'),
        ]
    },
    {
        id: 11,
        category: 'jerseys',
        productName: 'Nike Barcelona Home Jersey',
        productPrice:16500,
        description:'Like other jerseys from our Match collection, this one pairs authentic design details with lightweight, quick-drying fabric to help keep the world’s biggest soccer stars cool and comfortable on the field. This product is made with 100% recycled polyester fibers.',
        isOff:false,
        productImage: require('../database/images/Jerseys/Nike Barcelona Home Jersey.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Jerseys/Nike Barcelona Home Jersey.png'),
            require('../database/images/Jerseys/Nike Barcelona Home Jersey 2.png'),
            require('../database/images/Jerseys/Nike Barcelona Home Jersey 3.png'),
        ]
    },
    {
        id: 12,
        category: 'jerseys',
        productName: 'Nike Club América Away Jersey',
        productPrice:9000,
        description:'Like other jerseys from our Stadium collection, the Club América Jersey pairs replica design details with sweat-wicking fabric to give you a game-ready look inspired by your favorite team. This product is made with at least 75% recycled polyester fibers.',
        isOff:false,
        productImage: require('../database/images/Jerseys/Nike Club America Away Jersey.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Jerseys/Nike Club America Away Jersey.png'),
            require('../database/images/Jerseys/Nike Club America Away Jersey 2.png'),
            require('../database/images/Jerseys/Nike Club America Away Jersey 3.png'),
        ]
    },
    {
        id: 13,
        category: 'jerseys',
        productName: 'Nike England Away Jersey',
        productPrice:13000,
        description:'Rep your team in the England Stadium Away Jersey. Highly breathable fabric helps keep sweat off your skin, so you stay cool and comfortable on the field or in the stands.',
        isOff:false,
        productImage: require('../database/images/Jerseys/Nike England Away Jersey.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Jerseys/Nike England Away Jersey.png'),
            require('../database/images/Jerseys/Nike England Away Jersey 2.png'),
            require('../database/images/Jerseys/Nike England Away Jersey 3.png'),
        ]
    },
    {
        id: 14,
        category: 'jerseys',
        productName: 'Nike Inter Milan Home Jersey',
        productPrice:11500,
        description:'Like other jerseys from our Stadium collection, the Inter Milan Jersey pairs replica design details with sweat-wicking fabric to give you a game-ready look inspired by your favorite team. This product is made with 100% recycled polyester fibers.',
        isOff:false,
        productImage: require('../database/images/Jerseys/Nike Inter Milan Home Jersey.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Jerseys/Nike Inter Milan Home Jersey.png'),
            require('../database/images/Jerseys/Nike Inter Milan Home Jersey 2.png'),
            require('../database/images/Jerseys/Nike Inter Milan Home Jersey 3.png'),
        ]
    },
    {
        id: 15,
        category: 'jerseys',
        productName: 'Nike Liverpool Home Jersey',
        productPrice:14000,
        description:'Like other jerseys from our Match collection, the Liverpool FC Jersey pairs authentic design details with lightweight, quick-drying fabric to help keep the world’s biggest soccer stars cool and comfortable on the field. This product is made with 100% recycled polyester fibers.',
        isOff:false,
        productImage: require('../database/images/Jerseys/Nike Liverpool Away Jersey.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Jerseys/Nike Liverpool Away Jersey.png'),
            require('../database/images/Jerseys/Nike Liverpool Away Jersey 2.png'),
            require('../database/images/Jerseys/Nike Liverpool Away Jersey 3.png'),
        ]
    },
    {
        id: 16,
        category: 'jerseys',
        productName: 'Adidas Juventus Away Jersey',
        productPrice:11000,
        description:'When they hit the road, Juventus always find the right beat. With colorful 3-Stripes and shimmering details, this adidas soccer jersey gets its energy from Turin\'s electronic music scene. Made to keep fans comfortable, it mixes soft fabric with moisture-absorbing AEROREADY. A woven badge decorates the chest.',
        isOff:true,
        offPercentage:10,
        productImage: require('../database/images/Jerseys/Adidas Juventus Away Jersey.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Jerseys/Adidas Juventus Away Jersey.png'),
            require('../database/images/Jerseys/Adidas Juventus Away 2.png'),
            require('../database/images/Jerseys/Adidas Juventus Away 3.png'),
        ]
    },
    {
        id: 17,
        category: 'jerseys',
        productName: 'Adidas LAFC Away Jersey',
        productPrice:13000,
        description:'Less is more. The Los Angeles FC home uniform has a clean design fit for a team that lets its game do the talking. Wear this adidas authentic soccer jersey when you want to fly on the field. It\'s made of dull-shine fabric with a lightweight heat-transfer badge on the chest and a jocktag on the hem. Sweat-wicking AEROREADY keeps you comfortable',
        isOff:false,
        productImage: require('../database/images/Jerseys/Adidas LAFC Away Jersey.png'),
        isAvailable: false,
        productImageList: [
            require('../database/images/Jerseys/Adidas LAFC Away Jersey.png'),
            require('../database/images/Jerseys/Adidas LAFC Away Jersey 22.png'),
            require('../database/images/Jerseys/Adidas LAFC Away Jersey 3.png'),
        ]
    },
    {
        id: 18,
        category: 'jerseys',
        productName: 'Adidas Mexico Away Jersey',
        productPrice:12000,
        description:'Pride and passion. Azteca-style details in vivid hues leap out from the black backdrop of this Mexico Home Jersey. Soft fabric absorbs moisture to keep you comfortable even when things get tense on the soccer field. A woven badge adds the finishing touch.',
        isOff:true,
        offPercentage:15,
        productImage: require('../database/images/Jerseys/Adidas Mexico Away Jersery.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Jerseys/Adidas Mexico Away Jersery.png'),
            require('../database/images/Jerseys/Adidas Mexico Away Jersey 2.png'),
            require('../database/images/Jerseys/Adidas Mexico Away Jersey 3.png'),
        ]
    },
    {
        id: 19,
        category: 'jerseys',
        productName: 'Adidas Real Madrid Home Jersey',
        productPrice:15000,
        description:'They win on the pitch. But the Plaza de Cibeles is where they celebrate with their soccer family. The concentric circles and spiral pattern of the fountain in Madrid\'s famous square inspired this adidas Real Madrid jersey\'s design. Made for fans, this shirt will keep you comfortable with soft fabric and moisture-absorbing AEROREADY.',
        isOff:false,
        productImage: require('../database/images/Jerseys/Adidas Real Madrid Home Jersey.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Jerseys/Adidas Real Madrid Home Jersey.png'),
            require('../database/images/Jerseys/Adidas Real Madrid Home Jersey 2.png'),
            require('../database/images/Jerseys/Adidas Real Madrid Home Jersey 3.png'),
        ]
    },
    {
        id: 20,
        category: 'jerseys',
        productName: 'Adidas Seattle Sounders Home Jersey',
        productPrice:13000,
        description:'Soccer\'s just a sport. Seattle\'s real superstars change lives every day. This adidas Sounders home authentic jersey salutes the city\'s true champions with a vibrant, superhero-style chevron pattern. Designed to perform on the field, it includes lightweight details and moisture-wicking AEROREADY. A heat-applied badge and pair of signoffs complete the look.',
        isOff:true,
        offPercentage:50,
        productImage: require('../database/images/Jerseys/Adidas Seattle Sounders Home Jersey.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Jerseys/Adidas Seattle Sounders Home Jersey.png'),
            require('../database/images/Jerseys/Adidas Seattle Sounders Home Jersey 2.png'),
            require('../database/images/Jerseys/Adidas Seattle Sounders Home Jersey 3.png'),
        ]
    },
    {
        id: 21,
        category: 'shinguards',
        productName: 'Nike Mercurial Lite Soccer Shinguards (Clear/White)',
        productPrice:2200,
        description:'The Nike Mercurial Lite Shin Guards give you comfortable cushioning and a durable shell with a lightweight sleeve to keep it all in place. They have a low-profile and left/right-specific fit with perforated foam for breathability.',
        isOff:false,
        productImage: require('../database/images/Shinguards/Nike Shinguards 001.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Shinguards/Nike Shinguards 001.png'),
            require('../database/images/Shinguards/Nike Shinguards 001A.png'),
            require('../database/images/Shinguards/Nike Shinguards 001B.png'),
        ]
    },
    {
        id: 22,
        category: 'shinguards',
        productName: 'Nike Mercurial Lite Soccer Shinguards (Green/Blue)',
        productPrice:2200,
        description:'The Nike Mercurial Lite Shin Guards give you comfortable cushioning and a durable shell with a lightweight sleeve to keep it all in place. They have a low-profile and left/right-specific fit with perforated foam for breathability.',
        isOff:true,
        offPercentage:5,
        productImage: require('../database/images/Shinguards/Nike Shinguards 0022.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Shinguards/Nike Shinguards 0022.png'),
            require('../database/images/Shinguards/Nike 0022A.png'),
            require('../database/images/Shinguards/Nike Shinguards 0022B.png'),
        ]
    },
    {
        id: 23,
        category: 'shinguards',
        productName: 'Nike Mercurial Lite Soccer Shinguards (Black/White)',
        productPrice:2400,
        description:'Designed for the modern player, the Nike® Adult Mercurial Lite Soccer Shin Guards are a solid option for anyone looking to maintain speed without sacrificing quality protection. Equipped with a contoured shell that\'s supported by Dri-Fit™ sleeves, the Mercurial Lites deliver a secure, anatomical fit to reduce mid-match distractions, while its K-resin shell is backed with dense foam to absorb and dissipate impact when fighting for possession.',
        isOff:false,
        productImage: require('../database/images/Shinguards/Nike Shinguards 003.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Shinguards/Nike Shinguards 003.png'),
            require('../database/images/Shinguards/Nike Shinguards 003A.png'),
            require('../database/images/Shinguards/Nike Shinguards 003B.png'),
        ]
    },
    {
        id: 24,
        category: 'shinguards',
        productName: 'Nike Mercurial Lite Soccer Shinguards (Red/Black)',
        productPrice:3000,
        description:'The Nike Mercurial Lite Shin Guards give you comfortable cushioning and a durable shell with a lightweight sleeve to keep it all in place. They have a low-profile and left/right-specific fit with perforated foam for breathability.',
        isOff:false,
        productImage: require('../database/images/Shinguards/Nike Shinguards 0044.png'),
        isAvailable: false,
        productImageList: [
            require('../database/images/Shinguards/Nike Shinguards 0044.png'),
            require('../database/images/Shinguards/Nike Shinguards 0044B.png'),
            require('../database/images/Shinguards/Nike Shinguards 0044C.png'),
        ]
    },
    {
        id: 25,
        category: 'shinguards',
        productName: 'Nike Mercurial Lite CR7 Soccer Shinguards (Green/Yellow/Red)',
        productPrice:1000,
        description:'The CR7 Nike Mercurial Lite Shin Guards give you comfortable cushioning and a durable shell with a lightweight sleeve to keep it all in place. They have a low-profile and left/right-specific fit with perforated foam for breathability.',
        isOff:false,
        productImage: require('../database/images/Shinguards/Nike Shinguards 005.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Shinguards/Nike Shinguards 005.png'),
            require('../database/images/Shinguards/Nike Shinguards 0055A.png'),
            require('../database/images/Shinguards/Nike Shinguards 0055B.png'),
        ]
    },
    {
        id: 26,
        category: 'shinguards',
        productName: 'Adidas Predator League Shin Guards - Blue/Turbo - S',
        productPrice:3500,
        description:'Soccer confidence flows when you know everything\'s in the right place. These adidas Predator League shin guards keep you bossing the pitch with robust hard shields backed with EVA for absorbing the hardest hits. They come with separate compression sleeves designed to hold them firmly in place.',
        isOff:false,
        productImage: require('../database/images/Shinguards/Adidas Predator League Shin Guards - Blue & Turbo.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Shinguards/Adidas Predator League Shin Guards - Blue & Turbo.png'),
            require('../database/images/Shinguards/Adidas Predator League Shin Guards - Blue & Turbo 2.png'),
            require('../database/images/Shinguards/Adidas Predator League Shin Guards - Blue & Turbo 3.png'),
        ]
    },
    {
        id: 27,
        category: 'shinguards',
        productName: 'Adidas Tiro League Shin Guards - White & Black',
        productPrice:1200,
        description:'A trusted name on the soccer pitch. These adidas Tiro League Shin Guards have super tough, flexible shields that are held in place by stretchy retaining sleeves. Their EVA backing is molded to better fit your shins and to increase airflow. The low-profile construction means you\'ll never lose focus.',
        isOff:true,
        offPercentage:10,
        productImage: require('../database/images/Shinguards/Adidas Tiro League Shinguards - White & Black.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Shinguards/Adidas Tiro League Shinguards - White & Black.png'),
            require('../database/images/Shinguards/Adidas Tiro League Shinguards - White & Black 2.png'),
            require('../database/images/Shinguards/Adidas Tiro League Shin Guards - White & Black 3.png'),
        ]
    },
    {
        id: 28,
        category: 'shinguards',
        productName: 'Adidas Predator League Shin Guards - Red & Black',
        productPrice:1600,
        description:'The beast is back. These adidas Predator 20 League Shin Guards put up a ferocious defence with EVA-backed shields that match the contours of your shins and absorb impacts. Soft, synthetic lining and a close fit mean you\'ll control the football pitch in comfort. Pull on the compression sleeve to keep everything tight.',
        isOff:false,
        productImage: require('../database/images/Shinguards/Adidas Predator League Shin Guards - Red & Black.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Shinguards/Adidas Predator League Shin Guards - Red & Black.png'),
            require('../database/images/Shinguards/Adidas Predator League Shin Guards - Red & Black 2.png'),
            require('../database/images/Shinguards/Adidas Predator League Shin Guards - Red & Black 3.png'),
        ]
    },
    {
        id: 29,
        category: 'shinguards',
        productName: 'Adidas Predator Match Shin Guards - Blue & Turbo',
        productPrice:2500,
        description:'Soccer confidence flows when you know everything\'s in the right place. Extra padding around the ankle area makes these adidas Predator Match shin guards the perfect choice when you need to bolster your defenses. Held in place by a hook-and-loop closure, the attached hard shields have a layer of EVA backing for shock-absorption.',
        isOff:true,
        offPercentage:20,
        productImage: require('../database/images/Shinguards/Adidas Predator League Shin Guards - Blue & Turbo.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Shinguards/Adidas Predator League Shin Guards - Blue & Turbo.png'),
            require('../database/images/Shinguards/Adidas Predator League Shin Guards - Blue & Turbo 2.png'),
            require('../database/images/Shinguards/Adidas Predator League Shin Guards - Blue & Turbo 3.png'),
        ]
    },
    {
        id: 30,
        category: 'shinguards',
        productName: 'Adidas Predator X Match Shin Guards - Blue & Pink',
        productPrice:2000,
        description:'Soccer only flows when you feel free, so these lightweight adidas Predator X Match Shin Guards offer a solid defense without sacrificing agility. They\'re backed with molded, perforated EVA for comfortable cushioning and enhanced shock absorption. A compression sleeve holds everything in place so you stay one step ahead.',
        isOff:false,
        productImage: require('../database/images/Shinguards/Adidas Predator X Match Shin Guards - Blue & Pink.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Shinguards/Adidas Predator X Match Shin Guards - Blue & Pink.png'),
            require('../database/images/Shinguards/Adidas Predator X Match Shin Guards - Blue & Pink 2.png'),
            require('../database/images/Shinguards/Adidas Predator X Match Shin Guards - Blue & Pink 3.png'),
        ]
    },
    {
        id: 31,
        category: 'balls',
        productName: 'Nike Strike Aerowsculpt Academy Team Soccer Ball',
        productPrice:3000,
        description:'Play like a soccer star with the Nike Strike Aerowsculpt Academy Team Soccer Ball. This soccer ball features Nike Aerowsculpt technology that uses molded grooves for a consistent flight. The reinforced rubber bladder helps maintain air pressure and shape, while the textured casing provides a great touch and feel.',
        isOff:true,
        offPercentage:40,
        productImage: require('../database/images/Ball/Nike Strike Aerowsculpt Academy Team Soccer Ball.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Ball/Nike Strike Aerowsculpt Academy Team Soccer Ball.png'),
        ]
    },
    {
        id: 32,
        category: 'balls',
        productName: 'Nike Flight Soccer Ball',
        productPrice:3300,
        description:'The Nike Mercurial Lite Shin Guards give you comfortable cushioning and a durable shell with a lightweight sleeve to keep it all in place. They have a low-profile and left/right-specific fit with perforated foam for breathability.',
        isOff:true,
        offPercentage:20,
        productImage: require('../database/images/Ball/Nike Flight Soccer Ball.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Ball/Nike Flight Soccer Ball.png'),
        ]
    },
    {
        id: 33,
        category: 'balls',
        productName: 'Nike Strike Soccer Ball',
        productPrice:2500,
        description:'The Nike Mercurial Lite Shin Guards give you comfortable cushioning and a durable shell with a lightweight sleeve to keep it all in place. They have a low-profile and left/right-specific fit with perforated foam for breathability.',
        isOff:true,
        offPercentage:10,
        productImage: require('../database/images/Ball/Nike Strike Soccer Ball.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Ball/Nike Strike Soccer Ball.png'),
        ]
    },
    {
        id: 34,
        category: 'balls',
        productName: 'Nike Pitch Training Ball',
        productPrice:4500,
        description:'The Nike Mercurial Lite Shin Guards give you comfortable cushioning and a durable shell with a lightweight sleeve to keep it all in place. They have a low-profile and left/right-specific fit with perforated foam for breathability.',
        isOff:true,
        offPercentage:25,
        productImage: require('../database/images/Ball/Nike Pitch Training Ball - Blue & Black.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Ball/Nike Pitch Training Ball - Blue & Black.png'),
        ]
    },
    {
        id: 35,
        category: 'balls',
        productName: 'Nike Strike Soccer Ball (Yellow/Red)',
        productPrice:3500,
        description:'The Nike Mercurial Lite Shin Guards give you comfortable cushioning and a durable shell with a lightweight sleeve to keep it all in place. They have a low-profile and left/right-specific fit with perforated foam for breathability.',
        isOff:true,
        offPercentage:10,
        productImage: require('../database/images/Ball/Nike Strike Soccer Ball - Yellow & Red.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Ball/Nike Strike Soccer Ball - Yellow & Red.png'),
        ]
    },
    {
        id: 36,
        category: 'balls',
        productName: 'Adidas Champions League 2019 Ball',
        productPrice:1500,
        description:'Stars collide as the UEFA Champions League heats up. This soccer ball is a replica of the game ball used in this season\'s knockout stages and final. It has a seamless surface for high-quality performance and a textured outer coating that enhances its flight and touch. The vibrant design is inspired by the final\'s venue in Madrid. A FIFA stamp confirms its quality.',
        isOff:false,
        productImage: require('../database/images/Ball/Adidas Champions League Final 2019 Ball.png'),
        isAvailable: false,
        productImageList: [
            require('../database/images/Ball/Adidas Champions League Final 2019 Ball.png'),
        ]
    },
    {
        id: 37,
        category: 'balls',
        productName: 'Adidas Champions League Final 2021 Ball',
        productPrice:1800,
        description:'Make the winning goal with the Adidas UEFA Final League Soccer Ball. The TPU construction affords durability, while the laminated finish provides a stylish look on and off the field. This Adidas ball is 100% TPU constructed, which aids its its durability, it also has a laminated finish provides a unique look.',
        isOff:false,
        productImage: require('../database/images/Ball/Adidas Chapions League 2021 Final Ball.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Ball/Adidas Chapions League 2021 Final Ball.png'),
        ]
    },
    {
        id: 38,
        category: 'balls',
        productName: 'Adidas Glider 2 Ball',
        productPrice:2300,
        description:'This Adidas Glider 2 Ball soccer ball comes with a rubber bladder that provides best air retention that is machine-stitched fabric material. The machine-stitched fabric material ensures extended durability, and the hard-wearing spring technology helps the ball constantly bounce back',
        isOff:false,
        productImage: require('../database/images/Ball/Adidas Glider 2 Ball.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Ball/Adidas Glider 2 Ball.png'),
        ]
    },
    {
        id: 39,
        category: 'balls',
        productName: 'Adidas Starlancer Club Ball',
        productPrice:2000,
        description:'Paint pictures on the soccer field with the adidas Starlancer Club Ball. Standing out with brushstroke-style graphics, it\'s machine-stitched for rugged durability. The butyl bladder means you\'ll spend less time pumping it up and more time pinging balls around the park.',
        isOff:false,
        productImage: require('../database/images/Ball/Adidas Starlancer Club Ball.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Ball/Adidas Starlancer Club Ball.png'),
        ]
    },
    {
        id: 40,
        category: 'balls',
        productName: 'Adidas UCL Training Ball Hologram',
        productPrice:2100,
        description:'In the heat of competition, stars will be born. Mirroring the official match ball\'s dynamic look, the glitched design on this adidas Pyrostorm Training soccer ball burns with the intensity of Europe\'s biggest club tournament. Eye-catching holographic details add to the spectacle. Ideal for training sessions, its tough TPU cover is machine-stitched for rugged durability.',
        isOff:false,
        productImage: require('../database/images/Ball/Adidas UCL Training Ball Hologram.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/Ball/Adidas UCL Training Ball Hologram.png'),
        ]
    },
    
]