import {View, Text, StyleSheet, Animated, PanResponder} from 'react-native';
import React, {useRef} from 'react';

const Animation102 = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {
          x: 0,
          y: 0,
        },
        useNativeDriver: true,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purple,
          transform: [
            {
              translateX: pan.getLayout().left,
            },
            {
              translateY: pan.getLayout().top,
            },
          ],
        }}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  purple: {
    backgroundColor: '#A856A6',
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Animation102;
