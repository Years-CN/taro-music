import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import http from '../../servers/http'
import './index.scss'
import SongList from './components/songList'

export default function ListDetail(props) {
  const [info, setInfo] = useState([]);

  Taro.setNavigationBarTitle({
    title: '歌单'
  })

  useEffect(() => {
    http.get(`/playlist/detail?id=${Taro.getCurrentInstance().router.params.id}`).then(res => {
      setInfo(res);
      return res;
    })
  }, [])


  return (
    <View className="list_detail">
      <header>
        
      </header>
      {
        info.length === 0 ? "" : 
        <>
          <View className="info"> 
            <Image src={info.playlist.coverImgUrl} className="info_img"/>
            <View className="info_detail">
              <View className="info_name">
                {info.playlist.name}
              </View>
              <View className="avatar">
                <Image src={info.playlist.creator.avatarUrl} className="avatar_img"/>
                <View className="avatar_name">{info.playlist.creator.nickname}</View>
              </View>
              <View className="info_description">
                {info.playlist.description}
              </View>
            </View>
          </View>
          <View style="height:50px"></View>
          <SongList list={info.playlist.tracks}/>
        </>
      }
    </View>
  )
}