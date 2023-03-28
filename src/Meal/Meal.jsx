import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCartPlus, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
    const btnClick = props.btnClick
    const {strArea, strMealThumb,strMeal, } = props.meal;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl text-white">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>{strArea}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => btnClick(strMeal)} className="btn btn-primary">Add Name  <FontAwesomeIcon icon={faCartPlus} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;