import React from 'react';

function Person(props) {
    const { id, name, designation, imgUrl } = props.person;
    return (
        <div className="person">
            <img src={imgUrl} alt={id} />
            <div>
                <h4>{name}</h4>
                <h4>{designation}</h4>
                {props.children}
            </div>
        </div>
    )
}

export default Person
