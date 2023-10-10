import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Navigation, RootStackParams } from '../navigation/Navigation'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetailsComponent } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params
    console.log(movie.id)

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const { isLoading, cast, fullDetails } = useMovieDetails(movie.id)
    console.log(cast)

    return (

        <ScrollView>
            <View>
                <View style={styles.imageContainer}>

                    <View style={styles.imageBorder}>
                        <Image
                            source={{ uri }}
                            style={styles.posterImage}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>
                    {movie.original_title}
                </Text>

                <Text style={styles.title}>
                    {movie.title}
                </Text>
            </View>

            {
                isLoading
                    ? <ActivityIndicator size={30} color={'red'} />
                    : <MovieDetailsComponent movieFull={fullDetails!} cast={cast} />
            }

            {/* Close Button */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={
                    () => navigation.pop()
                }
            >
                <Icon
                    color='white'
                    name='arrow-back-outline'
                    size={44}

                />
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 16,

        elevation: 12,

        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 16,
        marginTop: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.5
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 16,
        left: 8
    }
});