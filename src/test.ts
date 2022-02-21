import {TaskType} from "./04/04";

let tasks: TaskType

test("Show only retired people above/equal 60yo", () => {

    const ages = [23, 43, 22, 5, 77, 50, 90, 60, 33, 63];


    const pensionAge = ages.filter(age => age >= 60)


    expect(pensionAge.length).toBe(4);
    expect(pensionAge[0]).toBe(77);
})


test('Takes courses under 160', () => {


    const courses = [{
        title: 'HTML',
        price: 120
    }, {
        title: 'JS',
        price: 150
    }, {
        title: 'REACT',
        price: 200
    }]

    const cheapCourses = courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2);
    expect((cheapCourses[0].title)).toBe("HTML");
    expect((cheapCourses[1].title)).toBe("JS");
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "milk", isDone: false },
        {id: 2, title: "bread", isDone: true },
        {id: 3, title: "salt", isDone: false },
        {id: 4, title: "sugar", isDone: true },
        {id: 5, title: "honey", isDone: false }
    ]
    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[1].title).toBe("sugar");
})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "milk", isDone: false },
        {id: 2, title: "bread", isDone: true },
        {id: 3, title: "salt", isDone: false },
        {id: 4, title: "sugar", isDone: true },
        {id: 5, title: "honey", isDone: false }
    ]
    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(3);
    expect(uncompletedTasks[1].title).toBe("salt");
})