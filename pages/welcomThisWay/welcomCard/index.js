import React, { Component } from 'react'
import { Row, Col, Button, message, Steps ,} from "antd";
import SwiperWelcom from '../swiperWelcom'
import UploadImages from '../uploadImages'
import moment from 'moment'
// import LableClick from '../lableClick'
import LabelFather from '../labelFather'
import './index.less'
// import api from '../../../command/api';
// import createDva from "../../../command/createDva";

// @createDva(["welcomThisWay"])
const Step = Steps.Step;


export default class WelcomCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Steps: 0,
            top: 0,
            select: 0,
            selectArr: [0, 0],
            labels: [],
            // labelModal:false,
            isImg: this.props.data.pageImg ? this.props.data.pageImg.map((item, index) => {
                return index ? false : true
            }) : null
        }
    }

    // componentDidMount() {
    //     api.send(this, 
    //         [
    //             api.MblCompanyLabelsController_UPMSCOMPANY('welcomThisWay').labelListUsingPOST()(
    //                 {
    //                     tranData:({data})=>{
    //                         return {newData:data}
    //                     }
    //                 }
    //             )  
    //         ]
    //     );
    // }


    renderTitle = (data) => {//渲染公用卡头
        return (
            <div className='commonTitle'>
                {data.icon ? <img 
                                style = {{
                                        width:'24px',
                                        height:'24px',
                                        marginRight:'5px',
                                        position: 'relative',
                                        top: '-2px'
                                        }} 
                                src = {data.icon} 
                                alt = {data.bigTitle} 
                            /> : null}
                    
                {data.bigTitle}
                <span>{data.smallTitle}</span>
            </div>
        )
    }

    renderDownload = (data) => {//渲染下载卡片
        return (
            <div className={'download card'}>
                {this.renderTitle(data)}
                <div className={'downloadMain'}>
                    {
                        data.address.map((item, index) => {
                            return (
                                <a href={item.src} target='_blank' className={'downloadList'} key={index}>
                                    <div className={'left'}>
                                        {item.title}
                                    </div>
                                    <div className='right'>
                                        <img style = {{width:'60px'}} src={item.icon} alt={item.title} />
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    renderImg = (data) => {//渲染公用图片组件
        return data.map((item, index) => {
            return (<div className={'rightImage'} key={index}>
                <img src={item.src} alt={item.title} />
                <div className={'imgTitle'}>
                    {
                        item.icon ? <img src={item.icon} alt={item.title} /> : null
                    }
                    <span>
                        {item.title}
                    </span>
                </div>
            </div>)
        })
    }

    renderTwoCode = (data) => {//渲染二维码卡片
        return (
            <div className={'twoCode card'}>
                {this.renderTitle(data)}
                <div className={'twoCodeMain'}>
                    {this.renderImg(data.img)}
                </div>
            </div>
        )
    }

    renderPhone = (data) => {//渲染联系方式卡片
        return (
            <div className='phone card'>
                {this.renderTitle(data)}
                <div className={'phoneMain'}>
                    <div className={'phoneLeft'}>
                        {data.concact.map((item, index) => {
                            return (
                                <div className={'main'} key={index}>
                                    <div className={'left'}>
                                        <img src={item.icon} alt={item.title} />
                                    </div>
                                    <div className={'right'}>
                                        <span>{item.title}</span>
                                        {item.func.map((sItem, sIndex) => {
                                            return <p key={sIndex}>
                                                {sItem}
                                            </p>
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={'phoneRight'}>
                        {this.renderImg(data.img)}
                    </div>
                </div>
            </div>
        )
    }

    getHelp = (item, index) => {
        item.select = !item.select
        // console.log(Swiper)
        this.setState({
            void: '',
            top: 0,
            select: 0,
            selectArr: [0, 0],
            Steps: 0,
        })

    }

    backPage = (index, item) => {
        if (this.state.selectArr[index] - 1 >= 0) {
            this.state.selectArr[index] = this.state.selectArr[index] - 1
            this.setState({
                select: index,
                selectArr: this.state.selectArr,
                Steps: this.state.Steps - 1
            })
        } else {
            message.error('已经到首页')
        }
    }

    goPage = (index, item) => {
        if (this.state.selectArr[index] + 1 == item.srcArr.length) {
            message.error('已经到最后一页')
        } else {
            this.state.selectArr[index] = this.state.selectArr[index] + 1
            this.setState({
                select: index,
                selectArr: this.state.selectArr,
                Steps: this.state.Steps + 1
            })
        }
    }

    renderItemTitle = (title) => {
        return (
            <div className='title'>
                {title}
            </div>
        )
    }

    fontReg = (str) => {
        let reg = /\([^\)]*\)/
        let reg2 = /[^\()]*/
        let yy = str.match(reg)
        if (str.match(reg)) {
            // console.log([str.match(reg2)[0], str.match(reg)[0]])
            return [str.match(reg2), str.match(reg)]
        } else {
            return [str.match(reg2)]
        }

    }


    renderHelp = (data, classNamed) => { 
        const current = this.state.Steps 
        // console.log('---data[current].introduce[0].img--',data[current].introduce[0].img)
        return (
            <div className='imageData' style={{ margin: '15px 0' }}>
                <div className='tips'>
                    入驻后，苦于无从下手怎么办？跟随{data.length == 6 ? '全程' : '主体'}溯源打印指引，轻松搞定
                </div>
                <div className={'imageDataMain'}>
                    <div className={'imageDataStep'}>
                        <Steps current={current}>
                            {data.map((item) => <Step key={item.title} title={item.title} />)}
                        </Steps>
                    </div>

                    <div className='imageDataContent'>
                        <div className='contentLeft'>
                            {/* {console.log('data[current].introduce',data[current].introduce)} */}
                            {
                                data[current].introduce.map((item, index) => {
                                    return (
                                        <div key={index} className={'contentLeftMain'}>
                                        {/* {console.log('item',item)} */}
                                            {item.title ? this.renderItemTitle(item.title) : null}
                                            {item.explain.map((item, index) => {
                                                return (
                                                    <div key={index} className={'contentLeftSteps'}>
                                                        <div className='contentLeftCircle'>
                                                            {index + 1}
                                                        </div>
                                                        <div className={'contentLeftFont'}>
                                                            {
                                                                this.fontReg(item).map((item, index) => {
                                                                    return <span key={index}>{item}</span>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='contentRight'>  
                            {
                                data[current].introduce[0].img ? <SwiperWelcom
                                                                    data={data[current].introduce[0].img}
                                                                    name={classNamed}
                                                                ></SwiperWelcom> :null
                            }  
                            <span style = {{color:'red'}}>(滑动图片可查看下一张图片)</span>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

    isOver = (id,step) => {//判断是否已完成
        if( (!id && step == 3) || id && step == 5){
            return true
        }
        return false
    }
    

    showHelp = (item, index) => {
        const selectIndex = this.state.selectArr[index]
        return (
            <div className='help'>
                <div style={{ height: 60, backgroundColor: 'rgb(34,167,222)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                    {item.name}
                </div>
                <div style={{ flexDirection: 'column-reverse', display: 'flex', flex: 1 }}>
                    <div className='button'>
                        <Button type="primary" onClick={() => this.backPage(index, item)}>上一步</Button>
                        <Button onClick={!this.isOver(item.id,this.state.Steps) ? () => this.goPage(index, item) : () => this.getHelp(item)}>
                            {/* {console.log('item',item)} */}
                            {this.isOver(item.id,this.state.Steps) ? '完成' : '下一步'}
                            
                        </Button>
                    </div>
                    {this.renderHelp(item.data, item.classNamed)}
                </div>
                <div className='close' onClick={() => this.getHelp(item)}>
                    ×
                </div>
            </div>
        )
    }

    renderImage = (data) => {//渲染指引帮助卡片
  
        return (
            <div className='image'>
                {this.renderTitle(data)}
                <Row type="flex" justify="space-around" align="middle">
                    {data.img.map((item, index) => {
                        return (
                            <Col span={11} key={index} push={index}>
                                <div style = {{marginTop:'20px'}}>
                                    <img 
                                        className = {'imageImg'} 
                                        onClick={() => this.getHelp(item, index)} src={item.src} 
                                        alt={item.title} 
                                    />
                                    <div>{item.title}</div>
                                    {item.select ? this.showHelp(item, index) : null}
                                </div>
                            </Col>
                        )
                    })}
                </Row>
              
            </div>
        )
    }

    renderCardBody = (data) => {
        switch (data.type) {
            case 'image':
                return this.renderImage(data);

            case 'phone':
                return this.renderPhone(data);

            case 'twoCode':
                return this.renderTwoCode(data);

            case 'download':
                return this.renderDownload(data);

            default:
                return null
        }
    }

    isImg = (count) => {//控制图片点击事件
        let arr = this.state.isImg
        arr = arr.map((item, index) => {
            if (count == index) {
                return item ? item : !item
            } else {
                return false
            }
        })
        this.setState({
            isImg: arr
        })
    }

    // labelModalClick = () => {this.setState({labelModal:true})}

    addHeadImage = () =>{//上传头像

    }

    

    

    renderBody = (item) => {//渲染主体欢迎卡片
        if (item.type) {
            return this.renderCardBody(item)
        }

        return (
            <div className={'welcomMain'}>
                <div className='titleWelcom'>
                    {item.title}
                </div>
                <div className={'people'}>
                {/* <div className = {'peopleImg'} style = {{backgroundImage:`url(${imageUrl})`}} onClick = {this.addHeadImage}></div> */}
                   <div style = {{width:'35px',height:'35px'}}>
                        <UploadImages
                            account = {this.props.account}
                            upImages = {this.props.upImages}
                            headImage = {this.props.headImage}
                        >

                        </UploadImages>
                   </div>
                    
                    <div className = {'peopleMain'}>
                        <div className={'usr'}>
                            登录用户：<span style = {{fontSize:'18px',fontWeight: '700'}}>{item.loginUsr}</span>
                        </div>
                        <div className={'loginTime'}>
                            最后登录时间：{moment(this.props.lastLoginTime).format('LLLL')}
                        </div>
                    </div>
                </div>
                {/* <div className = 'label'>
                    <span>{this.renderLabels()}</span><span className = {'labelClick'} onClick = {this.labelModalClick}>打标签</span>
                </div> */}
                <div className = {'labelAndType'}>
                    <LabelFather></LabelFather>
                    <div className={'type'}>
                        <Row>
                            {item.pageImg.map((smallItem, index) => {
                                return (<Col span={4} key={index} offset={index ? 1 : 0}>
                                    <div className={'typeImg'}>
                                        <img
                                            onClick={() => this.isImg(index)}
                                            src={this.state.isImg[index] ? smallItem.isImg : smallItem.img}
                                            alt={smallItem.title}
                                        />
                                        <div>{smallItem.title}</div>
                                        <div
                                            className={'isThisType'}
                                            style={{display:'block'}}
                                        >
                                            <img 
                                                src={
                                                    this.state.isImg[index] ? require(`../../../images/welcom/icon/ic_selected.png`) : 
                                                                            require(`../../../images/welcom/icon/ic_selected_nor.png`)
                                                } 
                                                alt='yes' 
                                            />
                                        </div>
                                    </div>
                                </Col>)
                            })}
                        </Row>
                    </div>
                </div>
                
            </div>
        )
    }

    // renderLabels = () => {
    //     // console.log('this.state.labels')
    //     // console.log(this.state.labels)
    //     if(!this.props.newData){
    //         return null
    //     }
    //     return this.props.newData.map( (item,index) => {
    //         return (
    //             <span key = {index} style = {{marginRight:'10px'}}>
    //                 {item.name}
    //             </span>
    //         )
    //     })
    // }

    // changeLabels = (labels) => {
    //     this.setState({
    //         labels
    //     })
    // }

    render() {

        return (
            <div>
                {this.renderBody(this.props.data)}
                {/* <LableClick 
                    show = {this.state.labelModal} 
                    close = {()=>{this.setState({labelModal:false})}}

                    // changeLabels = {this.changeLabels}
                /> */}
            </div>


        )
    }
}
