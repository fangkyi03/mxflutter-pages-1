/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import { Container } from 'next/app'
import React from 'react'
import './app.less'
import Header from 'next/head'
import Main from '../components/Main'

class AppComponent extends React.Component {

    getPath = () => {
        const { router } = this.props
        const { route } = router
        return route
    }

    getPageParams = () => {
        const { pageProps, ...arg } = this.props
        return {
            ...pageProps, ...arg,
            routerParams: this.getRouter(arg)
        }
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

    render() {
        const { Component } = this.props
        const params = this.getPageParams()
        return (
            <Container>
                <Header>
                    <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1, minimum-scale=1" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="browsermode" content="application" />
                    <meta name="full-screen" content="yes" />
                    <meta name="x5-fullscreen" content="true" />
                    <meta name="x5-page-mode" content="app" />
                    <meta name="360-fullscreen" content="true" />
                </Header>
                <Main>
                    <Component {...params} />
                </Main>
            </Container>
        )
    }
}
export default AppComponent