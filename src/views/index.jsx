import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RouteView from '../router/RouteView';
import {connect} from 'react-redux'
class index extends Component {
    componentDidMount(){
        this.$http.get('/list').then(res=>{
            this.props.dispatch({
                type:"GET_LIST",
                data:JSON.parse(localStorage.getItem('list'))||res.data.data
            })
        })
    }
    render() {
        return (
            <div className='index'>
                <div className="main">
                    <RouteView routes={this.props.children}></RouteView>
                </div>
                <div className="foot">
                    <NavLink to='/index/home'>首页</NavLink>
                    <NavLink to='/index/rank'>排行</NavLink>
                    <NavLink to='/index/my'>我的</NavLink>
                </div>
            </div>
        );
    }
}
function state(){
    return {}
}
export default connect(state)(index);