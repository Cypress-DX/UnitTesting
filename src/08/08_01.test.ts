type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(()=>{
    users = {
        '4632': {id: 4632, name: 'Dima'},
        '1234202': {id: 1234202, name: 'Alex'},
        '1': {id: 1, name: 'Nick'},
        '4445': {id: 4445, name: 'Mike'}
    }
})

test("should be updated", () => {
    expect(users[1].name).toBe("Terminator")
})