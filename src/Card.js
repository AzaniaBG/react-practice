import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
    <div className="Card">  
        <h3 title="title">{props.title}</h3>
        <p content="content">{props.content}</p>
    </div>
    )
}