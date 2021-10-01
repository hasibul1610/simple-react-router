import React from 'react';

const Meal = (props) => {
    const { idMeal, strMeal } = props.meal;

    const styleMeal = {
        'border': '3px solid green',
        'borderRadius': '15px'
    }

    return (
        <div style={styleMeal}>
            <h3>ID:{idMeal}</h3>
            <h2>Name: {strMeal}</h2>

        </div>
    );
};

export default Meal;