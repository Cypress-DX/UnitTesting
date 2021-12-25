type LocalCityType = {
    cityTitle: string
    country: string
}

type AddressType = {
    streetTitle: string
    buildingNumber: number
    flat: number
    city: LocalCityType
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

type TechType = {
    id: number
    title: string
}

export const student: StudentType = {
    id: 1,
    name: "Dima",
    age: 33,
    isActive: false,
    address: {
        streetTitle: "Pushkina",
        buildingNumber: 22,
        flat: 33,
        city: {
            cityTitle: "Kotlas",
            country: "Russia"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "JS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}
console.log(student.address.city.country);
console.log(student.technologies[2].title);

type ToolsType = {
    oven: string
    utensilMaterial: string
    coffeeMaker: string
}

type RoomType = {
    isLightOn: boolean
    sizeSqM: number
    type: string
    tools: ToolsType
    celling: string
    lights: number
}

const room: RoomType = {
    isLightOn: true,
    sizeSqM: 7,
    type: "kitchen",
    tools: {
        oven: "gas",
        utensilMaterial: "steel",
        coffeeMaker: "gayzer"
    },
    celling: "shell",
    lights: 4
}

type CatType = {
    name: string
    age: number
    food: string
    isFeed: boolean
    color: string
}

const cat: CatType = {
    name: "Timon",
    age: 6,
    food: "Purina One",
    isFeed: true,
    color: "black"
}

type IngridientsType = {
    main: string
    misc: Array<string>
}

type ProductionType = {
    country: string
    staff: number
    ingridients: IngridientsType
    founded: number
}

type CandyType = {
    title: string
    isSweet: boolean
    calories: number
    boughtTimes: number
    price: number
    analogs: Array<string>
    production: ProductionType
    stores: number
}

const candy: CandyType = {
    title: "Snickers",
    isSweet: true,
    calories: 139,
    boughtTimes: 37,
    price: 21,
    analogs: ["mars", "kitkat", "nuts", "picnic"],
    production: {
        country: "Russia",
        staff: 400,
        ingridients: {
            main: "sugar",
            misc: ["milk", "huzelnut", "cocoaPowder", "protein"]
        },
        founded: 1923
    },
    stores: 23
}

const book = {
    title: "Independence",
    author: "McKinley",
    pages: 322,
    isBestseller: true
}

type PlaneType = {
    title: string
    widthSpan: number
    capacity: number
    history: HistoryType
}

type HistoryType = {
    build: number
    hoursInAir: number
    hadAccidents: boolean
    numberOfOwners: number
    airports: Array<string>
}

const plane = {
    title: "Boeing",
    widthSpan: 45,
    capacity: 120,
    history: {
        build: 2012,
        hoursInAir: 15000,
        hadAccidents: false,
        numberOfOwners: 3,
        airports: ["SVO", "DMD", "VNK", "CGY", "LON"]
    }
}

const courses = [{
    title: "HTML Academy",
    price: 300,
    duration: 7,
    content: {
        month1: ['hmtl', 'css', 'css50'],
        month2: ['js', 'ts'],
        month3: ['react', 'nodeJS']
    },
    rating: 5
}]