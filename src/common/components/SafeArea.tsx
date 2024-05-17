import React from 'react';
import {
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import {colors} from '../theme/colors';
import {ChildrenTypes} from '../../types/commonTypes';

type StylePropTypes = {
  topSafeAreaStyle: ViewStyle;
  bottomSafeAreaStyle: ViewStyle;
};

const styles = StyleSheet.create<StylePropTypes>({
  topSafeAreaStyle: {
    flex: 0,
  },
  bottomSafeAreaStyle: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});

type SafeAreaPropTypes = {
  backgroundColor?: string;
};

const SafeArea: React.FC<ChildrenTypes & SafeAreaPropTypes> = ({
  children,
  backgroundColor = colors.primary,
}) => {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <>
          <SafeAreaView style={[styles.topSafeAreaStyle, {backgroundColor}]} />
          <SafeAreaView style={styles.bottomSafeAreaStyle}>
            {children}
          </SafeAreaView>
        </>
      ) : (
        <>
          <StatusBar barStyle={'default'} backgroundColor={backgroundColor} />
          {children}
        </>
      )}
    </>
  );
};

export default React.memo(SafeArea);
