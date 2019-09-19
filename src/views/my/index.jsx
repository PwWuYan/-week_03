import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class index extends Component {
    render() {
        return (
            <div>
                <NavLink to='/save'>我的收藏</NavLink>
            </div>
        );
    }
}

export default index;