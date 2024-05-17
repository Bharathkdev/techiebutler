import React from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';

import Label from '../Label';
import {styles} from './PostCard.style';
import {postCardColors} from '../../theme/colors';
import Utility from '../../Utility';

type PostCardPropTypes = {
  postTitle: string;
  postId: number;
  onPress?: () => void;
  cardStyle?: ViewStyle;
};

const PostCard: React.FC<PostCardPropTypes> = ({
  postTitle,
  postId,
  onPress,
  cardStyle,
}) => {
  // Assign color based on postId
  const backgroundColor = postCardColors[postId % postCardColors.length];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.cardStyle,
        styles.cardShadowStyle,
        cardStyle,
        {backgroundColor},
      ]}>
      <Label
        title={Utility.convertToString(postId)}
        labelStyle={styles.postIdText}
      />
      <View style={styles.titleView}>
        <Label
          title={postTitle}
          labelStyle={styles.titleText}
          capitalizeFirstLetter
          ellipsis={true}
        />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(PostCard);
