import React, { Component } from 'react';
import Item from '../../components/Item';
import {connect} from 'react-redux'
class index extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[
                {
                    tit:'常吃',
                    type:1

                },{
                    tit:'偶尔',
                    type:2

                },{
                    tit:'不吃',
                    type:3
                } 
            ],
            newData:[]
        }
    }
    handle(type){
        let {data} = this.props;
        let newData=data.map(item=>{
            return item.chid.map((el,ind)=>{
                if(el.type==type){
                    return <Item key={ind} item={el}></Item>
                }
            })
        })
        this.setState({
            newData
        })
    }
    render() {
        let {list,newData} = this.state;
        let newList = list.map((item,index)=>{
            return <div key={index} onClick={this.handle.bind(this,item.type)}>{item.tit}</div>
        })
        return (
            <div className='save'>
                <div className="head">
                    {newList}
                </div>
               {newData}
            </div>
        );
    }
}
function state(state){
    return {
        data:state.data
    }
}
export default connect(state)(index);