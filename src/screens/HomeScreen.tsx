import React, { useEffect } from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import movieDB from '../api/movieDB'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { CommonActions } from '@react-navigation/native'
import { GradientBg } from '../components/GradientBg'

const windowWidth = Dimensions.get('window').width

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()

    const getPosterColors = async (index: number) => {

        const movie = nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

        console.log({ uri })
    }


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }


    return (

        <GradientBg>
            <ScrollView>
                <View
                    style={{
                        marginTop: top + 16
                    }}
                >

                    <Carousel
                        data={nowPlaying}
                        renderItem={
                            ({ item }: any) => <MoviePoster movie={item} />
                        }
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        onSnapToItem={index => getPosterColors(index)}
                    />

                    {/* Peliculas populares */}
                    <HorizontalSlider
                        title='Populares'
                        movies={popular}
                    />

                    {/* Mejores */}
                    <HorizontalSlider
                        title='Mejores'
                        movies={topRated}
                    />

                    {/* Proximamente */}
                    <HorizontalSlider
                        title='Próximamente'
                        movies={upcoming}
                    />


                </View>
            </ScrollView>
        </GradientBg>
    )
}
