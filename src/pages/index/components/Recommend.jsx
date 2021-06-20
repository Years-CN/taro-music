import { View, Image, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './Recommend.scss'


export default function Recommend(props) {
  const scrollStyle = {
    display: 'flex',
    height: '260rpx',
    margin: '5px 0'
  }

  function goTo(item) {
    console.log(item);
    Taro.navigateTo({
      url: `/pages/listDetail/index?id=${item.resourceId}`
    });
  }

  if(!props.recommend_list.creatives) {
    return(<View></View>); 
  }
  return (
    <View className="recommend" style=''>
      <View className="reco_title">
        <Text>{props.recommend_list.uiElement.subTitle.title}</Text>
        <Text className="more">更多&gt;</Text>
      </View>
      <ScrollView className='reco_list' style={scrollStyle} scrollX enableFlex='true'>
      {
        props.recommend_list.creatives.map(item => 
          <View className="recommend_item" style='' onClick={ () => goTo(item.resources[0])}>
            <Image className="recommend_img" src={item.uiElement.image.imageUrl} style=''/>
            <View className="reco_itemName" style=''>
              {item.uiElement.mainTitle.title}
            </View>
          </View>
        )
      }
      </ScrollView>
    </View>
  );
}