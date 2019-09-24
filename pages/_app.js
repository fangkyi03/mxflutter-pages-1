/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import { Container } from 'next/app'
import React from 'react'
import './app.less'
import BaseLayout from '../components/BaseLayout';
import { ConfigProvider, message } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Head from 'next/head'

class AppComponent extends React.Component {

    componentDidMount() {
      message.config({
        maxCount:1
      })
    }
    
    getRouter = () => {
        const { router } = this.props;
        if (typeof window == "object") {
            if (window.location.search.indexOf("?") !== -1) {
                const obj = {};
                const searchArr = window.location.search.split("?")[1].split("&");
                searchArr.forEach((e, index) => {
                    const splitArr = e.split("=");
                    obj[splitArr[0]] = splitArr[1];
                });
                return obj;
            } else {
                return {};
            }
        } else {
            return router.query;
        }
    };
    
    renderHome = () => {
        const { Component, pageProps, router, ...arg } = this.props;   
        return (
            <Container>
                <Head>
                    <script src="https://img3.nongbaxian.com.cn/echarts.min.js"></script>
                </Head>
                <ConfigProvider locale={zhCN}>
                    <Component {...pageProps} {...arg} router={router} routerParams={this.getRouter(arg)} />
                </ConfigProvider>
            </Container>
        ) 
    }

    render404 = () => {
        const { Component, pageProps, router, ...arg } = this.props;   
        return (
            <Container>
                <Head>
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js">
                    </script>
                </Head>
                <ConfigProvider locale={zhCN}>
                    <Component {...pageProps} {...arg} router={router} routerParams={this.getRouter(arg)} />
                </ConfigProvider>
            </Container>
        ) 
    }

    renderFull = () => {
        const { Component, pageProps, router, ...arg } = this.props;   
        return (
            <Container>
                <Head>
                    <script src="https://img3.nongbaxian.com.cn/echarts.min.js"></script>
                    <script src="https://img3.nongbaxian.com.cn/bmap.min.js"></script>
                    <script src='https://webapi.amap.com/maps?v=1.4.15&key=237cf80ec79bf6e2b0302d11acef2abf'></script>
                    <script src='https://a.amap.com/jsapi_demos/static/resource/heatmapData.js'></script>
                    <script src="https://webapi.amap.com/ui/1.0/main.js"></script>
                    <script src="http://gallery.echartsjs.com/dep/echarts/map/js/china.js"></script>
                    <script src="https://open.ys7.com/sdk/js/2.0/ezuikit.js"></script>
                </Head>
                <ConfigProvider locale={zhCN}>
                    <Component {...pageProps} {...arg} router={router} routerParams={this.getRouter(arg)} />
                </ConfigProvider>
            </Container>
        )
    }

    renderLayout = () => {
        const { Component, pageProps, router, ...arg } = this.props;   
        return (
            <Container>
                <Head>
                    <script src="https://img3.nongbaxian.com.cn/echarts.min.js"></script>
                    <script src="https://img3.nongbaxian.com.cn/bmap.min.js"></script>
                    <script src='https://webapi.amap.com/maps?v=1.4.15&key=237cf80ec79bf6e2b0302d11acef2abf'></script>
                    <script src='https://a.amap.com/jsapi_demos/static/resource/heatmapData.js'></script>
                    <script src="https://webapi.amap.com/ui/1.0/main.js"></script>
                    <script src="http://gallery.echartsjs.com/dep/echarts/map/js/china.js"></script>
                    <script src="https://open.ys7.com/sdk/js/2.0/ezuikit.js"></script>
                </Head>
                <ConfigProvider locale={zhCN}>
                    <BaseLayout {...this.props}>
                        <Component {...pageProps} {...arg} router={router} routerParams={this.getRouter(arg)} />
                    </BaseLayout>
                </ConfigProvider>
            </Container>
        )
    }
    
    getPathType = () => {
        const {router} = this.props
        if (
            [
                '/login',
            ].indexOf(router.pathname) !== -1
        ) {
            return 'Full'
        } else if (router.pathname == '/404') {
            return '404'
        } else {
            return 'Layout'
        }
    }

    render() {
        const type = this.getPathType()
        return this['render' + type]()
    }
}
export default AppComponent