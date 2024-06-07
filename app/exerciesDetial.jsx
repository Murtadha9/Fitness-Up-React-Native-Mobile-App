
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const ExerciseDetail = () => {
    const item = useLocalSearchParams();
    const router = useRouter();

    return (
        <View className='flex flex-1 bg-sky-100'>
            <View className='shadow-md bg-neutral-200 rounded-b-[40px]'>
                <Image 
                    source={{ uri: item.gifUrl }}
                    contentFit='cover'
                    style={{ width: wp(100), height: wp(100) }}
                    className='w-full rounded-b-[40px]'
                />
            </View>

            <TouchableOpacity 
                onPress={() => router.back()}
                className='mx-2 absolute rounded-full mt-2 right-0'
            >
                <MaterialCommunityIcons name="close" size={hp(4.5)} color="#7DD3FC" />
            </TouchableOpacity>

            {/* Details */}
            <ScrollView 
                className='mx-4 space-y-2 mt-3'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
            >
                <Animated.Text entering={FadeInDown.duration(300).springify()}
                    style={{ fontSize: hp(3.5) }}
                    className='font-bold tracking-wide text-neutral-800'
                >
                    {item.name}
                </Animated.Text>

                <Animated.Text entering={FadeInDown.delay(100).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className='tracking-wide text-neutral-800'
                >
                    Equipment <Text className='font-bold text-neutral-800'>{item?.equipment}</Text>
                </Animated.Text>

                <Animated.Text entering={FadeInDown.delay(200).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className='tracking-wide text-neutral-800'
                >
                    Secondary Muscle <Text className='font-bold text-neutral-800'>{item?.secondaryMuscle}</Text>
                </Animated.Text>

                <Animated.Text entering={FadeInDown.delay(300).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className='tracking-wide text-neutral-800'
                >
                    Target Muscle <Text className='font-bold text-neutral-800'>{item?.target}</Text>
                </Animated.Text>

                <Animated.Text entering={FadeInDown.delay(400).duration(300).springify()}
                    style={{ fontSize: hp(3) }}
                    className='font-bold tracking-wide text-neutral-800'
                >
                    Instructions
                </Animated.Text>
                {item.instructions && item.instructions.split(',').map((instruction, index) => {
                    return (
                        <Animated.Text entering={FadeInDown.delay((index+6)*100).duration(300).springify()}
                            key={index}
                            style={{ fontSize: hp(1.7) }}
                            className='tracking-wide text-neutral-800'
                        >
                            {instruction}
                        </Animated.Text>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default ExerciseDetail;
