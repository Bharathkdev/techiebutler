import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Provider} from 'react-redux';

import {AppNavigator} from './src/navigation';
import {colors} from './src/common/theme/colors';
import {store} from './src/store';

type StylePropTypes = {
  container: ViewStyle;
};

const styles = StyleSheet.create<StylePropTypes>({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;
