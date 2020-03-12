import React from 'react';
import { Table } from 'antd';
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
          <Table columns={this.columns} dataSource={this.state.data} />
      </div>
    );
  }
}
  
  export default Rule;