import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import './recoMusic.scss'

export default function RecoMusic(props) {
  if(!props.music_list.creatives) {
    return(<View></View>); 
  }

  function goTo(item) {
    console.log(item);
    Taro.navigateTo({
      url: `/pages/listDetail/index?id=${item.resourceId}`
    });
  }

  return (
    <View className="recoMusic">
      <View className="reco_title">
        <Text>推荐音乐</Text>
        <Text className="more">播放</Text>
      </View>
      <Swiper style="height:350rpx">
        {
          props.music_list.creatives.map((item, index) => 
            <SwiperItem key={index} className="swiperItem">
              {
                item.resources.map((i, idx) => 
                  <View className="reco_item" key={idx} onClick={() => goTo(i)}>
                    <Image className="reco_img" src={i.uiElement.image.imageUrl}/>
                    <View className="reco_name">
                      <View className="reco_song">
                        <Text className="song_name">{i.uiElement.mainTitle.title}</Text>
                        <Text className="song_artists">  - {i.resourceExtInfo.artists[0].name}</Text>
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