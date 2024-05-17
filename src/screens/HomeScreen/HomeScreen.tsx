import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, ListRenderItem, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';

import {fetchPostsListAction} from '../../store/actions';
import {setPostsAction} from '../../store/reducer';
import PostCard from '../../common/components/PostCard/PostCard';
import Label from '../../common/components/Label';
import Gradient from '../../common/components/LinearGradient';
import {HomeLoader} from '../../common/components/HomeLoader';
import {LoadingIndicator} from '../../common/components/LoadingIndicator';
import {colors} from '../../common/theme/colors';
import {strings} from '../../common/strings';
import Utility from '../../common/Utility';

import {
  NavigationTypes,
  PostSliceStateTypes,
  PostTypes,
} from '../../types/commonTypes';
import {styles} from './HomeScreen.style';
import SafeArea from '../../common/components/SafeArea';

export const HomeScreen: React.FC<NavigationTypes> = ({navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // Retrieve Posts List, loading status and total posts from the Redux store
  const {posts, loadingStatus, isPostsEndReached} = useSelector(
    (state: {post: PostSliceStateTypes}) => state.post,
  );
  const dispatch = useDispatch();

  const limit = 20; // Number of posts per page
  const itemHeight = moderateScale(200); // Height of a post card

  useEffect(() => {
    /**
      * Fetch the initial page of data when the component mounts.

      * Pagination is utilized to limit the number of items fetched at once,
      improving initial screen rendering time by loading data in smaller chunks.
    **/
    dispatch(fetchPostsListAction({limit}));
  }, [dispatch]);

  // Load more data when the user scrolls to the end of the list
  const loadMoreData = useCallback(() => {
    try {
      // Fetch the next page of data and append it to the existing data
      dispatch(fetchPostsListAction({limit}));
    } catch (error) {
      console.error('Error loading more data:', error);
    }
  }, [dispatch]);

  // Refresh the data when the user pulls down
  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    try {
      // Clear the existing data and fetch the first page
      dispatch(setPostsAction([]));
      dispatch(fetchPostsListAction({limit}));
      setIsRefreshing(false);
    } catch (error) {
      setIsRefreshing(false);
      console.error('Error loading more data:', error);
    }
  }, [dispatch]);

  // Render a single post item
  const renderPostItem: ListRenderItem<PostTypes> = useCallback(
    ({item}) => (
      <PostCard
        postTitle={item.title}
        postId={item.id}
        onPress={() => {
          navigation.navigate('Details', {postId: item.id});
        }}
      />
    ),
    [navigation],
  );

  // Render the list footer with a loading indicator or a message when there is no more data
  const renderFooter = () => {
    if (isPostsEndReached) {
      return (
        <Label
          title={strings.HomeScreen.noMoreData}
          labelStyle={styles.listFooter}
        />
      );
    }
    return (
      <View style={styles.loadingIndicator}>
        <LoadingIndicator
          loading={isPostsEndReached ? false : true}
          color={colors.base}
        />
      </View>
    );
  };

  // Render the logo
  const renderHeader = () => {
    return (
      <Label
        title={strings.HomeScreen.header}
        labelStyle={styles.logoTextStyle}
      />
    );
  };

  return (
    <SafeArea>
      <Gradient>
        {loadingStatus.home && posts.length < 20 && <HomeLoader />}
        <View style={styles.logoStyle}>{renderHeader()}</View>
        <View style={styles.container}>
          <FlatList
            data={posts}
            renderItem={renderPostItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: PostTypes) => Utility.convertToString(item.id)}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
              />
            }
            /**
            * getItemLayout precalculates the layout for each item, improving performance
            by avoiding dynamic measurements during rendering.
          **/
            getItemLayout={Utility.getItemLayout(itemHeight)}
            removeClippedSubviews
            initialNumToRender={20}
            maxToRenderPerBatch={20}
            onEndReached={loadMoreData} // Call `loadMoreData` when the end of the list is reached
            onEndReachedThreshold={0.2} // Load more data when 20% from the end is reached
            ListFooterComponent={renderFooter}
          />
        </View>
      </Gradient>
    </SafeArea>
  );
};
