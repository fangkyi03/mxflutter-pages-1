/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import App, { Container } from 'next/app'
import React from 'react'
import './app.less'
import withDva from '../utils/store';
require('../command/initalApi')

class AppComponent extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}
export default AppComponent