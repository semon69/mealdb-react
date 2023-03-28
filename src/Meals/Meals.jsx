import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {

        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div>
            <h1 className='text-center'>Welcome To Meal DB Database</h1>
            <div className='grid grid-cols-3 gap-7 my-10 mx-10'>
                {
                    meals.map(meal => <Meal
                        meal={meal}
                        key={meal.idMeal}
                    ></Meal>)
                }
            </div>

        </div>
    );
};

export default Meals;