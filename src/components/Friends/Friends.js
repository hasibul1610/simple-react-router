import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const friendsContainer = {
        'display': 'grid',
        'gridTemplateColumns': 'repeat(3,1fr)',
        'gridGap': '15px'
    }
    return (
        <div>
            <h2>this is friend page</h2>
            <h3>i have {users.length} friends total</h3>
            <div style={friendsContainer}>
                {
                    users.map(user => <Friend
                        key={user.id}
                        user={user}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;