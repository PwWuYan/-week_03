import React, { Component } from 'react';
import { connect } from 'react-redux'
class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false,
            list: [{
                tit: '常吃',
                type: 1,
                id: 0
            }, {
                tit: '偶尔',
                type: 2,
                id: 1
            }, {
                tit: '不吃',
                type: 3,
                id: 2
            }],
            cont: null
        }
    }
    handleClick() {
        let { flag } = this.state;
        this.setState({
            flag: !flag
        })
    }
    handle(item,id,type) {
        let { data,list,curIndex } = this.props;
        let newList=list.map(el=>{
            if(el.id===id){
                el.type=type
            }
            return el
        })
        this.props.dispatch({
            type:'GET_CLASSLIST',
            data:newList
        })

        let newData = data.map((item,index)=>{
            if(index===curIndex){
                item.chid=newList
            }
            return item
        })
        this.props.dispatch({
            type:'GET_LIST',
            data:newData
        })
        this.setState({
            cont: item.tit,
            flag: false
        })
        localStorage.setItem('list', JSON.stringify(newData))
    }
    render() {
        let { item } = this.props
        let { flag, list, cont } = this.state;
        let newList = list.map((el, index) => {
            return <span onClick={this.handle.bind(this,el,item.id,el.type)} key={index}>{el.tit}</span>
        })
        return (
            <div className='item'>
                <dl>
                    <dt>
                        <img src={item.img} alt="" />
                    </dt>
                    <dd>
                        <p>{item.title}</p>
                        <span>{item.energy}千卡/100克</span>
                    </dd>
                </dl>
                <ul className='list' style={{ display: flag ? 'block' : 'none' }}>
                    {newList}
                </ul>
                <span className='xing' onClick={this.handleClick.bind(this)}>☆</span>
                <span className='cont'>{cont}</span>
            </div>
        );
    }
}
function state(state) {
    return {
        arr: state.arr,
        data: state.data,
        list: state.list,
        curIndex:state.index
    }
}
export default connect(state)(Item);