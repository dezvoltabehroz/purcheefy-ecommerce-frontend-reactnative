import AppText from 'components/AppText';
import SectionHeading from 'components/SectionHeading';
import VerticalSpacer from 'components/VerticalSpacer';
import DashboardAppbar from 'components/appbars/DashboardAppbar';
import SmallTitleIconButton from 'components/buttons/SmallTitleIconButton';
import NewCartTile from 'components/tiles/NewCartTile';
import SimpleCartTile from 'components/tiles/SimpleCartTile';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

const DashboardScreen = () => {
  const _renderItem = () => {
    return <></>;
  };

  const _renderHeader = () => {
    return (
      <View>
        <View
          style={[
            defaultStyles.row,
            defaultStyles.justifyContentSpBt,
            defaultStyles.alignItemsCenter,
          ]}>
          <View>
            <AppText fontWeight="semiBold" style={[defaultStyles.h2_5]}>
              Hamendra
            </AppText>
            <AppText
              style={[
                defaultStyles.body2,
                defaultStyles.textGrey1,
                defaultStyles.lessTextTopMargin,
              ]}>
              {strings.welcomeToSaleStack}
            </AppText>
          </View>
          <SmallTitleIconButton
            title={strings.chooseStore}
            icon="ChevronDown"
            iconProps={{width: rw(16), height: rh(10)}}
          />
        </View>
        <VerticalSpacer factor={2} />
        <NewCartTile title={strings.newCart} value="$3,578" cartCount={15000} />
        <VerticalSpacer factor={2} />
        <SimpleCartTile
          title="Recovered Cart"
          value="$3,578"
          cartCount={5321}
          backgroundColor={colors.secondary}
        />
        <VerticalSpacer factor={2} />
        <SimpleCartTile
          title="Abandoned Cart"
          value="$3,578"
          cartCount={5321}
          backgroundColor="rgba(249, 210, 36, 0.54)"
        />
        <VerticalSpacer factor={3} />
        <SectionHeading heading="Most Recent" trailingText="View All" />
      </View>
    );
  };

  return (
    <SafeAreaView style={[defaultStyles.bgWhite, defaultStyles.flex1]}>
      <View style={styles.appbarContainer}>
        <DashboardAppbar />
        <VerticalSpacer />
        <FlatList
          data={[]}
          renderItem={_renderItem}
          ListHeaderComponent={_renderHeader}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appbarContainer: {
    paddingHorizontal: rw(24),
    paddingVertical: rh(24),
  },
});

export default DashboardScreen;
