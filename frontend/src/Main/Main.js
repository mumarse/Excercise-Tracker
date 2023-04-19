import React, { useState } from 'react'
import './style.css'
import SideBar from '../Sidebar/SideBar'
import Form from '../Excescise/Form';

function Main() {
    const [exercises, setExercises] = useState([]);

    function addExercise(exercises) {
        setExercises((prevExercises) => {
            return [...prevExercises, exercises];
        });
    }

    return (
        <div>
            <div><SideBar /></div>
            <div>
                <Form onSubmit={addExercise} />
            </div >
        </div>

    )
}

export default Main