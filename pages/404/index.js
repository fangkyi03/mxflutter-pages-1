import React, { Component } from 'react'
import styles from './error.less'
import apiTool from '../../command/apiTool';

export default class Error extends Component {

    componentDidMount() {

    }

    onErrorDown = () => {
        apiTool.jumpRouter('index')
    }

    render() {
        return (
            <div className={styles.main}>
                <lottie-player src={"https://assets7.lottiefiles.com/temp/lf20_0txt7u.json"} background="transparent" speed="1" style={{width: 300, height: 300}} loop autoplay />
                <div>抱歉，你访问的页面不存在。</div>
                <div 
                    id='button'
                className={styles.button} onClick={this.onErrorDown}>
                    返回首页
        </div>
            </div>
        )
    }
}
