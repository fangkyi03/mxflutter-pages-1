/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import { Container } from 'next/app'
import React from 'react'
import './app.less'
require('../command/initalApi')

var window = {}
class AppComponent extends React.Component {

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