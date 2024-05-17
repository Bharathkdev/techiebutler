import {moderateScale} from 'react-native-size-matters';

type FontSizeName =
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xl20'
  | 'xl22'
  | 'xxl'
  | 'xxxl'
  | 'xxxl34'
  | 'xxxxl'
  | 'xl5';

// Record<K, T>: Useful when you want to create a dictionary or map-like type of same data type.
type FontSizeTypes = Record<FontSizeName, number>;

type FontName = 'light' | 'regular' | 'medium' | 'bold' | 'semiBold';

type FontTypes = Record<FontName, string>;

type CommonThemeTypes = {
  fonts: FontTypes;
  fontSizes: FontSizeTypes;
};

// Common theme object with font families and font sizes
export const commonTheme: CommonThemeTypes = {
  fonts: {
    light: 'Poppins-Light',
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
    semiBold: 'Poppins-SemiBold',
  },
  fontSizes: {
    xs: moderateScale(11),
    s: moderateScale(12),
    m: moderateScale(14),
    l: moderateScale(16),
    xl: moderateScale(18),
    xl20: moderateScale(20),
    xl22: moderateScale(22),
    xxl: moderateScale(24),
    xxxl: moderateScale(30),
    xxxl34: moderateScale(34),
    xxxxl: moderateScale(40),
    xl5: moderateScale(50),
  },
};
