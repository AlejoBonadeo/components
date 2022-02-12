import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const startMoving = (initPosition: number, duration: number = 300) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };
  return {
    opacity,
    fadeIn,
    startMoving,
    fadeOut,
    position,
  };
};

export default useAnimation;
