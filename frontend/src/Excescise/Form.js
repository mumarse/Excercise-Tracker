import React, { useState } from 'react'
import './style.css'
import axios from "axios";

function Form() {

    const [data, setData] = useState({
        name: '',
        excerciseName: '',
        duration: '',
        date: '',
        descripition: ''
    })

    const InputEvent = ({ target: { name, value } }) => {
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const formSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:4000/posts/save", data)
            .then((res) => {
                console.log(res);
                alert("Form submitted successfully.");
            })
            .catch((error) => {
                console.log(error);
                alert("Error submitting form. Please try again later.");
            })
            .finally(() => {
                setData({
                    name: '',
                    excerciseName: '',
                    duration: '',
                    date: '',
                    descripition: ''
                });
            });
    };

    return (
        <div className="info">
            <div className="exercise-form-container">
                <div>
                    <form onSubmit={formSubmit}>

                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={data.name} autoComplete="off" required
                            onChange={InputEvent}
                        />

                        <label htmlFor="excerciseName">Exercise Name:</label>
                        <input type="text" id="excerciseName" name="excerciseName" value={data.excerciseName} autoComplete="off" required
                            onChange={InputEvent}
                        />

                        <label htmlFor="duration">Duration:</label>
                        <input type="text" id="duration" name="duration" value={data.duration} autoComplete="off" required
                            onChange={InputEvent}
                        />

                        <label htmlFor="date">Date:</label>
                        <input type="text" id="date" name="date" value={data.date} autoComplete="off" required
                            onChange={InputEvent}
                        />

                        <label htmlFor="descripition">Description:</label>
                        <textarea id="descripition" name="descripition" value={data.descripition} required
                            onChange={InputEvent}
                        />

                        <button type="submit">Add Exercise</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Form