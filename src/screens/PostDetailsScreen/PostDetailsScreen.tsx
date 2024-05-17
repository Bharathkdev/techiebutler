import React, {useEffect} from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';

import {colors, postCardColors} from '../../common/theme/colors';
import Label from '../../common/components/Label';
import {strings} from '../../common/strings';
import Gradient from '../../common/components/LinearGradient';
import {styles} from './PostDetailsScreen.style';
import {PostSliceStateTypes} from '../../types/commonTypes';
import Utility from '../../common/Utility';
import {useDispatch, useSelector} from 'react-redux';
import {LoadingIndicator} from '../../common/components/LoadingIndicator';
import {fetchPostsByIdAction} from '../../store/actions';
import {useNavigation} from '@react-navigation/native';
import SafeArea from '../../common/components/SafeArea';
import {clearSelectedPostAction} from '../../store/reducer';

export const PostDetailsScreen: React.FC<any> = ({route: {params}}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {postId} = params;
  const {selectedPost} = useSelector(
    (state: {post: PostSliceStateTypes}) => state.post,
  );

  const {title, id, body} = selectedPost;
  const backgroundColor = postCardColors[id % postCardColors.length];
  const isSelectedPostLoading = Object.keys(selectedPost).length === 0;

  useEffect(() => {
    dispatch(fetchPostsByIdAction(postId));
  }, [dispatch, postId]);

  return (
    <SafeArea backgroundColor={backgroundColor}>
      <Gradient>
        <LoadingIndicator loading={isSelectedPostLoading} color={colors.base} />

        {!isSelectedPostLoading && (
          <ScrollView
            contentContainerStyle={[
              styles.detailsContainer,
              {backgroundColor},
            ]}>
            <TouchableOpacity
              style={styles.backButtonContainer}
              activeOpacity={0.7}
              onPress={() => {
                dispatch(clearSelectedPostAction());
                navigation.goBack();
              }}>
              <Image
                source={require('../../../assets/images/arrow.png')}
                style={styles.backArrow}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
              <Label
                title={id ? Utility.convertToString(id) : ''}
                labelStyle={styles.postIdText}
              />
              <Label
                title={title ? title : ''}
                labelStyle={styles.title}
                capitalizeFirstLetter={true}
              />
            </View>

            <View style={styles.postDescriptionContainer}>
              <Label
                title={strings.PostDetailsScreen.description}
                labelStyle={styles.descriptionLabel}
              />
              <Label
                title={body ? body : ''}
                labelStyle={styles.postDescriptionText}
                capitalizeFirstLetter={true}
              />
            </View>
          </ScrollView>
        )}
      </Gradient>
    </SafeArea>
  );
};
