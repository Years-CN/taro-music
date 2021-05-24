import { View, Image, Text, ScrollView } from '@tarojs/components'
import { useState, useEffect } from 'react'
import http from '../../servers/http'


export default function Ball(props) {
  
  useEffect(() => {
    http.get('/homepage/dragon/ball').then(res => {
      console.log(res);
    })
  })

  return (
    <View>
      <ScrollView>

      </ScrollView>
    </View>
  );
}