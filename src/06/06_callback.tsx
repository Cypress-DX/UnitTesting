import React, {ChangeEvent, MouseEvent} from 'react'

const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

    alert(event.currentTarget.name)
}

const saveUser = () => {
    alert("User has been saved")
}

const onChangeUser = () => {
    console.log("Name has changed")
}

const onAgeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Age has changed: " + event.currentTarget.value)
}

const focusLostHandler = () => {
    console.log("focus lost")
}
export const  User = () => {

    return <div>
        <textarea
            onChange={onChangeUser}
            onBlur={focusLostHandler}
        >Dimisini</textarea>
        <input onChange={onAgeChangeHandler} type={"number"}/>
        <div>
            <button onClick={deleteUser} name="delete">delete</button>
            <button onClick={saveUser} name="save">save</button>
        </div>
    </div>
}