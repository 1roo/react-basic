import React from "react";

//컴포넌트(화면에 한 부분을 담당해 주는 것. 화면을 구성하는 것.)
//컴포넌트 파일은 대문자로 작성하는 것이 관례.
//컴포넌트 함수는 반드시 하나의 태그만 가능.
function SayHello() {
    return (
        <div>
            <p>안녕</p>
            <span>메롱</span>
        </div>
    );
}

export default SayHello;