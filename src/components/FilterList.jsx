import React from 'react'
import '../styles/filterList.css'

const FilterList = ({nameLocation,setInputSearch, setNameLocation}) => {
    
    const handleClick = id => {
      setInputSearch(id)
      setNameLocation();
    }

    return (
    <ul className='suggestion__list'>
        {
            nameLocation?.map(result => (
                <li 
                    onClick={() => handleClick(result.id)} key={result.id}
                    className = 'suggestion__item'>
                {result.name}
                </li>
            ))   
        } 
    </ul>
    )
}

export default FilterList