// react
import * as React from 'react'
import Head from 'next/head'
import NoSSR from 'react-no-ssr'
import App, { Container } from 'next/app'
import withGA from 'next-ga'
import Router from 'next/router'
import NProgress from 'nprogress'
import { DFPManager, DFPSlotsProvider } from 'react-dfp'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Advertisement from '../components/Advertisement.jsx'
import Sidekick from '../components/Sidekick.jsx'

import { request } from '../utilities/app.utilities.js'

import ascii from '../utilities/ascii'

// sass
import '../styles/sass/app.sass'
import '../styles/css/nprogress.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Takeover from '../components/Takeover.jsx'

Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Static menu data to avoid API dependencies - matching expected structure
    let footer = {
      items: [
        {
          id: 'news',
          title: 'News',
          url: '/category/news',
          classes: '',
          children: [
            { title: 'Campus', url: '/category/campus', classes: '', type: 'category' },
            { title: 'Sports', url: '/category/sports', classes: '', type: 'category' },
            { title: 'Opinion', url: '/category/opinion', classes: '', type: 'category' }
          ]
        },
        {
          id: 'arts',
          title: 'Arts',
          url: '/category/arts',
          classes: '',
          children: [
            { title: 'Culture', url: '/category/culture', classes: '', type: 'category' },
            { title: 'Movies', url: '/category/movies', classes: '', type: 'category' },
            { title: 'Music', url: '/category/music', classes: '', type: 'category' }
          ]
        }
      ]
    }

    let social = {
      items: [
        { title: 'Facebook', url: '#', classes: 'social-facebook', type: 'custom' },
        { title: 'Twitter', url: '#', classes: 'social-twitter', type: 'custom' },
        { title: 'Instagram', url: '#', classes: 'social-instagram', type: 'custom' }
      ]
    }

    let header = {
      items: [
        {
          title: 'News',
          url: '/category/news',
          type: 'category'
        },
        {
          title: 'Sports',
          url: '/category/sports',
          type: 'category'
        },
        {
          title: 'Arts',
          url: '/category/arts',
          type: 'category'
        },
        {
          title: 'Opinion',
          url: '/category/opinion',
          type: 'category'
        },
        {
          title: 'Donate',
          url: '/donate',
          type: 'custom'
        }
      ]
    }

    let description = 'The Diamondback is the independent student-run newspaper at the University of Maryland.'

    return {
      pageProps,
      menus: {
        footer: footer,
        social: social,
        header: header
      },
      description
    }
  }

  componentDidMount() {
    console.log('%c' + ascii, 'color: rgba(229, 29, 55, 1);')
    DFPManager.refresh()
    DFPManager.setCollapseEmptyDivs(true)
  }

  render() {
    const { Component, pageProps, menus, description } = this.props

    return (
      <Container>
        <Head>
          <title key='title'>The Diamondback</title>
          <meta key='description' name='description' content={description} />
          <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta key='og:title' property='og:title' content='The Diamondback' />
          <meta key='og:description' property='og:description' content={description} />
          <meta key='og:image' property='og:image' content='/static/images/article-fallback.png' />
          <meta key='twitter:card' name='twitter:card' content='summary_large_image' />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8' />
        </Head>
        {/* <FeedbackBar /> */}
        <DFPSlotsProvider dfpNetworkId='123934970' >
          <NoSSR>
            <Takeover />
          </NoSSR>
          <Header menu={menus.header} />
          <br />
          <div className='advertisments'>
            <div className='container'>
              <Advertisement path='728x90_Banner_A' size={[728, 90]} mode='desktop' />
              <Advertisement path='300x50_Mobile_Header' size={[300, 50]} mode='mobile' />
            </div>
          </div>

          <Component {...pageProps} />
          <Advertisement path='300x50_Mobile_Footer' size={[300, 50]} mode='mobile' />
          <Advertisement path='728x90_Banner_E' size={[728, 90]} mode='desktop' />
          <Footer footer={menus.footer} social={menus.social} />
        </DFPSlotsProvider>
      </Container>
    )
  }
}

export default withGA('UA-34401991-9', Router)(MyApp)
