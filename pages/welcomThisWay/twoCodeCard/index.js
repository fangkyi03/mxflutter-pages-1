import React, { Component } from './node_modules/react'


import { Button } from './node_modules/antd'
// import {domainApp} from "@/env";
// import QRCode  from 'qrcode.react'
import './index.less'

export default class TwoCodeCard extends Component {

    QRcodeDown = (id,title) => {//二维码转换下载图片
        let canvas = document.getElementById(id);
        let a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
		a.download = title;
        a.click()
    }

    renderCodeDownLoad = (data, index, type) => {//渲染二维码下载主视图
        // console.log('data', data, 'index', index, 'type', type)
        if (data.type !== type) {
            return null
        }

        if(data.isNull){
            return (
                    <div key={index} className={'codeComponents'}>
                        <div className={'codeComponentsBox'}>
                            <img src = {require('../../../images/nopic.png')} title = {'暂无图片'} />       
                            <div className={'codeComponentsTitle'}>
                               {data.title}
                            </div>
                        </div>
        
                        <Button 
                            type='primary' 
                            size = {'small'}
                            disabled
                        >
                            下载二维码
                        </Button>
                    </div>
                )
        }
        // title:'企业黄页',
        // codeSrc:require('../../images/welcom/PQKJ.png'),
        // downloadUrl:'https://pan.baidu.com/s/1OEa6R5xR1uqVZddIpClx5g',
        return (
            <div key={index} className={'codeComponents'}>
                <div className={'codeComponentsBox'}>
                    {/* {
                        <QRCode
                            id={data.id}
                            size = {100}
                            value={data.codeSrc}
                        />
                    } */}
                    <div className={'codeComponentsTitle'}>
                        {data.title}
                    </div>
                </div>

                <Button 
                    type='primary' 
                    size = {'small'}
                    onClick = {
                                () => {
                                    this.QRcodeDown(data.id,data.title)
                                }
                            }
                >
                    下载二维码
                </Button>
            </div>
        )
    }

    renderCodeBody = (data) => {//渲染二维码下载主视图父级视图
        return (
            <div className={'codeMain'}>
                <div className={'codeMainLeft codeMainCommon'}>
                    {
                        data.map((item, index) => {
                            return this.renderCodeDownLoad(item, index, 0)
                        })
                    }
                </div>
                <div className={'codeMainRight codeMainCommon'}>
                    {
                        data.map((item, index) => {
                            return this.renderCodeDownLoad(item, index, 1)
                        })
                    }
                </div>

            </div>
        )
    }
    
    

    renderCodeHeader = () => {//渲染下载视图头部组件
        return (
            <div className={'codeHeader'}>
                <div className={'codeTitle'}>
                    二维码专区
                </div>
                <div className={'codeMore'} onClick = {this.props.onNotificationDown} style = {{cursor:'pointer'}}>
                    更多>>
                </div>
            </div>
        )
    }

    codeCheck = () => {//检测基地二维码数组是否为空值,加载二维码
        let baseTwocode = this.props.baseTwocode
        if(baseTwocode.length > 5){
            baseTwocode = baseTwocode.slice(0,5)
        }
        let arr = []
        baseTwocode.forEach(item => {
            // arr.push({
            //             type:1,
            //             title:item.title,
            //             codeSrc:`http://supe.${domainApp}:7008/?type=0&code=base&id=${item.codeSrc||0}`,
            //             downloadUrl:`http://supe.${domainApp}:7008/?type=0&code=base&id=${item.codeSrc||0}`,
            //         })
        });
        const pageTwocode = this.props.pageTwocode
        let data = arr.concat(pageTwocode)
        if(data){
            data = data.map((item,index) => {
                item.id = 'baseCodeWindow' + index
                return item
            })
        }
        // console.log('data',data)
        return data
    }

    currentNow = () => {//现为空值触发事件
        return (
            <div style = {{
                            position: 'relative',
                            top:'95px'
                        }}
            >
                暂无数据
            </div>
        )
    }

    render() {
        const data = this.codeCheck()

        return (
            <div className={'twoCodeCard'}>
                {this.renderCodeHeader()}
                {
                    !data.length ? this.currentNow() : this.renderCodeBody(data)
                }
            </div>
        )
    }
}
