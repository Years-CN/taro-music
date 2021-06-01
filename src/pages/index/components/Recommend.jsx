import { View, Image, Text, ScrollView } from '@tarojs/components'
import './Recommend.scss'


export default function Recommend(props) {
  const scrollStyle = {
    display: 'flex',
    height: '130px',
    margin: '5px 0'
  }
  return (
    <View className="recommend" style=''>
      <View className="reco_title">
        <Text>推荐歌单</Text>
        <Text className="more">更多&gt;</Text>
      </View>
      <ScrollView className='reco_list' style={scrollStyle} scrollX enableFlex='true'>
      {
        props.recommend_list.map(item => 
          <View className="recommend_item" style=''>
            <Image className="recommend_img" src={item.picUrl} style=''/>
            <View className="reco_itemName" style=''>
              {item.name}
            </View>
          </View>
        )
      }
      </ScrollView>
    </View>
    
    
  );
}