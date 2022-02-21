import {ExampleType, PersonType} from "./07_destructing";


let props: PersonType;

let example: ExampleType;

beforeEach(() => {
    props = {
        name: "Dima",
        age: 36,
        lessons: [{title: 1}, {title: 2}],
        address: {
            street: {
                title: "Korabelnaya"
            }
        }
    }

    example = {
        fruit: [{
            fruitName: "avocado",
            isSweet: false
        }, {
            fruitName: "lemon",
            isSweet: false
        }, {
            fruitName: "orange",
            isSweet: true
        }],
        restaurant: "Bravo",
        yearFoundation: 1993,
        address: {
            country: "Canada",
            postalCode: "X1A0C7",
            house: {
                streetTitle: "Con Rd",
                houseNumber: 30,
                parking: true
            }
        },
        owner: "Oleg Tinkoff"
    }
})


test("", () => {

        const {age, lessons} = props;

        const {title} = props.address.street

        expect(age).toBe(36);
        expect(lessons.length).toBe(2);
        expect(lessons[1].title).toBe(2);
        expect(title).toBe("Korabelnaya")

    }
)

test("destruction of objects and array should work properly", () => {
    const {fruit, yearFoundation, ...restExample} = example
    const [,,f3] = fruit;
    const [,f2] = fruit;




    expect(fruit.length).toBe(3);
    expect(fruit[0].isSweet).toBe(false);
    expect(f3.fruitName).toBe("orange");
    expect(f2.fruitName).toBe("lemon");
})
