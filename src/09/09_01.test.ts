function increaseAge(user: UserType) {
    user.age++
}

type UserType = {
    name: string
    age: number
}

type UserType2 = {
    name: string
    age: number
    address: {title: string}
}

test('reference type test', () => {
    var user: UserType = {
        name: "Dima",
        age: 33
    }

    increaseAge(user)

    const superman = user;

    superman.age = 1000;
    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    var users = [{
        name: "Dima",
        age: 33
    },
        {
            name: "Alex",
            age: 45
        }
    ]

    var admins = users;

    admins.push({name: "bandugan", age: 10});

    expect(users[2]).toEqual({name: "bandugan", age: 10})

})

test('value type test', () => {
   let usersCount = 100;
   let adminsCount = usersCount;
   adminsCount++;
    expect(adminsCount).toBe(101)
})

test('reference type test 2', () => {

    let address = {
        title: "Yellowknife"
    }

    let user1: UserType2 = {
        name: "Dima",
        age: 33,
        address: address
    }

    let user2: UserType2 = {
        name: "Irina",
        age: 30,
        address: address
    }

    address.title = "Northern Pole"
    expect(user1.address.title).toBe("Northern Pole")
})

test('reference type array test', () => {

    let address = {
        title: "Yellowknife"
    }

    let user1: UserType2 = {
        name: "Dima",
        age: 33,
        address: address
    }

    let user2: UserType2 = {
        name: "Irina",
        age: 30,
        address: address
    }

    let users = [
        user1, user2, {name: "Sasha", age: 5, address: address}
    ]

    let admins = [user1,user2]

    admins[0].name = "Dimitrii"

    expect(user1.name).toBe("Dimitrii")
    expect(users[0].name).toBe("Dimitrii")
})