import { View, Text, Button, Alert } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import theme from '../theme/theme'

const AlertScreen = () => {

  const showAlert = () => {
      Alert.alert(
          "title",
          "msg",
          [
              {
                  text: 'Cancel',
                  onPress() {
                      console.log('a')
                  },
                  style: 'cancel'
                },
                {
                    text: 'ok',
                    onPress() {
                        console.log('ok')
                    },
                    style: 'default'
                },
          ],
          {
              cancelable: true,
              onDismiss() {
                  console.log('dismiss');
              }
          }
      )
  }
  const showPrompt = () => {
    Alert.prompt(
      'Estas seguro?'
    )
  }

  return (
    <View style={theme.globalMargin}>
      <HeaderTitle title="AlertScreen"/>
      <Button
        title="mostrar Alerta"
        onPress={showAlert}
      />
      <Button
        title="mostrar Prompt"
        onPress={showPrompt}
      />
    </View>
  )
}

export default AlertScreen