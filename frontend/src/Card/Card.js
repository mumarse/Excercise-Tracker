import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./style.css";

function Card() {

    const [cards, setCards] = useState([])

    const handleDelete = async (id) => {
        axios.delete(`http://localhost:4000/posts/delete/${id}`)
            .then(res => console.log(res.data.data.posts))
    };

    useEffect(() => {
        axios.get("http://localhost:4000/posts/get")
            .then(res => setCards(res.data.data.posts))
    }, [])

    return (
        <>
            <div className="exercise-list">
                <h2>Exercise you have done</h2>
                <ul>
                    {cards?.map((exercise, index) => (
                        <li key={index}>
                            <h3>Name:{exercise.name}</h3>
                            <p>Exercise Name:{exercise.exerciseName}</p>
                            <p>Duration:{exercise.duration}</p>
                            <p>Date:{exercise.date}</p>
                            <p>Description:{exercise.description}</p>
                            <div className="exercise-buttons">
                                <button onClick={() => handleDelete(exercise._id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

}

export default Card