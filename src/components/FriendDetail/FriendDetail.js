import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const history = useHistory();

    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    const handleClick = () => {
        history.push('/friends')
    }
    return (
        <div>
            <h3>friend detail of number {friendId}</h3>
            <h1>Name: {friend.name}</h1>
            <p>Phone: {friend.phone}</p>
            <p>works at: {friend.company?.name}</p>
            <button onClick={handleClick}>See All Friends</button>

        </div>
    );
};

export default FriendDetail;