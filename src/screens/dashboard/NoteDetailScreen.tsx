import images from 'assets/images';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import NoteImagesCarousel from 'components/carousels/NoteImagesCarousel';
import {ScrollView, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {fontSizes} from 'utils/dimentions';
import {colors} from 'utils/themes';

const NoteDetailScreen = () => {
  return (
    <View style={[defaultStyles.flex1, {backgroundColor: colors.white2}]}>
      <MinimalAppbar title="Note Detail" showBackIcon withElevation />
      <ScrollView
        contentContainerStyle={[
          defaultStyles.paddingHorizontal24,
          defaultStyles.paddingVertical24,
        ]}>
        <NoteImagesCarousel
          data={[
            {id: '1', image: images.noteImage},
            {id: '2', image: images.noteImage},
          ]}
        />
        <VerticalSpacer factor={3} />
        <AppText fontWeight="bold" style={defaultStyles.h6}>
          Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply.
        </AppText>
        <VerticalSpacer />
        <AppText style={styles.description}>
          Thank you for using the Sky Pulse App. Your privacy and the security
          of your personal information are important to us. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your data when
          you use our mobile application. By accessing or using the Crosswind
          App, you consent to the practices described in this policy.
        </AppText>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    color: '#4A4A4A',
    fontSize: fontSizes.body3,
  },
});

export default NoteDetailScreen;
