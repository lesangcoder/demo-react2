// lass component
//function component
import React, { useEffect, useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

const MyComponent = (props) => {
    const [listUser, setListUser] = useState([
        { id: 1, name: "Sang", age: "36" },
        { id: 2, name: "Le", age: "30" },
        { id: 3, name: "Thanh", age: "31" },
        { id: 4, name: "Louis", age: "4" },
        { id: 5, name: "Khanh", age: "28" },
    ]);
    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUser]);
        console.log(listUser);
    };

    const handleDeleteUser = (userId) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter((item) => item.id !== userId);
        setListUser(listUserClone);
    };
    
    console.log("call me render");

    useEffect(() => {
        setTimeout(() => {
            document.title = "Le Thanh Sang";
        },3000)
        console.log("call me useeffect");
    });
    return (
        <>
            <AddUserInfor handleAddNewUser={handleAddNewUser} />
            <br></br>
            <DisplayInfor
                listUser={listUser}
                handleDeleteUser={handleDeleteUser}
            />
        </>
    );
};

export default MyComponent;
