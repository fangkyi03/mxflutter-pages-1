import React, { Component } from 'react'
import { Row, Col,Button } from "antd";
import WelcomCard from './welcomCard'
import TwoCodeCard from './twoCodeCard'
import './index.less'
import api from '../../command/api';
import createDva from "../../command/createDva";
import cookie from 'react-cookies'
import BaseLayout from '../../layout/BaseLayout';

@createDva(["welcomThisWay"])
export default class WelcomThisWay extends Component {
 
    constructor(props) {
        
        super(props)
        this.state = {
            data: {
                title: '',
                loginUsr: '',
                loginTime: '',
                helpUs: [
                    '1、主体溯源，全程溯源 操作流程指引帮助',
                    '2、在线客服帮助指导',
                    '3、农起帮服务APP下载',
                    '4、常用工具或驱动下载'
                ],
                pageImg: [
                    {
                        title: '种植业行业追溯',
                        img: require('../../images/welcom/bg_plantation_nor.png'),
                        isImg: require('../../images/welcom/bg_plantation.png'),
                    },
                    {
                        title: '畜牧业行业追溯',
                        img: require('../../images/welcom/bg_graziery_nor.png'),
                        isImg: require('../../images/welcom/bg_graziery.png'),
                    },
                    {
                        title: '水产养殖行业追溯',
                        img: require('../../images/welcom/bg_fisheries_nor.png'),
                        isImg: require('../../images/welcom/bg_fisheries.png'),
                    },
                ],
                data: [
                    {
                        bigTitle: '指引帮助',
                        smallTitle: '',
                        type: 'image',
                        img: [
                            {
                                title: '',
                                src: require('../../images/welcom/icon/bg_subject.png'),
                                select: false,
                                id: 0,
                                classNamed: 'otherClassName1',
                                name: '主体溯源指引',
                                data: [
                                    {
                                        title: '企业信息完善',
                                        introduce: [
                                            {
                                                title: '',
                                                explain:
                                                    [
                                                        '登录农业企业追溯系统',
                                                        '点击企业信息-企业信息',
                                                        '完善企业信息(企业信息，法人信息，联系人信息)'
                                                    ],
                                                img: [
                                                    require('../../images/welcom/help/001.png'),
                                                ]

                                            },
                                        ]
                                    },
                                    {
                                        title: '产品登记',
                                        introduce: [
                                            {
                                                title: '',
                                                explain: [
                                                    '点击产品信息-产品登记信息',
                                                    '点击新建(登记产品信息，产品名称，产品类别，上传图片信息等)'
                                                ],
                                                img: [
                                                    require('../../images/welcom/help/011.png'),
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        title: '溯源打印',
                                        introduce: [
                                            {
                                                title: '方法一',
                                                explain: [
                                                    '点击产品信息-产品登记信息',
                                                    '点击打印',
                                                    '选择主体溯源(输入数量)',
                                                ],
                                                img: [
                                                    require('../../images/welcom/help/021.png'),
                                                    require('../../images/welcom/help/022.png'),
                                                    require('../../images/welcom/help/023.png'),
                                                    require('../../images/welcom/help/024.png'),
                                                    require('../../images/welcom/help/025.png'),
                                                ]
                                            },
                                            {
                                                title: '方法二',
                                                explain: [
                                                    '点击溯源码打印-溯源码打印(选择溯源码打印)',
                                                    '选择主体溯源(输入数量)',
                                                ],
                                                img: [
                                                    // require('../../images/welcom/031.png'),
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        title: '完成',
                                        introduce: [
                                            {
                                                title: '',
                                                explain: [
                                                    '打印二维码，可以贴到包装',
                                                ],
                                                img: [
                                                    require('../../images/welcom/help/031.png'),
                                                ]
                                            },
                                        ]
                                    },
                                ],
                                srcArr: Array(4).fill({}).map((e, i) => require(`../../images/WelcomThisWay/zt${i}.png`))
                            },
                            {
                                title: '',
                                src: require('../../images/welcom/icon/bg_omnidistance.png'),
                                select: false,
                                id: 1,
                                name: '全程溯源指引',
                                classNamed: 'otherClassName2',
                                data: [
                                    {
                                        title: '企业信息完善',
                                        introduce: [
                                            {
                                                title: '',
                                                explain:
                                                    [
                                                        '登录农业企业追溯系统',
                                                        '点击企业信息-企业信息',
                                                        '完善企业信息(企业信息，法人信息，联系人信息)'

                                                    ],
                                                img: [
                                                    require('../../images/welcom/help/101.png'),
                                                ]

                                            },
                                        ]
                                    },
                                    {
                                        title: '产品登记',
                                        introduce: [
                                            {
                                                title: '',
                                                explain: [
                                                    '点击产品信息-产品登记信息',
                                                    '点击新建(登记产品信息，产品名称，产品类别，上传图片等信息)',
                                                ],
                                                img: [
                                                    require('../../images/welcom/help/111.png'),
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        title: '产品生产',
                                        introduce: [
                                            {
                                                title: '方法一',
                                                explain: [
                                                    '点击生产管理-农事记录(记录农事操作信息，施药，浇水等)',
                                                    '点击生产管理-采摘管理(记录农事采摘过程)',
                                                    '点击生产管理-分拣管理(记录农事分拣过程)',
                                                    '点击生产管理-包装管理(记录农事包装过程)',
                                                ],
                                                img: [
                                                    require('../../images/welcom/help/121.png'),
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        title: '检测',
                                        introduce: [
                                            {
                                                title: '',
                                                explain: [
                                                    '点击生产管理-生产任务',
                                                    '点击农事操作-检测，点击添加(录入检测名称、检测报告)',
                                                ],
                                                img: [
                                                    require('../../images/welcom/help/131.png'),
                                                    require('../../images/welcom/help/132.png'),
                                                    require('../../images/welcom/help/133.png'),
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        title: '溯源打印',
                                        introduce: [
                                            {
                                                title: '方法一',
                                                explain: [
                                                    '点击生产管理-生产任务',
                                                    '点击打印',
                                                    '选择全程溯源(输入数量)',
                                                ],
                                                img: [
                                                    require('../../images/welcom/help/141.png'),
                                                    require('../../images/welcom/help/142.png'),
                                                    require('../../images/welcom/help/143.png'),
                                                    require('../../images/welcom/help/144.png'),
                                                    require('../../images/welcom/help/145.png'),
                                                ]
                                            },
                                            {
                                                title: '方法二',
                                                explain: [
                                                    '点击溯源码打印-溯源码打印(选择溯源码打印)',
                                                    '选择全程溯源(输入数量)',
                                                ],
                                                img: [
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        title: '完成',
                                        introduce: [
                                            {
                                                title: '',
                                                explain: [
                                                    '打印二维码，可以贴到包装',
                                                ],
                                                img: [
                                                    require('../../images/welcom/help/151.png'),
                                                ]
                                            },
                                        ],
                                        img: [
                                            // require('../../images/welcom/help/151.png'),
                                        ]
                                    },
                                ],
                                srcArr: Array(6).fill({}).map((e, i) => require(`../../images/WelcomThisWay/qc${i}.png`))
                            },
                        ]
                    },
                    {
                        bigTitle: '指引帮助',
                        smallTitle: '浙江中兴慧农信息科技有限公司',
                        icon: require('../../images/welcom/icon/ic_help.png'),
                        type: 'phone',
                        img: [
                            {
                                title: '服务微信',
                                // src: require('../../images/welcom/wxgzh.png'),
                                icon: require('../../images/welcom/ic_wechat.png')
                            }
                        ],
                        concact: [
                            {
                                icon: require('../../images/welcom/ic_qq.png'),
                                title: 'QQ群',
                                func: [
                                    '233189825'
                                ]
                            },
                            {
                                icon: require('../../images/welcom/ic_phone.png'),
                                title: '在线电话',
                                func: [
                                    '0574-55841200',
                                    '0574-55843501'
                                ]
                            },

                        ],
                    },
                    {
                        bigTitle: '农起帮 APP 下载',
                        smallTitle: '更多服务尽在农起帮',
                        icon: require('../../images/welcom/icon/ic_noqibang.png'),
                        type: 'twoCode',
                        img: [
                            {
                                title: 'app下载',
                                // src: require('../../images/welcom/all.png'),
                            }
                            // {
                            //     title: 'Android下载',
                            //     src: require('../../images/welcom/PQKJ.png'),
                            // },
                            // {
                            //     title: 'ios下载',
                            //     src: require('../../images/LoginNew/ios.png'),
                            // }
                        ],
                    },
                    {
                        bigTitle: '工具下载',
                        smallTitle: '',
                        icon: require('../../images/welcom/icon/ic_tool.png'),
                        type: 'download',
                        address: [
                            {
                                title: '打印程序驱动 下载',
                                icon: require('../../images/welcom/icon/ic_download.png'),
                                src: 'https://pan.baidu.com/s/1TEigJIkvUgVkgs51moPbtg'
                                //src:''
                            },
                            {
                                title: '台办驱动 下载',
                                icon: require('../../images/welcom/icon/ic_download.png'),
                                src: 'https://pan.baidu.com/s/1fPkDRleG7D9wqRNKuKT_sg'
                                //src:''
                            },
                            {
                                title: '汉印驱动 下载',
                                icon: require('../../images/welcom/icon/ic_download.png'),
                                src: 'https://pan.baidu.com/s/1Z303Fp13zfLZKYVCgTHqsQ'
                                //src:''
                            },
                            {
                                title: 'XT300热敏方式打印设置 下载',
                                icon: require('../../images/welcom/icon/ic_download.png'),
                                src: 'https://pan.baidu.com/s/11YFLC850pTKib_1Y6AN4Ew'
                                // src:''
                            },
                            {
                                title: '汉印打印机参数设置 下载',
                                icon: require('../../images/welcom/icon/ic_download.png'),
                                src: 'https://pan.baidu.com/s/10j_tWzj69N9AURHvS4FtIw'
                                // src:''
                            },
                        ],
                    },

                ]
            },
            baseTwocode:[
                // {
                //     type:1,
                //     title:'基地地块1号',
                //     codeSrc:require('../../images/welcom/PQKJ.png'),
                //     downloadUrl:'https://pan.baidu.com/s/1OEa6R5xR1uqVZddIpClx5g',
                // },
            ],
            pageTwocode:[
                // {
                //     type:0,
                //     title:'企业黄页',
                //     codeSrc:require('../../images/welcom/PQKJ.png'),
                //     downloadUrl:'https://pan.baidu.com/s/1OEa6R5xR1uqVZddIpClx5g',
                // },
                // {
                //     type:0,
                //     title:'小程序旺铺',
                //     codeSrc:require('../../images/welcom/PQKJ.png'),
                //     downloadUrl:'https://pan.baidu.com/s/1OEa6R5xR1uqVZddIpClx5g',
                // },
            ]
        }
    }

    componentDidMount() {
        // console.log('window.introJs',window.introJs)
        // if (!window.localStorage.userFirst) {
        //     introJs().setOptions({
        //         //对应的按钮
        //         prevLabel: "上一步",
        //         nextLabel: "下一步",
        //         skipLabel: "跳过",
        //         doneLabel: "我知道了",
        //         exitOnOverlayClick: false,
        //         showBullets: false,
        //         showProgress: true,
        //         overlayOpacity: 1,
        //         hintPosition: 'top-middle',
        //         hintButtonLabel: 'Got it',
        //         disableInteraction: true,

        //     }).start();
        //     window.localStorage.userFirst = 1;
        // }

        let data = this.state.data
        // api.send(this, [
        //                     api.UumUserController_ADMIN('welcomThisWay').infoUsingPOST()({
        //                         tranData: (res) => {
        //                             // data.loginTime = new Date().toLocaleString()
        //                             data.title = res.data.uumUser.deptName + ',欢迎您！'
        //                             data.loginUsr = res.data.uumUser.uname
        //                             if (!(window.localStorage.userFirst && window.localStorage.userFirst.indexOf(`${res.data.uumUser.uuid}`) !== -1)) {
        //                                 introJs().setOptions({
        //                                     //对应的按钮
        //                                     prevLabel: "上一步",
        //                                     nextLabel: "下一步",
        //                                     skipLabel: "跳过",
        //                                     doneLabel: "我知道了",
        //                                     exitOnOverlayClick: false,
        //                                     showBullets: false,
        //                                     showProgress: true,
        //                                     overlayOpacity: 1,
        //                                     hintPosition: 'top-middle',
        //                                     hintButtonLabel: 'Got it',
        //                                     disableInteraction: true,
                            
        //                                 }).start();
        //                                 window.localStorage.userFirst += `,${res.data.uumUser.uuid}`;
        //                                 console.log(window.localStorage.userFirst )
        //                             }
        //                             this.setState({
        //                                 data
        //                             })

        //                             return {uuidNew:res.data.uumUser.uuid,headImage:res.data.uumUser.headPortrait}
        //                         }
        //                     }),
        //                     api.FarmlandController_TRACECOMPANY('welcomThisWay').getBaseListUsingPOST()({
        //                         tranData: (res) => {
        //                             console.log('二维码' , res)
                                    
        //                             this.setState({
        //                                 baseTwocode: res.data.map( (item) => {
        //                                     return {
        //                                         type:1,
        //                                         title:item.name,
        //                                         codeSrc:item.id,
        //                                         downloadUrl:item.id,
        //                                     }
        //                                 })
        //                             })
        //                         }
        //                     }),
        //                     api.YellowPageController_TRACECOMPANY("welcomThisWay").detailUsingPOST({})({
        //                         tranData: res => {
        //                            console.log('res',res)
        //                            this.setState({
        //                                 pageTwocode: this.thisPageTwoCode(res)
        //                             })
        //                         },
        //                         onError: () => {
        //                             console.log("object");
        //                         }
        //                     }),
        //                     api.UumUserController_ADMIN("welcomThisWay").getLastLoginTimeUsingPOST()({
        //                         tranData:({data}) => {
        //                             console.log('最后登入时间',data)
        //                             return ({ lastLoginTime: data.lastLoginTime})
        //                         }    
        //                     }),
        //                 ]
        // );

    }

    

    thisPageTwoCode = (res) => {
        let data = []
        data.push({
                    type:0,
                    title:'企业黄页',
                    codeSrc:res.data.domain,
                    downloadUrl:res.data.domain,
                })
        data.push({
                    type:0,
                    isNull: true,
                    title:'小程序旺铺',
                    // codeSrc:require('../../images/welcom/PQKJ.png'),
                    downloadUrl:'https://pan.baidu.com/s/1OEa6R5xR1uqVZddIpClx5g',
        })

        return data
        
    }

   

    addLocalStorage = () => {
        window.localStorage.removeItem('userFirst');
        // console.log('55555')
    }

    upImages = (url,uuid) =>{
        // api.send(this,
        //     [
        //         api.UumUserController_ADMIN('welcomThisWay').updateHeadUsingPOST({uuid:uuid,headPortrait:url})(
                    
        //         ),
        //         api.UumUserController_ADMIN('userinfo').infoUsingPOST()({
        //             tranData:({data})=>{
        //                 return {uumUser:{...data.uumUser,headPortrait:url},loginType:cookie.load('loginType')||0}
        //             },
        //         })
        //     ]
        // );
    }

    onNotificationDown = () => {
        // api.jumpRouter(this, 
        //   '/welcomCodeList', 
        // )
    }

    checkTwoCode = (baseTwocode) => {//二维码视图组件
        if(!baseTwocode){
            return null
        }else{
            return <TwoCodeCard
                        baseTwocode = {this.state.baseTwocode}
                        pageTwocode = {this.state.pageTwocode}
                        onNotificationDown = {this.onNotificationDown}
                    ></TwoCodeCard>
        }
    }

    renderBody = () => {
        return (
            <div className={'welcomThisWay'}>
                <div className={'title'}>
                    欢迎页
                    {/* {console.log(this.state.data)} */}
                </div>
                <Row gutter={10}>
                    <Col span={16}>
                        <WelcomCard
                            data={this.state.data}
                            account = {this.props.uuidNew}
                            upImages = {this.upImages}
                            headImage={this.props.headImage || require('../../images/bgImg.jpg')}
                            lastLoginTime={this.props.lastLoginTime}
                        ></WelcomCard>
                        <div data-step="1" data-intro={this.state.data.helpUs[0]} data-disable-interaction={0}>
                            <WelcomCard
                                data={this.state.data.data[0]}
                            ></WelcomCard>
                        </div>
                    </Col>
                    <Col span={8}>
                        {
                            this.state.data.data.map((item, index) => {
                                if (!index) {
                                    return null
                                }
                                return (
                                    <div key={index} data-step={index + 1} data-disable-interaction={0} data-intro={this.state.data.helpUs[index]}>
                                        <WelcomCard
                                            // key = {index}
                                            data={item}
                                        ></WelcomCard>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        {this.checkTwoCode(this.state.baseTwocode)}
                        
                    </Col>
                </Row> */}
            </div>
        )
    }

    render() {
        return (
            <BaseLayout>
                {this.renderBody()}
            </BaseLayout>
        )
        // return 
    }
}
