import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import http from '../../servers/http'
import Recommend from './components/Recommend'
import Ball from './components/ball'
import RecoMusic from './components/recoMusic'
import TabBar from '../../components/TabBar/tabBar'
import RecoProgram from './components/recoProgram'
import RecoMv from './components/recoMv'
import Banner from './components/banner'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recommend_list: [],
      num: 0,
      current: 0,
      ballList: [],
      recoMusic: [],
      recoMv: [],
      recoMvUrl: [],
      recoDj: [],
      recoProgram: [],
      banner: [],
    }
  }

  componentWillMount () { }

  componentDidMount () {
    // this.getRecommendList();
    this.getBall();
    // this.getRecoSong();
    // this.getRecoDj();
    // this.getRecoProgram();
    this.getIndexData();
  }
  //获取推荐歌单
  getRecommendList() {
    http.get('/personalized?limit=6').then(res => {
      this.setState({
        recommend_list: res.result,
      })
    })
  }
  //获取首页圆标
  getBall() {
    http.get('/homepage/dragon/ball').then(res => {
      this.setState({
        ballList: res.data
      })
    })
  }
  //获取推荐音乐
  getRecoSong() {
    http.get('/personalized/newsong?limit=12').then(res => {
      this.setState({
        recoMusic: res.result
      })
    })
  }
  //获取推荐电台
  getRecoDj() {
    http.get('/personalized/djprogram').then(res => {
      this.setState({
        recoDj: res.result
      })
    })
  }
  //获取推荐节目
  getRecoProgram() {
    http.get('/program/recommend').then(res => {
      this.setState({
        recoProgram: res.programs
      })
    })
  }
  //获取首页数据
  async getIndexData() {
    const res = await http.get('/homepage/block/page')
    const data = res.data.blocks;
    this.setState({
      banner: data[0],
      recommend_list: data[1],
      recoMusic: data[2],
      recoMv: data[3],
      recoDj: data[10],
      recoProgram: data[11],
    })
    this.getRecoMv();
  }
  // 获取推荐MV
  getRecoMv() {
    console.log(this.state.recoMv);
    const list = this.state.recoMv.extInfo;
    list.map((item) => {
      http.get(`/mlog/url?id=${item.id}`).then(res => {
        let copyUrl = this.state.recoMvUrl;
        let nameUrl = {
          name: item.resource.mlogBaseData.text,
          url: res.data.resource.content.video.urlInfo.url,
          pic: res.data.resource.content.video.coverUrl,
        };
        copyUrl.push(nameUrl);
        this.setState({
          recoMvUrl: copyUrl
        })
      })
      // console.log(this.state.recoMvUrl);
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    // const m_list = this.state.recoMusic;
    // const musics = [m_list.slice(0,3),m_list.slice(3,6),m_list.slice(6,9),m_list.slice(9,12)];
    
    return (
      <View className='index' style="padding-bottom:130rpx">
        <View className="header">
          <Text></Text>
        </View>
        <Banner banner_list={this.state.banner}/>
        <Ball ballList={this.state.ballList}/>
        <Recommend title="推荐歌单" recommend_list={this.state.recommend_list}/>
        <RecoMusic music_list={this.state.recoMusic}/>
        <RecoMv mvUrl={this.state.recoMvUrl}/>
        <RecoProgram recoDj={this.state.recoDj}/>  
        <Recommend title="推荐视频" recommend_list={this.state.recoProgram}/>
        <TabBar current={this.state.current}/>
      </View>
    )
  }
}
