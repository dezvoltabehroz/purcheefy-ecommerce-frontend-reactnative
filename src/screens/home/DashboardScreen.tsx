import AppText from 'components/AppText';
import SectionHeading from 'components/SectionHeading';
import VerticalSpacer from 'components/VerticalSpacer';
import DashboardAppbar from 'components/appbars/DashboardAppbar';
import SmallTitleIconButton from 'components/buttons/SmallTitleIconButton';
import CartDetailTile from 'components/tiles/CartDetailTile';
import NewCartTile from 'components/tiles/NewCartTile';
import SimpleCartTile from 'components/tiles/SimpleCartTile';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

const DashboardScreen = () => {
  const _renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <CartDetailTile
        key={index}
        containerStyle={defaultStyles.marginHorizontal24}
      />
    );
  };

  const _renderHeader = () => {
    return (
      <View style={defaultStyles.paddingHorizontal24}>
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
        <VerticalSpacer />
      </View>
    );
  };

  return (
    <SafeAreaView style={[defaultStyles.bgWhite, defaultStyles.flex1]}>
      <View style={styles.padded}>
        <DashboardAppbar />
      </View>
      <FlatList
        data={[1, 2, 3]}
        renderItem={_renderItem}
        ListHeaderComponent={_renderHeader}
        ItemSeparatorComponent={() => <VerticalSpacer factor={1.5} />}
        ListFooterComponent={() => <VerticalSpacer factor={3} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  padded: {
    paddingHorizontal: rw(24),
    paddingVertical: rh(24),
  },
});

export default DashboardScreen;
