import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import { Item } from '../interfaces/interfaces';
import theme from '../theme/theme';

const items: Item[] = [
  {
    name: 'Animations 101',
    icon: '1',
    component: 'Animation101',
  },
  {
    name: 'Animations 102',
    icon: '2',
    component: 'Animation102',
  },
  {
    name: 'Switch',
    icon: '3',
    component: 'SwitchScreen',
  },
  {
    name: 'Alert',
    icon: '4',
    component: 'AlertScreen',
  },
  {
    name: 'Inputs',
    icon: '5',
    component: 'InputScreen',
  },
  {
    name: 'Pull to refresh',
    icon: '6',
    component: 'PullToRef',
  },
];

const Home = () => {
  const ItemSeparator = () => (
    <View 
      style={{
        borderBottomWidth: 5,
        opacity: .4,
        marginVertical: 10
      }}
    />
  )

  return (
    <View style={{flex: 1, ...theme.globalMargin}}>
      <FlatList
        data={items}
        renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones"/>}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default Home;
