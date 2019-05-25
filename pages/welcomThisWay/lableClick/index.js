import React, { Component } from './node_modules/react'
import { Modal, Input ,message} from './node_modules/antd'
import api from '../../../command/api';
import createDva from "../../../command/createDva";
const Search = Input.Search;


// @createDva(["welcomThisWay1"])
export default class LableClick extends Component {
    static defaultProps = {
        labels: [1, 2,],
        show: true
    };

    state = {
        selectData: new Set([]),
        selectType: new Set([]),
        other1: [],
        other2: [],
        data: null,
        upData: null,
        addLabel:false
    }

    tranData = (data,filterData) =>{
        const arr = []
        // console.log('filterData',filterData)
        // data.forEach((e)=>{
        //     filterData.forEach((el)=>{
        //         if (el.tagname == e.tagname) {
        //             arr.push({...e,type:el.type})
        //             // console.log('arr',arr)
        //             this.state.selectData.add(e.tagname);
        //         }else{
        //             arr.push({...e,type:1})
        //             // console.log('arr',arr)
        //             this.state.selectData.add(e.tagname);
        //         }
        //     })
        // })
        filterData.forEach((el)=>{
            data.forEach((e)=>{
                if (el.tagname == e.tagname) {
                    arr.push({...e,type:el.type})
                    this.state.selectData.add(e.tagname);
                }else{
                    arr.push({...e,type:1})
                    this.state.selectData.add(e.tagname);
                }
            })
        })
        let arr2 = Array.from(this.state.selectData);
        // const other1 = filterData.filter(e => e.type == 0);
        // const other2 = filterData.filter(e => e.type == 1);
        const other1 = filterData.filter(e => e.type == 0);
        const other2 = filterData.filter(e => e.type == 1 || e.type == 2 );
        data.filter(e => e.type == 2 ).forEach( (item) => {
            other2.push(item)
        })
        return { other1, other2,selectData:this.state.selectData}
    } 

    componentDidMount() {
        // api.send(this,
        //     [
        //         api.MarkController_ADMIN('welcomThisWay1').tempTagsUsingPOST()(
        //             {
        //                 tranData: ({ data }) => {
        //                     return {newData:data}
        //                 }
        //             }
        //         ),
        //         api.MarkController_ADMIN('welcomThisWay1').getTagUsingPOST()({
        //             onCallBack: ({ retData }, ret)=>{
        //                 this.setState(this.tranData(retData.data, ret.newData))
        //             }
        //         })
        //     ]
        // );
    }

    handleOk = e => {
        let arr = Array.from(this.state.selectData);
        let arr2 = arr.map((item) => {
            return {
                labelId: item
            }
        })

        api.send(this,
            [
                // api.MblCompanyLabelsController_UPMSCOMPANY("welcomThisWay1").insertUsingPOST({mblCompanyLabels:arr2})({
                //     appName: "supe",
                //     tranData: res => {
                //        console.log(res)
                //     },
                //     onError: () => {
                //       console.log("object");
                //     }
                //   }) 
                //   api.MarkController_ADMIN("welcomThisWay1").addTagUsingPOST({mblCompanyLabels:arr2})({
                //     appName: "supe",
                //     tranData: res => {
                //        console.log(res)
                //     },
                //     onError: () => {
                //       console.log("object");
                //     }
                //   })
            ]
        );
        api.send(this,
            [
                api.MarkController_ADMIN('welcomThisWay1').tempTagsUsingPOST()(
                    {
                        tranData: ({ data }) => {
                            // console.log('弹出框data')
                            // console.log(data)
                            return {newData:data}
                        }
                    }
                ),
                api.MarkController_ADMIN('welcomThisWay1').getTagUsingPOST()({
                    onCallBack: ({ retData }, ret)=>{
                        // console.log('retData',retData,'ret',ret)
                        this.setState(this.tranData(retData.data, ret.newData))
                    }
                })
            ]
        );
        this.props.refresh();
        this.props.close();
    };

    handleCancel = e => {
        api.send(this,
            [
                api.MarkController_ADMIN('welcomThisWay1').tempTagsUsingPOST()(
                    {
                        tranData: ({ data }) => {
                            return {newData:data}
                        }
                    }
                ),
                api.MarkController_ADMIN('welcomThisWay1').getTagUsingPOST()({
                    onCallBack: ({ retData }, ret)=>{
                        this.setState(this.tranData(retData.data, ret.newData))
                    }
                })
            ]
        );
        this.props.refresh();
        this.props.close();
    };

