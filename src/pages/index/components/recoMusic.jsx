import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import './recoMusic.scss'

export default function RecoMusic(props) {

  return (
    <View className="recoMusic">
      <View className="reco_title">推荐音乐</View>
      <Swiper >
        {
          props.music_list.map((item, index) => 
            <SwiperItem key={index} className="reco_item">
              <Image className="reco_img" src={item.picUrl}/>
              <View className="reco_name">
                <View>
                  <Text className="song_name">{item.name}</Text>
                  <Text className="song_artists">  -{item.song.artists[0].name}</Text>
                </View>
              </View>
            </SwiperItem>
          )
        }
      </Swiper>
    </View>
  )
}