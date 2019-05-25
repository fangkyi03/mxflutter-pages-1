import React, { Component } from 'react'
import LableClick from '../lableClick'
import api from '../../../command/api';
import createDva from "../../../command/createDva";
import { normalize } from 'path';
// import { redBright } from 'ansi-colors';

// @createDva(["welcomThisWay"])
export default class LabelFather extends Component {

    state = {
        labelModal:false,
        newData:null,
        color:[
            '#10A6E1',
            '#E3553D',
            '#45B85D'
        ],
        addLablel:false,
    }


    componentDidMount() {
        api.send(this, 
            [
                // api.MblCompanyLabelsController_UPMSCOMPANY('welcomThisWay').findCompanyLabelUsingPOST()(
                //     {
                //         tranData:({data})=>{
                //             this.setState({
                //                 newData:data
                //             })
                //             // return {newData:data}
                //         }
                //     }
                // ),
                api.MarkController_ADMIN ('welcomThisWay').getTagUsingPOST()(
                    {
                        tranData:({data})=>{
                            
                            this.setState({
                                newData:data
                            })
                        }
                    }
                )
            ]
        );
    }

    renderLabels = () => {
        if(!this.state.newData || !this.state.newData[0]){
            return null
        }
        return this.state.newData.map( (item,index) => {
            return (
                <span 
                    key = {index} 
                    style = {{
                                display:'inline-block',
                                marginRight:'10px',
                                marginBottom:'5px',
                                backgroundColor:this.state.color[index%3],
                                color:'#fff',
                                fontSize: '12px',
                                fontWeight:'normal',
                                padding: '2px 14px 3px',
                                borderRadius: '15px',
                                lineHeight:'initial'
                                // color:`rgb(${this.state.color[index%1]},${this.state.color[index%2]},${this.state.color[index%3]})`
                            }}
                >
                    {item.tagname}
                </span>
            )
        })
    }

    labelModalClick = () => {this.setState({labelModal:true})}

    refresh = () => {
        api.send(this, 
            [
                // api.MblCompanyLabelsController_UPMSCOMPANY('welcomThisWay').findCompanyLabelUsingPOST()(
                //     {
                //         tranData:({data})=>{
                //             this.setState({
                //                 newData:data
                //             })
                //             // return {newData:data}
                //         }
                //     }
                // ),
                api.MarkController_ADMIN ('welcomThisWay').getTagUsingPOST()(
                    {
                        tranData:({data})=>{
                            this.setState({
                                newData:data
                            })
                        }
                    }
                )  
            ]
        );
    }


  render() {
    return (
      <div className = 'label'>
        <span  style = {{display:'flex',alignItems:'center',flexWrap:'wrap'}}>
            {this.renderLabels()}
            <span className = {'labelClick'} onClick = {this.labelModalClick}>打标签</span>
            <img 
                style = {{marginLeft:'5px',cursor:'pointer',width:'16px',height:'16px'}} 
                src = {require('../../../images/welcom/icon/ic_copyreader.png')} 
                onClick = {this.labelModalClick}
                alt = '' 
            />
        </span>
       
        <LableClick 
            show = {this.state.labelModal} 
            close = {()=>{this.setState({labelModal:false})}}
            refresh = {this.refresh}

            // changeLabels = {this.changeLabels}
        />
    </div>
    )
  }
}
