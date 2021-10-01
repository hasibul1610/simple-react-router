import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.user;
    const history = useHistory();

    const friendContainer = {
        'border': '2px solid goldenrod',
        'borderRadius': '10px',
        'padding': '10px'
    }

    const handleFriendClick = () => {
        history.push(`/friend/${id}`)
    }


    const url = `/friend/${id}`;
    return (
        <div style={friendContainer}>
            <h3>Hello, I am {name} {id}</h3>
            <h5>Call me at : {phone}</h5>
            <p>Visit me : {website}</p>
            <p><small>I live in {address.city}</small></p>
            <Link to={url}>Visit me</Link>
            <br />
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>

        </div>
    );
};

export default Friend;