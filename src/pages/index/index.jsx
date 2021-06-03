import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import http from '../../servers/http'
import { AtDivider } from 'taro-ui'
import Recommend from './components/Recommend'
import Ball from './components/ball'
import RecoMusic from './components/recoMusic'
import TabBar from '../../components/TabBar/tabBar'
import RecoMv from './components/recoMv'


export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recommend_list: [{1:2}],
      num: 0,
      current: 0,
      ballList: [],
      recoMusic: [],
      recoMv: [],
      recoMvUrl: [],
    }
  }

  componentWillMount () { }

  componentDidMount () {
    let self = this;
    http.get('/personalized?limit=6').then(res => {
      self.setState({
        recommend_list: res.result,
      })
    })

    http.get('/homepage/dragon/ball').then(res => {
      this.setState({
        ballList: res.data
      })
    })

    http.get('/personalized/newsong?limit=12').then(res => {
      this.setState({
        recoMusic: res.result
      })
    })

    // http.get('/personalized/mv').then(res => {
    //   this.setState({
    //     recoMv: res.result
    //   })
    //   // console.log(this.state.recoMv);
    //   const list = this.state.recoMv;
    //   list.map((item) => {
    //     http.get(`/mv/url?id=${item.id}`).then(res => {
    //       let copyUrl = this.state.recoMvUrl;
    //       let nameUrl = {
    //         name: item.name,
    //         url: res.data.url,
    //         pic: item.picUrl,
    //       };
    //       copyUrl.push(nameUrl);
    //       this.setState({
    //         recoMvUrl: copyUrl
    //       })
    //     })
    //     // console.log(this.state.recoMvUrl);
    //   })
    // })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const m_list = this.state.recoMusic;
    const musics = [m_list.slice(0,3),m_list.slice(3,6),m_list.slice(6,9),m_list.slice(9,12)];

    return (
      <View className='index'>
        <View className="header">
          <Text></Text>
        </View>
        <Ball ballList={this.state.ballList}/>
        {/* <AtDivider/> */}
        <Recommend recommend_list={this.state.recommend_list}/>
        <RecoMusic music_list={musics}/>
        {/* <RecoMv mvUrl={this.state.recoMvUrl}/> */}
        <TabBar current={this.state.current}/>
      </View>
    )
  }
}
