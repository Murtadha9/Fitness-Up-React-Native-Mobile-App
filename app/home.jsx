import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';


const home = () => {
  return (
    <SafeAreaView className='flex flex-1 bg-white space-y-5' edges={['top']}>
      <StatusBar style='dark' />

      {/*pushline and avatar*/}
      <View className='flex-row justify-between items-center mx-5'>

        <View className='space-y-2'>
            <Text style={{fontSize:hp(4.5)}} className='font-bold tracking-wide text-neutral-700' >Ready To</Text>
            <Text style={{fontSize:hp(4.5)}} className='font-bold tracking-wide text-sky-300' >Workout</Text>
        </View>

        <View className='flex- items-center justify-center space-y-2'>
            <Image source={require('../assets/images/avatar.png')} style={{width:wp(10), height:hp(6)}} className='rounded-full' />
            <View style={{height:hp(5.5) , width:hp(5.5)}} className='flex items-center justify-center bg-neutral-200 rounded-full border=[3px] border-neutral-300'>
             <Ionicons name="notifications" size={hp(3)} color="gray" />
            </View>
            
        </View>

      </View>

      {/*Image Slider*/}
      <View>
        <ImageSlider/>
      </View>

      {/*Body Parts*/}
      <View className='flex-1'>
        <BodyParts/>
      </View>
      
    </SafeAreaView>
  )
}

export default home