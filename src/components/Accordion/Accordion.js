import React, { useState } from "react"
import PropTypes from "prop-types"
import "./Accordion.css"


const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section className="accordion">
            <button className="accordion__title" onClick={toggle}>
                <h4>{title}&nbsp;&nbsp;{isOpen? "-" : "+"}</h4>
            </button>
            {isOpen && <p>{content}</p>}
        </section>
    )
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
  
export default Accordion