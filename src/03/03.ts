import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string)  => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s:StudentType) => {
    s.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return (student.address.city.cityTitle === city);
}

export const addMoneyToBudget = (governmentBuilding: GovernmentBuildingType, budget: number) => {
    governmentBuilding.budget += budget;
}

/*
export const demolishHousesOnTheStreet = (houses: HouseType, street: string) => {
    houses.address.street === street ?
}*/

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (governmentBuilding: GovernmentBuildingType, number: number) => {
    governmentBuilding.staffCount -= number;
}

export const toHireStaff = (governmentBuilding: GovernmentBuildingType, number: number) => {
    governmentBuilding.staffCount += number;
}

export const greetingMessage = (city: CityType) => {
    return  "Hello all " + city.citizensNumber + " citizens of " + city.title;
}