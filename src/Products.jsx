import React from 'react'
import "./products.css"
import { Link } from 'react-router-dom'

const Products = ({ data }) => {
  return (
    <>
      <div className='products'>
        {/* <Link to={`/product/`}> */}
          {data.map(data =>
            <div className='card'>
              <div className="imgDiv"><img className='cardImg' src={data.recipe.image} alt="Card image" /></div>
              <h4 className='cardTitle'>{(data.recipe.label).substring(0, 60)}</h4>
              <p class="cardText">Calories : {Math.round(data.recipe.calories)}</p>
              <a href="#" class="cardLink">
                <button className='cardButton'>Open</button>
              </a>
            </div>
          )}
        {/* </Link> */}
      </div>
    </>
  )
}

export default Products