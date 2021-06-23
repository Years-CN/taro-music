import { View, Image } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import http from '../../servers/http'
import './index.scss'

export default function ListDetail(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    http.get(`/playlist/detail?id=${getCurrentInstance().router.params.id}`).then(res => {
      console.log(res);
      setInfo(res);
    }) 


  }, [])

  return (
    <View className="list_detail">
      {
        info.length === 0 ? "" : 
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
          </View>
        </View>
      }
      
    </View>
  )
}