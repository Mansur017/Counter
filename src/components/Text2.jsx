import React from 'react'
import { useDispatch, useSelector } from 'react-redux'




export default function Text2() {

    const amount = useSelector(state => state)


    const dispatch = useDispatch()

    const hanlerChange =() =>{
      dispatch({
        type: "change"
      })
    }

  

    return(
    <div>
        {amount}
        <button onClick={hanlerChange} >+</button>
    </div>
  )
}
