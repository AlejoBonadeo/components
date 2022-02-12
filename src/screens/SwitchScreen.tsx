import {View, Text, Switch, Platform, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

const SiwtchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginTop: 100, marginLeft: 20}}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 3)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10
  },
});

export default SiwtchScreen;
