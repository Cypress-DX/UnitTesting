import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";
import exp from "constants";

let student: StudentType;

beforeEach(() => {
    student = {
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
})

test("new skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, "CSS");
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("CSS");
    expect(student.technologies[3].id).toBeDefined();
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test("new skill should be added to student", () => {
 let result1 = doesStudentLiveIn(student, "Moscow");
 let result2 = doesStudentLiveIn(student, "Kotlas");
   expect(result1).toBe(false);
   expect(result2).toBe(true);

})