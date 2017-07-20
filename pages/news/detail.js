import { list } from '../index.js'
const Detail = () => <div>detail</div>


Detail.getInitialProps = async ({ query }) => {
  console.log(query)
  const data = list[0]
  // if (list.length === 0) {
  //   const data = await request(GET_NEWS)
  //   list = data.body.result
  //   console.log('list不存在')
  // } else {
  //   console.log('list已存在')
  // }
  return { list: data }
//   const json = await res.json()
}

export default Detail
