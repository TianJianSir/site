import React from 'react';
import { Table, message, Progress } from 'antd';
import axios from 'axios';
import './style.css';

class Rule extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }

    this.columns = [
      {
        title: '项目名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '版本',
        dataIndex: 'child',
        key: 'child',
        render: (child,r,index) => child.map((item)=><span key={item} onClick={()=>{this.choose(index,item)}}>{item}</span>),
      },
    ];
  }

  choose(index,version){
    const {data} = this.state
    const params = {
      name: data[index].name,
      version
    }

    axios.post('http://tianjian.work/api/list/setVersion',params).then((res)=>{
      if(res.data.code === '0'){
        message.success('设置版本成功，请刷新界面')
      }else{
        message.error(res.data.message)
      }
    })
  }

  componentDidMount(){
    axios.get('http://tianjian.work/api/list').then((res)=>{
      this.setState({
        data: res.data
      })
    })
  }
  
  render(){
    return (
      <div className="rule_container">
          <header>
            <Progress type="circle" percent={10} />
          </header>
          <Table columns={this.columns} dataSource={this.state.data} />
      </div>
    );
  }
}
  
export default Rule;