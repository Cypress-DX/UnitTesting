import {CityType} from "../02/02_02";
import {
    addMoneyToBudget,
    demolishHousesOnTheStreet,
    greetingMessage,
    repairHouse,
    toFireStaff,
    toHireStaff
} from "./03";


let city: CityType;


beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            id: 1,
            buildedAt: 2012, repaired: false, address: {
                number: 100,
                street: {title: "White street"}
            }
        },
            {
                id: 2,
                buildedAt: 2008, repaired: false, address: {
                    number: 100, street: {title: "Happy street"}
                }
            },
            {
                id: 3,
                buildedAt: 2020, repaired: false, address: {
                    number: 101, street: {title: "Happy street"}
                }
            }
        ],
        governmentBuildings: [{
            type: "HOSPITAL", budget: 200000, staffCount: 200, address: {
                street: {title: "Central Str"}
            }
        },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000, address: {
                    street: {title: "South Str"}
                }
            }],
        citizensNumber: 1000000
    }
})

// 01. создайте в отдельном файле функцию, чтобы тесты прошли

test("Budget should be changed for Hospital", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
})
// 01b. создайте в отдельном файле функцию, чтобы тесты прошли

test.skip("Budget should be changed for FireStation", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000)
})


// 02. - заполните тип HouseType (добавьте порядковй id от 1 и по возрастанию
//     - заполните в том же файле еще одну функцию, чтобы тесты прошли

test.skip("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy Street");

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)

})

// 03. - repair house

test("House should be repaired", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();

})

// 04. - You are fired

test("Staff should be fired", () => {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

// 04. - You are hired

test("Staff should be hired", () => {
    toHireStaff(city.governmentBuildings[1], 100);
    expect(city.governmentBuildings[1].staffCount).toBe(1100)
})
// greeting
test("Greeting message should be correct", () => {
    const message = greetingMessage(city);
    expect(message).toBe("Hello all 1000000 citizens of New York")
})