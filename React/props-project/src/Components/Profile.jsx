import React from "react"

const Profile = (props) => {
    return (
        <div>
            <h1>Hi My name is {props.name}</h1>
            <h2>I am {props.age} years old</h2>
            <h3>I own {props.company}</h3>
            <img src={props.img} style={{ width: 400 }}></img>
        </div>
    )
};

export default Profile;
