import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div>
            <h3>*** 메인화면 ***</h3>
            <hr/>
            <p><Link to='/user/writeForm'>입력</Link></p>
            <p><Link to='/user/list'>목록</Link></p>
        </div>
    );
};

export default Index;