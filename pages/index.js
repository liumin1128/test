import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { request } from '../utils/fetch.js'
import { GET_NEWS } from '../constants/api.js'

import NewsItem from '../components/NewsItem'

const Page = ({ list = [] }) => <div>
    <Head>
      <title>News</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <nav>
    <ul>
      <li><Link prefetch href='/'><a>Home</a></Link></li>
      <li><Link prefetch href='/about'><a>About</a></Link></li>
      <li><Link prefetch href='/contact'><a>Contact</a></Link></li>
    </ul>
  </nav>
    {
      list.map(({
        id,
        title,
        photos
      }) => <NewsItem
        key={id}
        title={title}
        photos={photos}
      />)
    }
</div>

let list = []

Page.getInitialProps = async ({ req }) => {
  if (list.length === 0) {
    const data = await request(GET_NEWS)
    list = data.body.result
    console.log('list不存在')
  } else {
    console.log('list已存在')
  }
  return { list }
//   const json = await res.json()
}

export default Page