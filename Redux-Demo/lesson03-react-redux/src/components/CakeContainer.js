import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'


const CakeContainer = (props) => {
    console.log(props)
    
  return (
    <div>
      <h2>Number of Cake - {props.numOfCakes} </h2>
      <button onClick={props.buyCake} >Buy Cake</button>
    </div>
  )
}
const mapStateProps = (state) => {
    console.log('state',state)
    return{
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(
    mapStateProps,mapDispatchToProps)
    (CakeContainer)
