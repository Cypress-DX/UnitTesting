import React from "react";

export type PersonType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}

type FruitType = {
    fruitName: string
    isSweet: boolean
}

type HouseType2 = {
    streetTitle: string
    houseNumber: number
    parking: boolean
}

type AddresType2 = {
    country: string
    postalCode: string
    house: HouseType2
}

export type ExampleType = {
    fruit: Array<FruitType>
    restaurant: string
    yearFoundation: number
    address: AddresType2
    owner: string
}

export type LessonType = {
    title: number

}

type PropsType = {
    title: string
    man: PersonType
}

export const ManComponent: React.FC<PropsType> = (props) => {

    const {title, man} = props;
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}

export const ExampleComponent: React.FC<ExampleType> = ({yearFoundation, address, ...props}) => {

    return (
    <div>
        <h1>{yearFoundation}</h1>
        <div>
            {address.country}
        </div>
        <div>
            {props.restaurant}
        </div>
    </div>
    )
}