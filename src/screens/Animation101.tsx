import { View, StyleSheet, Animated, Button } from 'react-native'
import React from 'react'
import useAnimation from '../hooks/useAnimation'

const Animation101 = () => {
  
  const { fadeIn, fadeOut, opacity, startMoving, position} = useAnimation()

  return (
    <View style={styles.container}>
      <Animated.View 
        style={{...
          styles.purple,
          opacity,
          transform: [{
            translateY: position
          }]
          }}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn()
          startMoving(-100)
        }}
      />
      <Button
        title="Fade Out"
        onPress={fadeOut}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    purple: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
        marginBottom: 20
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})

export default Animation101