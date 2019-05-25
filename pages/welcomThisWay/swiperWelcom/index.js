import React, { Component } from './node_modules/react'
import Swiper from './node_modules/swiper'
import { relative } from 'path';

export default class SwiperWelcom extends Component {

    componentWillReceiveProps(){
        new Swiper(`.${this.props.name}`, {
            initialSlide:0,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,
            navigation: {
                   nextEl: '.swiper-button-next',
                   prevEl: '.swiper-button-prev',
            },
        });
    }

    componentDidMount() {
        new Swiper(`.${this.props.name}`, {
            // loop: true,     //循环
            // autoplay: {      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
            //     delay: 2500,
            //     disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
            // },
            initialSlide:0,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,
            navigation: {
                   nextEl: '.swiper-button-next',
                   prevEl: '.swiper-button-prev',
            },
        });
    }

    render() {
        return (

            <div className={this.props.name} style={{ width: '100%', height: '426px', overflow: 'hidden',position:'relative' }}>
                <div className="swiper-wrapper" style={{ position: 'relative' }}>
                    {
                        this.props.data.map((item, index) => {
                            return <div className="swiper-slide" key={index} style={{ lineHeight: '350px' }}>
                                <img src={item} alt='' />
                            </div>
                        })
                    }
                </div>
                <div style = {{width:'100%',height:'426px',position:"absolute",top:'0px',left:'0px'}}>
                    <div  style = {{width:'100%',height:'100%',position:"relative"}}>
                        <div className="swiper-button-next" style = {{width: '37px',height: '61px',background: 'center/cover',backgroundImage: 'url(../../../../../images/welcom/help/ic_next.png)'}}></div>
                        <div className="swiper-button-prev" style = {{width: '37px',height: '61px',background: 'center/cover',backgroundImage: 'url(../../../../../images/welcom/help/ic_last.png)'}}></div>
                    </div>
                </div>
                <div style={{position: 'absolute',zIindex: 999,bottom: 19,textAlign:'center',width:'100%'}}> 
                    <span>{`共${this.props.data&&this.props.data.length}张`}</span>     
                </div>
            </div>
        )
    }
}
