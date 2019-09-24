import React, { Component } from 'react'
import FormHeader from '../../components/FormHeader'

export default class Index extends Component {
  
  constructor(props) {
    super(props);
    this.formData = [
      {
        type:'input',
        name:'测试'
      }
    ]
  }
  
  render() {
    return (
      <div>
      123123
        <FormHeader data={this.formData}/>
      </div>
    )
  }
}
