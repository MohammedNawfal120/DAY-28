import React from 'react'
function UserCard(props) {
    return (
        <div className="user-card">
            <h3>Name: {props.name}</h3>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default UserCard;
