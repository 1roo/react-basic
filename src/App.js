import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello';
import Hello from './Hello';
import SubmitEvent from './component/chap01_event/SubmitEvent';
import FoodList from './component/chap02_props/FoodList';

function App() {
  // return (
    //컴포넌트 함수는 반드시 하나의 태그만 리턴 가능. -> 그래서 div로 묶어줬다
    // <div>
    //   <SayHello />
    //   <Hello />
    // </div>
    
    //프래그먼트 <>
    //이러면 개발자도구에 쓸데없는 제일 밖의 div가 생성되지 않는다.

   
    /* 리액트에서는 하나의 컴포넌트가 여러개의 엘리먼트를 반환할 수 있다. 
       JSX를 작성할 때 return문 안에 반드시 하나의 최상위 태그가 있어야 한다.
       Fragment  <>를 사용하면 의미없는 태그를 줄여서 가독성을 좋게 한다. */
    

       
  const looping = () => {
      const helloList = [];
      for(let i=0; i<5; i++) {
        helloList.push(<SayHello />);
      }
      return helloList;
  }

  /*jsx 문법에서는 스크립트를 코드로 직접 사용이 불가능.
    {} 안에서 함수의 호출문이나 변수참조는 가능*/
  return (
    <>
      <FoodList />
    </>
  );
}


export default App;
