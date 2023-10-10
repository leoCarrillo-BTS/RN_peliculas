import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { FullMovieDetails } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface'
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'
import { CastItem } from './CastItem';


interface Props {
    movieFull: FullMovieDetails,
    cast: Cast[]
}

export const MovieDetailsComponent = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View>
                <View style={{
                    marginHorizontal: 16
                }}>

                    {/* Titulo */}

                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Icon
                            name='star-outline'
                            color='grey'
                            size={16}
                        />

                        <Text style={{ marginLeft: 8 }}>
                            {movieFull.vote_average}
                        </Text>

                        <Text style={{ marginLeft: 8 }}>
                            - {movieFull.genres.map(g => g.name).join(', ')}
                        </Text>
                    </View>

                    {/* Sinopsis */}

                    <Text style={styles.header}>
                        Sinopsis
                    </Text>

                    <Text style={{
                        marginTop: 16,
                        fontSize: 16
                    }}>
                        {movieFull.overview}
                    </Text>

                    {/* Presupuesto */}

                    <Text style={
                        styles.header
                    }>
                        Presupuesto
                    </Text>

                    <Text style={{
                        marginTop: 16,
                        fontSize: 20
                    }}>
                        {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                    </Text>
                </View>


                {/* Casting */}
                <View>
                    <Text style={{
                        ...styles.header,
                        marginHorizontal: 16
                    }}>
                        Actores
                    </Text>

                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={
                            ({ item }) => <CastItem actor={item} />
                        }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 16, height: 72 }}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    header: {
        fontSize: 22,
        marginTop: 24,
        fontWeight: 'bold'
    }

})
