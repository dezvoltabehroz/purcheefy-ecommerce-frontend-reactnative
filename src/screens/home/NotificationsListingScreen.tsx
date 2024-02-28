import {useFocusEffect} from '@react-navigation/native';
import SectionHeading from 'components/SectionHeading';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import AppLoading from 'components/common/AppLoading';
import NotificationTile from 'components/tiles/NotificationTile';
import {notificationsData} from 'data/dummyData';
import {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {Notification} from 'utils/types';

const NotificationsListingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      return () => {
        setIsLoading(true);
        clearTimeout(timeout);
      };
    }, []),
  );

  const _renderItem = ({item}: {item: Notification}) => {
    return (
      <NotificationTile
        notification={item}
        containerStyle={defaultStyles.marginHorizontal20}
      />
    );
  };

  const _renderHeader = () => {
    return (
      <View style={defaultStyles.paddingHorizontal20}>
        <VerticalSpacer factor={2} />
        <SectionHeading
          heading="Recent"
          trailingText="Clear All"
          trailingTextStyle={styles.trailingHeading}
          badgeText="2"
        />
        <VerticalSpacer factor={2} />
      </View>
    );
  };

  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="Notifications" showBackIcon withElevation />
      {isLoading ? (
        <AppLoading />
      ) : (
        <FlatList
          data={notificationsData}
          renderItem={_renderItem}
          ListHeaderComponent={_renderHeader}
          ItemSeparatorComponent={() => <VerticalSpacer factor={2} />}
          ListFooterComponent={() => <VerticalSpacer factor={2} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  trailingHeading: {
    textDecorationLine: 'none',
  },
});

export default NotificationsListingScreen;
