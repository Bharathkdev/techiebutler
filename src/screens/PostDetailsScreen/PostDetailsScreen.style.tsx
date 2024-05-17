import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {colors} from '../../common/theme/colors';
import {commonTheme} from '../../common/theme';

type StylePropTypes = {
  postIdText: TextStyle;
  detailsContainer: ViewStyle;
  title: TextStyle;
  postDescriptionContainer: ViewStyle;
  postDescriptionText: TextStyle;
  descriptionLabel: TextStyle;
  titleContainer: ViewStyle;
  backButtonContainer: ViewStyle;
  backArrow: ImageStyle;
};

export const styles = StyleSheet.create<StylePropTypes>({
  detailsContainer: {
    flex: 1,
  },
  postIdText: {
    color: colors.light,
    fontSize: commonTheme.fontSizes.xl5,
    fontFamily: commonTheme.fonts.bold,
  },
  title: {
    color: colors.light,
    fontSize: commonTheme.fontSizes.xl,
  },
  postDescriptionContainer: {
    flex: 7,
    paddingTop: moderateScale(40),
    paddingBottom: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    borderTopLeftRadius: moderateScale(40),
    backgroundColor: colors.dark,
  },
  descriptionLabel: {
    color: colors.base,
    fontSize: commonTheme.fontSizes.xl22,
    marginBottom: moderateScale(10),
  },
  postDescriptionText: {
    fontSize: commonTheme.fontSizes.l,
    fontFamily: commonTheme.fonts.regular,
    color: colors.light,
  },
  titleContainer: {
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(5),
    flex: 3,
  },
  backButtonContainer: {
    padding: moderateScale(10),
    paddingLeft: moderateScale(20),
  },
  backArrow: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
});
