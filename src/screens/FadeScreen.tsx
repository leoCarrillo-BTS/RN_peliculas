import React, { useRef } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade()

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 8,
                    opacity: opacity,
                    marginBottom: 16
                }}
            />

            <Button
                title='Fade In'
                onPress={
                    fadeIn
                }
            />

            <Button
                title='Fade Out'
                onPress={
                    fadeOut
                }
            />
        </View>
    )
}