import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Item from '../../components/Item'
import '../../asset/fonts/iconfont.css'
class index extends Component {
    componentDidMount(){
        let {data,curIndex}= this.props
        this.props.dispatch({
            type:'GET_CLASSLIST',
            data:data[curIndex].chid
        })
    }
    handleJump(){
        this.props.history.go(-1)
    }
    render() {
        let {classList} = this.props;
        let newList = classList.map((item,index)=>{
            return <Item key={index} item={item}></Item>
        })
        return (
            <div className='classify'>
                <div className="head">
                   <div className='back' onClick={this.handleJump.bind(this)}>&lt;</div>
                   <div className='find'>分类查询</div>
                   <div className='font'><i className='iconfont icon-share'></i></div>
                </div>
                {newList}
            </div>
        );
    }
}
function state(state){
  return {
    data:state.data,
    classList:state.list,
    curIndex:state.index
    
  }
}
export default connect(state)(withRouter(index));