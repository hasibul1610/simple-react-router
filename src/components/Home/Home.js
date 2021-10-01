import React, { useEffect } from 'react';
import { useState } from 'react';
import Meal from '../Meal/Meal';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    // console.log(searchText)
    const [meals, setMeals] = useState([]);


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const handleSearch = e => {
        const searchValue = e.target.value;
        setSearchText(searchValue);
    }
    const styleMeals = {
        'display': 'grid',
        'gridTemplateColumns': 'repeat(3, 1fr)'
    }


    return (
        <div>
            <h2>this is from home component</h2>
            <h2>Here we will show the meald db data</h2>
            <input type="text" placeholder="search by name" onChange={handleSearch} />
            <br /><br />

            <h2>Total number of meals {meals.length}</h2>

            <div style={styleMeals}>
                {
                    meals.map(meal => <Meal
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Home;