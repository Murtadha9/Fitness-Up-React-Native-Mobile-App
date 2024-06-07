import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchData } from '../api/exerciseDB'
import { demoExercises } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import ExcerciseList from '../components/ExcerciseList'
import { ScrollView } from 'react-native-virtualized-view'



const Exercices = () => {
    const router=useRouter()
    const item=useLocalSearchParams()

    const [exercices ,setExercices] = useState(demoExercises)

    useEffect(()=>{
        //if(item) getExercies(item.name)
    },[item])
    

    const getExercies=async(bodyPart)=>{
        const data=await fetchData(bodyPart)
        //console.log(data)
        //(data)
        
       

    }


  return (
    <ScrollView>
      <StatusBar style='light' />
        <Image source={item.image}
        style={{width:wp(100), height:hp(45)}}
        className='rounded-b-[40px]'
         />
        <TouchableOpacity
        onPress={()=>router.back()}
            style={{height:hp(5.5) , width:hp(5.5), marginTop:hp(7)}}
            className='bg-sky-300 mx-4 absolute flex justify-center pr-1 items-center rounded-full'>
            <Ionicons name="caret-back-outline" size={hp(4)} color="black" />
        </TouchableOpacity>

        {/*Exercie*/}
        <View className='mx-4 mt-4 space-y-3'>
            <Text style={{fontSize:hp(3)}} className='font-bold text-sky-300' >{item.name} Exercise</Text>
        </View>

        <View className='mb-10'>
            <ExcerciseList data={exercices}/>
        </View>

    </ScrollView>
  )
}

export default Exercices