    onItemClick = (item) => {
        let thisId = null

        if(item.tagname == "种植业"){
            thisId = 1
        }else if(item.tagname == "畜牧业"){
            thisId = 2
        }else if(item.tagname == "水产养殖业"){
            thisId = 3
        }else if(item.tagname == "果蔬采摘"){
            thisId = 4
        }else if(item.tagname == "垂钓"){
            thisId = 5
        }else if(item.tagname == "观光旅游"){
            thisId = 6
        }else if(item.tagname == "亲子活动"){
            thisId = 7
        }else if(item.tagname == "农家乐"){
            thisId = 8
        }else if(item.tagname == "民宿"){
            thisId = 9
        }

        if (this.state.selectData.has(item.tagname)) {
            this.state.selectData.delete(item.tagname)
            api.send(this,
                [
                    api.MarkController_ADMIN("welcomThisWay1").delTagUsingPOST({ tagname: item.tagname })({
                        appName: "supe",
                        tranData: res => {
                            console.log(res)
                        },
                        onError: () => {
                            console.log("object");
                        }
                    })
                ])

        } else {
            this.state.selectData.add(item.tagname)
            
            api.send(this,
                [
                    api.MarkController_ADMIN("welcomThisWay1").addTagUsingPOST({ tagname: item.tagname, tempid: thisId })({
                        appName: "supe",
                        tranData: res => {
                            console.log(res)
                        },
                        onError: () => {
                            console.log("object");
                        }
                    })
                ])
        }

        this.setState({
            selectData: this.state.selectData
        })
    }

    renderLaber = (item, index) => {
        const isFocus = this.state.selectData.has(item.tagname)
        return (
            <div
                key={index}
                onClick={() => this.onItemClick(item)}
                className={isFocus ? 'selColor' : ''}
            >
                {item.tagname}
            </div>
        )
    }

    addClick = () =>{
        this.setState({
            addLabel : true
        })
    }

    addLabelOK = () => {
        let value = addLabelText.value

        if(!value.length){
            message.error('请输入您所要添加的标签名');
            // addLabelText.value = ''
            return
        }else if(value.length > 8){
            message.error('对不起，您已输入超过八个字符了');
            // addLabelText.value = ''
            return
        }


        if(this.state.other2){
           if(this.state.other2.filter( (item) => item.type == 2).length >= 5 ){
                message.error('对不起，您已经拥有5个标签了');
                addLabelText.value = ''
                return
           }
        }

        api.send(this,
            [
                api.MarkController_ADMIN("welcomThisWay1").addTagUsingPOST({ tagname: value })({
                    appName: "supe",
                    tranData: res => {
                        console.log(res)
                    },
                    onError: () => {
                        console.log("object");
                    }
                })
            ])
        this.setState({
            addLabel : false
        })
        api.send(this,
            [
                api.MarkController_ADMIN('welcomThisWay1').tempTagsUsingPOST()(
                    {
                        tranData: ({ data }) => {
                            return {newData:data}
                        }
                    }
                ),
                api.MarkController_ADMIN('welcomThisWay1').getTagUsingPOST()({
                    onCallBack: ({ retData }, ret)=>{
                        this.setState(this.tranData(retData.data, ret.newData))
                    }
                })
            ]
        );
        this.props.refresh();
    }

    addLabeCancel = () => {
        this.setState({
            addLabel : false
        })
    }

    addLabel = () =>{
        
       return (
                <Modal
                    title="输入标签"
                    visible={this.props.show}
                    onOk={this.addLabelOK}
                    onCancel={this.addLabeCancel}
                >
                            <div className = {'addLabel'}>
                                <Input id = 'addLabelText' className = {'addInput'} type = {'text'} placeholder = '输入标签不超过8个字' />
                                <p style = {{textAlign: 'center',color: 'red'}}>您最多可以拥有5个自定义标签</p>
                            </div>
                </Modal>
            
       ) 
    }

    render() {
        const { other1, other2 } = this.state
        return (
            <Modal
                title="企业标签"
                visible={this.props.show}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
                width = {800}
            >
                {/* {console.log('this.state.selectData',this.state.selectData)} */}
                <div className='welcomBox'>
                    <div className={'introduce'}>选择与自身业务范围相符的标签(可多选)</div>
                    <div style = {{fontSize: '16px'}}>行业类型</div>
                    <div className={'selectLable'} style = {{borderBottom:' 1px solid #efefef',}}>
                        {
                            other1.map((e, index) => {
                                return this.renderLaber(e, index)
                            })
                        }
                    </div>
                    <div style = {{fontSize: '16px'}}>经营内容</div>
                    <div className={'selectLable'}>
                        {
                            other2.map((e, index) => {
                                return this.renderLaber(e, index)
                            })
                        }
                    </div>
                    <div style = {{color:'red'}}>
                        您的自定义标签在您取消选择并关闭窗口时将会自动删除！
                    </div>
                    {/* <Search
                        placeholder="添加一个自定义内容"
                        enterButton="添加"
                        size="default"
                        onSearch={(value) => this.addDiv(value)}
                        id = 'addInput'
                    /> */}
                </div>
                <div className = {'addClick'} onClick = {this.addClick}>
                    创建自定义标签
                </div>
                {
                    this.state.addLabel ? this.addLabel() : null
                }

            </Modal>
        )
    }
}
