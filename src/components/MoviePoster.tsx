import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/Navigation'


interface Props {
    movie: Movie
    width?: number
    height?: number
}

export const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {


    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={{
                width,
                height,
                marginHorizontal: 4
            }}
            onPress={
                () => navigate('DetailScreen', movie)
            }
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 16,
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 16,

        elevation: 12,
    }
})