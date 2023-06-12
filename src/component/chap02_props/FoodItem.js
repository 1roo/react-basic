import React from 'react'

const FoodItem = ({foodId: id, foodName: fName, price}) => { //리스트럭쳐링(구조분해할당)
  return (
    <li id={id}>{fName} ({price}원)</li>
  )
}
;
export default FoodItem;