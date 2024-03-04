import {getIcon} from 'assets/icons';
import images from 'assets/images';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import {Image, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rFB, rw} from 'utils/dimentions';

const ReviewTile = () => {
  return (
    <View>
      <View style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
        <Image style={styles.userImage} source={images.user} />
        <HorizontalSpacer />
        <View style={defaultStyles.flex1}>
          <AppText fontWeight="medium" style={[defaultStyles.body2]}>
            Ronald Richards
          </AppText>
          <View style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
            {getIcon('Clock', {width: rw(15), height: rw(15)})}
            <HorizontalSpacer factor={0.5} />
            <AppText
              fontWeight="medium"
              style={[defaultStyles.body4, {top: 1.3}]}>
              13 Sep, 2020
            </AppText>
          </View>
        </View>
        <View>
          <View style={[defaultStyles.row, defaultStyles.alignItemsEnd]}>
            <AppText fontWeight="medium" style={defaultStyles.body2}>
              4.8
            </AppText>
            <HorizontalSpacer factor={0.5} />
            <AppText style={[styles.text, defaultStyles.body4]}>rating</AppText>
          </View>
          <View style={defaultStyles.row}>
            {getIcon('StarFilled', {width: rw(13), height: rw(13)})}
            {getIcon('StarFilled', {width: rw(13), height: rw(13)})}
            {getIcon('StarFilled', {width: rw(13), height: rw(13)})}
            {getIcon('StarFilled', {width: rw(13), height: rw(13)})}
            {getIcon('Star', {width: rw(13), height: rw(13)})}
          </View>
        </View>
      </View>
      <VerticalSpacer />
      <AppText numberOfLines={3} style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui
        quos voluptatibus autem reprehenderit! Facilis consequatur aperiam ex
        illum reiciendis, quia voluptates nam tempora, totam, reprehenderit odio
        exercitationem fuga vitae.
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  userImage: {
    width: rw(40),
    height: rw(40),
    borderRadius: rw(40),
  },
  text: {
    color: 'rgba(0, 0, 0, 0.35)',
    bottom: 2.8,
  },
  description: {
    color: '#8F959E',
  },
});

export default ReviewTile;
