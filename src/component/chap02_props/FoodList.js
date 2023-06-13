import React from 'react';
import FoodItem from './FoodItem';
import SayHEllo from '../../SayHello';

const FoodList = () => {
    /* fetch를 통해 서버에서 음식 목록을 json으로 받아왔을 때 */
    const food = { //프로퍼티는 id랑 foodList 두개.
        id: 327432,
        foodList : [
            {
                fName: '짜장면',
                price: 6000,
                id: 'chinese'
            },
            {
                fName: '해물파전',
                price: 12000,
                id: 'korean'
            },
            {
                fName: '가츠동',
                price: 8000,
                id: 'japanese'
            },
            {
                fName: '김치찌개',
                price: 5000,
                id: 'korean'
            },
            {
                fName: '탕수육',
                price: 20000,
                id: 'chinese'
            }
    
        ]
      }


  return (

    <ul>
        {/*<FoodItem foodName='자장면' price={6000} foodId='chinese' />
        <FoodItem foodName='해물파전' price={12000} foodId='korean' />
        <FoodItem foodName='가츠동' price={8000} foodId='japanese' />*/}

        <SayHEllo>
            <a href='https://www.naver.com'>네이버 링크</a>
        </SayHEllo>    
        <SayHEllo>
            <a href='https://www.google.com'>구글 링크</a>
        </SayHEllo>    

        {
            food.foodList.map(f => <FoodItem foodName={f.fName} price={f.price} foodId={f.id} />)
        }
    </ul>

    )



}

export default FoodList;