import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (

        <View style={styles.container}>

            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={{ width: 52, height: 52, borderRadius: 8 }}
                    />
                )
            }

            <View style={styles.actorInfo}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>
                    {actor.name}
                </Text>
                <Text style={{
                    fontSize: 16,
                    opacity: 0.6
                }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.10,
        shadowRadius: 16,

        elevation: 12,

        borderRadius: 8,

        paddingRight: 8,
        height: 52,
        marginHorizontal: 16
    },
    actorInfo: {
        marginLeft: 8,
        paddingTop: 4
    }
});