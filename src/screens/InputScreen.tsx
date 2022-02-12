import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import theme from '../theme/theme';
import useForm from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';

const InputScreen = () => {
 
  const {form, onChange} = useForm({
      name: '',
      email: '',
      phone: '',
      isSubscribed: false
  })
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <ScrollView>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={theme.globalMargin}>
                    <HeaderTitle title="Text Inputs" />
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="Ingrese su nombre"
                    value={form.name}
                    autoCorrect={false}
                    onChangeText={value => onChange(value, 'name')}
                    />
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="Ingrese su email"
                    value={form.email}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={value => onChange(value, 'email')}
                    keyboardType="email-address"
                    />
                    <HeaderTitle title={JSON.stringify(form, null, 5)} />
                    <HeaderTitle title={JSON.stringify(form, null, 5)} />
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="Ingrese su phone"
                    value={form.phone}
                    autoCorrect={false}
                    onChangeText={value => onChange(value, 'phone')}
                    keyboardType="number-pad"
                    />
                    <View>
                        <Text>Subscribe</Text>
                        <CustomSwitch
                        isOn={form.isSubscribed}
                        onChange={value => onChange(value, 'isSubscribed')}
                        />
                    </View>
                    <View style={{ height: 100 }}/>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, .3)',
    marginVertical: 10,
  },
});

export default InputScreen;
