import React, { Component } from 'react'
import Link from 'next/link'
import Waypoint from 'react-waypoint';

import { request } from '../utils/fetch.js'
import { GET_NEWS } from '../constants/api.js'
import { formatNewsList } from '../utils/format.js'

import Head from '../components/Head'
import NewsItem from '../components/NewsItem'
import Loading from '../components/Loading'
import { Container, Main, Sider } from '../components/layout'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'xxx',
      list: []
    }
    this.loadMore = async () => {
      const length = this.props.list.length + this.state.list.length
      const params = {
        page: (length / 20) + 1,
      }
      const data = await request(GET_NEWS, params)
      list = data.body.result
      this.setState({
        list: this.state.list.concat(formatNewsList(list))
      })
    }
  }
  render(){
    const { list = [] } = this.props
    const { list: more = [] } = this.state
    return (<div>
    <Head />
    <Container>
      <Main>
        {
          list.concat(more).map(i => <NewsItem {...i} />)
        }
        <Waypoint
          onEnter={this.loadMore}
          onLeave={() => {
            console.log('onLeave');
          }}
        >
          <span><Loading /></span>
        </Waypoint>
      </Main>
      <Sider>sider</Sider>
    </Container>
</div>)
  }
}

let list = []

Index.getInitialProps = async ({ req }) => {
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

export default Index
