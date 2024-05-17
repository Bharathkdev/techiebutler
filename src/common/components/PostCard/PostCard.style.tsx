import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {colors} from '../../theme/colors';
import {commonTheme} from '../../theme';

type StylePropTypes = {
  cardStyle: ViewStyle;
  cardShadowStyle: ViewStyle;
  titleView: ViewStyle;
  postIdText: TextStyle;
  titleText: TextStyle;
};

export const styles = StyleSheet.create<StylePropTypes>({
  cardStyle: {
    flex: 1,
    marginHorizontal: moderateScale(3),
    marginVertical: '1%',
    padding: moderateScale(10),
    height: moderateScale(200),
    borderRadius: moderateScale(15),
    overflow: 'hidden',
    borderColor: colors.primary,
    borderWidth: moderateScale(2),
  },
  cardShadowStyle: {
    shadowColor: colors.base,
    shadowOffset: {
      width: 0,
      height: moderateScale(1),
    },
    shadowOpacity: moderateScale(0.18),
    shadowRadius: moderateScale(1.0),
    elevation: moderateScale(1),
  },
  titleView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  postIdText: {
    fontSize: commonTheme.fontSizes.xxxxl,
  },
  titleText: {
    color: colors.light,
  },
});
