import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import theme from '../theme/theme';

const PullToRef = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('agasgggg');
      setRefreshing(false);
      setData('Hola');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
        />
      }>
      <View style={theme.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

export default PullToRef;
