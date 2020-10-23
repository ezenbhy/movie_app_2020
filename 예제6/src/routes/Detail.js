import React from 'react';
//Detail컴포넌트가 라우팅되면 자동으로 route props가 넘어옴.

function Detail(props) {
    console.log(props);
    return <span>hello</span>;
}

export default Detail;