import React from 'react';
import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const MainAppbar = ({
  navigation,
  back,
}: NativeStackHeaderProps) => {
  return (
    <Appbar.Header mode="center-aligned" elevated={true}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={"Nav Demo"} />
      {!back ? (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('SecondScreen')}/>
      ) : null}
    </Appbar.Header>
  );
};

export default MainAppbar;