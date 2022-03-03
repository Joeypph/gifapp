import React, { useState } from 'react'
import PropTypes from 'prop-types';

const  AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('' );
    const  handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length > 2){
            console.log(`Se hizo el sumbit con: ${inputValue}`);
            setCategory( value => [inputValue,...value])
            setInputValue('')
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    </div>
  )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
export default AddCategory