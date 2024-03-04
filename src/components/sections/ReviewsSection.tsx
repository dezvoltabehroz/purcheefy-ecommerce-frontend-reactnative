import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import ReviewTile from 'components/tiles/ReviewTile';
import {StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';

const ReviewsSection = () => {
  return (
    <View>
      <View
        style={[
          defaultStyles.row,
          defaultStyles.alignItemsCenter,
          defaultStyles.justifyContentSpBt,
        ]}>
        <AppText fontWeight="semiBold" style={[defaultStyles.h6]}>
          Reviews
        </AppText>
        <AppText style={[defaultStyles.body3Small, styles.text]}>
          View All
        </AppText>
      </View>
      <VerticalSpacer factor={2} />
      {[1, 2, 3].map(d => (
        <View key={d}>
          <ReviewTile />
          <VerticalSpacer factor={2} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'rgba(0, 0, 0, 0.3)',
  },
});

export default ReviewsSection;
