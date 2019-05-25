import React, { Component } from 'react'
import createDva from '../../command/createDva';
import { Button,Row,Col } from 'antd';
// import {domainApp} from "@/env";
import api from "../../command/api";
// import GlobalBorder from '../../components/GlobalBorder';
// import LoadingComponentS from "../../components/LoadComponentS";
// import QRCode  from 'qrcode.react' ;
import styles from './codeList.less';

//  @createDva(['welcomCodeList'])
 export default class welcomCodeList extends Component {
 
    constructor(){
        super();
        this.state = {
            type: 0
        };
    }
    componentDidMount(){
        api.send(this,[
            api.FarmlandController_TRACECOMPANY('welcomCodeList')
            .getBaseAndMassifUsingPOST()({
                tranData:(retData) => {
                    return {codeList:retData.data}
                }
            })
        ])
    }
    onCodeDown = ( record ,id,labelName) =>{
        //  url = { `http://supe.${domainApp}:7008/?type=0&code=base&id=${codeRecord.id||0}`}
        let canvas = document.getElementById(id);
        let a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        let pngnName = '';
        pngnName = `${labelName}.png`
		a.download = pngnName;
        a.click() 
    }
    renderCodeEve  = (item,i,pObj) =>{
        let type =0,labelName = 0;
        if(pObj){
            type =1,
            labelName = `${pObj.label}/${item.label}`;
        }else{
            type =0,
            labelName = item.label;
        }
        const  url =  ''
        return(
            <div style = {{textAlign:'center'}}>
                <div 
                    className = {styles.printCode} 
                   
                >
                    {/* <QRCode
                        id={`baseCodeWindow${i}`}
                        size = {134}
                        value={url}
                    /> */}
                    <p>{labelName ||""}</p>
                </div>
                
                <Button 
                    type = {'primary'} 
                    size = {'small'}
                    onClick = {()=>this.onCodeDown(item,`baseCodeWindow${i}`,labelName)}
                >
                下载二维码
                </Button>
            </div>
        )
    }
    renderCodeBlock = (item,i,pItem,index) =>{
        return(
            <Col key = {index} span = {4} style ={{minWidth:150}}>
                {this.renderCodeEve(item,i,pItem)}
            </Col>
        )
    }
    renderCodeGroup = ( item,index ) => {
        return(
            <div key = {index} className ={styles.baseCodeBox} >
                <div  className ={styles.baseCode} >
                    {this.renderCodeEve(item,index)}
                </div>
                <Row className ={styles.baseCodeBlock} >
                    {item.children.map((x,i) => {
                        return this.renderCodeBlock(x,`${index}_${i}`,item,i)
                    })}
                </Row>
            </div>
        )
    }
     renderComponent = () => {
        let  { codeList = [] } = this.props;
        return (
            <div className = {styles.boxContent1}>
                {
                    codeList.map( ( x,i ) =>{
                        return this.renderCodeGroup(x,i)
                    })
                }
            </div>
        );
    };
    render() {
        const { isShow = false} = this.props;
        return (
            <div   className = {styles.mainBox}>
                <div className = {styles.title}>
                    基地地块-二维码下载专区
                </div>
                <div className = {styles.boxContent}> 
                   
                    {/* <LoadingComponentS 
                        isShow={isShow}
                        renderComponent={this.renderComponent}
                    /> */}
                    
                </div>     
            </div>
        )
    }
 }
 