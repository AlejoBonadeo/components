import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Item } from '../interfaces/interfaces'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

interface Props {
    menuItem: Item
}

const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation()
  return (
      <TouchableOpacity
        activeOpacity={.8}
        onPress={() => navigation.navigate( menuItem.component as any)}
      >
            <View>
                <Text>
                    {menuItem.icon} - {menuItem.name}
                </Text>
            </View>
      </TouchableOpacity>
  )
}


export default FlatListMenuItem