import React from 'react';
import {Dimensions, StyleSheet, Platform, View, ViewStyle} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {moderateScale} from 'react-native-size-matters';

import {colors} from '../theme/colors';

const windowWidth = Dimensions.get('window').width;
const margin = moderateScale(15);
const borderRadius = moderateScale(10);
let fullWidth = windowWidth - margin * 2;

if (fullWidth <= 0) {
  fullWidth = moderateScale(100);
}

type StylePropTypes = {
  mainViewStyle: ViewStyle;
  innerViewStyle: ViewStyle;
};

const styles = StyleSheet.create<StylePropTypes>({
  mainViewStyle: {
    backgroundColor: colors.dark,
  },
  innerViewStyle: {
    backgroundColor: colors.dark,
    margin,
  },
});

// Reusable function to create Rect component
const createRect = ({
  x = 0,
  y = 0,
  rx = borderRadius,
  ry = borderRadius,
  width = '46%',
  height = '200',
}: {
  x?: number;
  y?: number | string;
  rx?: number | string;
  ry?: number | string;
  width?: number | string;
  height?: number | string;
} = {}): JSX.Element => (
  <Rect
    x={moderateScale(x)}
    y={y}
    rx={rx}
    ry={ry}
    width={width}
    height={height}
  />
);

export const HomeLoader: React.FC = () => (
  <View style={styles.mainViewStyle}>
    <View style={styles.innerViewStyle}>
      <ContentLoader
        backgroundColor={colors.primary}
        foregroundColor={colors.light}>
        {createRect({
          y: '20',
          rx: '4',
          ry: '4',
          width: Platform.OS === 'ios' ? fullWidth : fullWidth - 3,
          height: '50',
        })}
        {createRect({
          y: '100',
        })}
        {createRect({
          x: 183,
          y: '100',
        })}
        {createRect({
          y: '320',
        })}
        {createRect({
          x: 183,
          y: '320',
        })}
        {createRect({
          y: '540',
        })}
        {createRect({
          x: 183,
          y: '540',
        })}
      </ContentLoader>
    </View>
  </View>
);
