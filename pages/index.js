import React from 'react'
import Link from 'next/link'

import { request } from '../utils/fetch.js'
import { GET_NEWS } from '../constants/api.js'
import { formatNewsList } from '../utils/format.js'

import Head from '../components/Head'
import NewsItem from '../components/NewsItem'
import { Container, Main, Sider } from '../components/layout'

const Page = ({ list = [] }) => <div>
    <Head />
    <Container>
      <Main>
        {
          list.map(i => <NewsItem {...i} />)
        }
      </Main>
      <Sider>sider</Sider>
    </Container>

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
  return { list: formatNewsList(list) }
//   const json = await res.json()
}

export default Page
