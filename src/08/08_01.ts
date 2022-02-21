export const UserObj = {
    '1': 'Dima',
    '2': 'Alex',
    '3': 'Nick',
    '4': 'Mike'
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '4632': {id: 4632, name: 'Dima'},
    '1234202': {id: 1234202, name: 'Alex'},
    '1': {id: 1, name: 'Nick'},
    '4445': {id: 4445, name: 'Mike'}
}

var user = {id: 100500, name: "Igor"}

users[user.id] = user;

delete users[user.id]

users[user.id].name = "Vitya"




export const UsersArray = [
    {id: 4632, name: 'Dima'},
    {id: 1234202, name: 'Alex'},
    {id: 1, name: 'Nick'},
    {id: 4445, name: 'Mike'}
]

UsersArray.filter(u=>u.id===1)