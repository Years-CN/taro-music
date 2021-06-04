import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import './recoMusic.scss'

export default function RecoMusic(props) {
  return (
    <View className="recoMusic">
      <View className="reco_title">推荐音乐</View>
      <Swiper style="height:350rpx">
        {
          props.music_list.map((item, index) => 
            <SwiperItem key={index} className="swiperItem">
              {
                item.map((i, idx) => 
                  <View className="reco_item" key={idx}>
                    <Image className="reco_img" src={i.picUrl}/>
                    <View className="reco_name">
                      <View>
                        <Text className="song_name">{i.name}</Text>
                        <Text className="song_artists">  -{i.song.artists[0].name}</Text>
                      </View>
                    </View>
                  </View>
                )
              }
            </SwiperItem>
          )
        }
      </Swiper>
    </View>
  )
}