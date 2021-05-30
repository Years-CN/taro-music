import { View, Image, Text, ScrollView } from '@tarojs/components'



export default function Recommend(props) {
  const scrollStyle = {
    display: 'flex',
    height: '130px',
    margin: '5px 0'
  }
  return (
    <View className="recommend" style='margin:5px 10px;'>
      <Text>推荐歌单</Text>
      <ScrollView className='reco_list' style={scrollStyle} scrollX enableFlex='true'>
      {
        props.recommend_list.map(item => 
          <View style='width:90px;display:inline-block;margin-right:10px'>
            <Image src={item.picUrl} style='width: 90px;height: 90px;background: #fff;border-radius:5%'/>
            <View style='font-size:11px;overflow: hidden;text-overflow: ellipsis;
              display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;
              white-space:nomal;'>
              {item.name}
            </View>
          </View>
        )
      }
      </ScrollView>
    </View>
    
    
  );
}