import React, { Component } from 'react';
import {connect} from 'react-redux'
class index extends Component {
    handleJumpClassify(id,index){
        this.props.dispatch({
            type:'SET_INDEX',
            data:index
        })
        this.props.history.push('/classify/'+id)
    }
    render() {
        let {data} = this.props
        console.log(data)
        let list = data.map((item,index)=>{
            return <dl key={index} onClick={this.handleJumpClassify.bind(this,item.id,index)}>
                <dt><img src="http://img1.imgtn.bdimg.com/it/u=2807759535,2554808012&fm=26&gp=0.jpg" alt=""/></dt>
                <dd>{item.title}</dd>
            </dl>
        }
        )
        return (
            <div className='home'>
                <div className="head">
                    <p>薄荷健康出品</p>
                    <input type="text" name="" id="" placeholder="请输入食品名称"/>
                </div>
                <div className="cont">
                {list}
                </div>
              
            </div>
        );
    }
}
function state(state){
    return {
        data:state.data,
        curIndex:state.index
    }
}
export default connect(state)(index);