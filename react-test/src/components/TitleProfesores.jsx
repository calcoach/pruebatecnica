import React from 'react';
import "./styles/TitleProfesores.css"
import PropTypes from 'prop-types'

const Title = ({text = "Mi titulo"}) => {
    return (
        <h1 className='title'>{text}</h1>
    )
}

Title.propTypes = {

    title: PropTypes.string
    //title: PropTypes.string.isRequired
}

Title.defaultProps = {

    text: "Mi titulo por defecto"
}

export default Title;