import React from 'react'
import CategoryItem from './CategoryItem.component';
import '../categories.styles.scss'

const Categories = ({categories}) => {
  return (
    <div className='categories-container'>
      {categories.map((category )  => {
        return (
          <CategoryItem Category = {category} key={category.id}/>
        );
      })}
    </div>
  )
}

export default Categories
