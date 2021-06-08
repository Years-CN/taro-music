import { View, Swiper, Image, SwiperItem } from '@tarojs/components'
import './banner.scss'

export default function Banner(props) {

  console.log(props.banner_list);
  if(!props.banner_list.extInfo) {
    return(<View></View>); 
  }
  return (
    <View className='banner'>
      <Swiper autoplay={true}>
        {
          props.banner_list.extInfo.banners.map((item, index) => 
            <SwiperItem key={index}>
              <Image src={item.pic}/>
            </SwiperItem>
          )
        }
      </Swiper>
    </View>
  )
}