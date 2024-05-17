import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {colors} from '../../common/theme/colors';
import {commonTheme} from '../../common/theme';

type StylePropTypes = {
  container: ViewStyle;
  logoTextStyle: TextStyle;
  logoStyle: ViewStyle;
  listFooter: TextStyle;
  loadingIndicator: ViewStyle;
};

export const styles = StyleSheet.create<StylePropTypes>({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(5),
  },
  logoTextStyle: {
    color: colors.base,
    fontSize: commonTheme.fontSizes.xl,
    fontFamily: commonTheme.fonts.bold,
  },
  logoStyle: {
    alignSelf: 'center',
    marginVertical: moderateScale(15),
  },
  listFooter: {
    color: colors.base,
    textAlign: 'center',
    marginVertical: moderateScale(10),
  },
  loadingIndicator: {
    marginVertical: moderateScale(30),
  },
});
