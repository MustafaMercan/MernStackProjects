import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux';

const IceCreamContainer = () => {

    const {numOfIceCream} = useSelector(state => state.iceCream);
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num Of Ice Cream - {numOfIceCream} </h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
      
    </div>
  )
}

export default IceCreamContainer
