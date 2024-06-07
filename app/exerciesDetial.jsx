
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ExerciseDetail = () => {
    const item = useLocalSearchParams();
    const router = useRouter();

    return (
        <View className='flex flex-1'>
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
                <MaterialCommunityIcons name="close" size={hp(4.5)} color="#f43f5e" />
            </TouchableOpacity>

            {/* Details */}
            <ScrollView 
                className='mx-4 space-y-2 mt-3'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
            >
                <Text
                    style={{ fontSize: hp(3.5) }}
                    className='font-bold tracking-wide text-neutral-800'
                >
                    {item.name}
                </Text>

                <Text
                    style={{ fontSize: hp(2) }}
                    className='tracking-wide text-neutral-800'
                >
                    Equipment <Text className='font-bold text-neutral-800'>{item?.equipment}</Text>
                </Text>

                <Text
                    style={{ fontSize: hp(2) }}
                    className='tracking-wide text-neutral-800'
                >
                    Secondary Muscle <Text className='font-bold text-neutral-800'>{item?.secondaryMuscle}</Text>
                </Text>

                <Text
                    style={{ fontSize: hp(2) }}
                    className='tracking-wide text-neutral-800'
                >
                    Target Muscle <Text className='font-bold text-neutral-800'>{item?.target}</Text>
                </Text>

                <Text
                    style={{ fontSize: hp(3) }}
                    className='font-bold tracking-wide text-neutral-800'
                >
                    Instructions
                </Text>
                {item.instructions && item.instructions.split(',').map((instruction, index) => {
                    return (
                        <Text
                            key={index}
                            style={{ fontSize: hp(1.7) }}
                            className='tracking-wide text-neutral-800'
                        >
                            {instruction}
                        </Text>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default ExerciseDetail;
