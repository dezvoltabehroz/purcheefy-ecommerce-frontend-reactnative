import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import CartTypeButtonsGroup from 'components/buttons/CartTypeButtonsGroup';
import TextField from 'components/fields/TextField';
import CartDetailTile from 'components/tiles/CartDetailTile';
import dayjs from 'dayjs';
import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import defaultStyles from 'utils/defaultStyles';
import {fontSizes, rh, rw} from 'utils/dimentions';
import {colors, fonts} from 'utils/themes';
import {CartType, DashboardStackParamList} from 'utils/types';

interface FormValues {
  searchQuery: string;
}

type Props = NativeStackScreenProps<
  DashboardStackParamList,
  'CartListingScreen'
>;

const CartListingScreen = ({route, navigation}: Props) => {
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();

  const [formState, setFormState] = useState<FormValues>({
    searchQuery: '',
  });
  const [selectedType, setSelectedType] = useState<CartType>(
    route.params.cartType,
  );

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  const getMarked = () => {
    let marked: any = {};
    let date = dayjs(startDate);
    if (endDate === undefined) {
      let dates: any = {};
      dates[startDate!] = {
        startingDay: startDate,
        color: colors.primary,
        textColor: colors.white,
        disabled: true,
      };
      return dates;
    }
    while (date.isBefore(dayjs(endDate).add(1, 'day'))) {
      const formattedDate = dayjs(date).format('YYYY-MM-DD');
      marked[formattedDate] = {
        startingDay: formattedDate == dayjs(startDate).format('YYYY-MM-DD'),
        endingDay: formattedDate == dayjs(endDate).format('YYYY-MM-DD'),
        color: colors.primary,
        textColor: colors.white,
        disabled: true,
      };
      date = date.add(1, 'day');
    }
    return marked;
  };

  const _handleDateSelected = (day: DateData) => {
    if (endDate !== undefined) {
      if (startDate !== undefined) {
        setStartDate(day.dateString);
        setEndDate(undefined);
        return;
      }
    }
    if (startDate == undefined) {
      setStartDate(day.dateString);
      setEndDate(undefined);
      return;
    }
    if (dayjs(day.dateString).isBefore(dayjs(startDate))) {
      // setEndDate(startDate);
      setEndDate(undefined);
      setStartDate(day.dateString);
      return;
    } else {
      setEndDate(day.dateString);
      return;
    }
  };

  const _renderHeader = () => {
    return (
      <View
        style={[
          defaultStyles.paddingHorizontal24,
          defaultStyles.paddingVertical24,
        ]}>
        <View style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
          <View style={defaultStyles.flex1}>
            <TextField
              placeholder="Search here"
              name="searchQuery"
              value={formState.searchQuery}
              onChangeText={_handleChangeText}
              leadingIcon="Search"
            />
          </View>
          <HorizontalSpacer factor={1.5} />
          <TouchableOpacity style={[styles.filterButton]}>
            {getIcon('Filter', {width: rw(24), height: rw(24)})}
          </TouchableOpacity>
        </View>
        {selectedType !== 'Archive' && (
          <>
            <VerticalSpacer factor={3} />
            <CartTypeButtonsGroup
              selectedType={selectedType}
              onPressType={setSelectedType}
            />
            <VerticalSpacer factor={2} />
            <Calendar
              enableSwipeMonths
              markedDates={getMarked()}
              onDayPress={_handleDateSelected}
              markingType="period"
              theme={{
                arrowColor: colors.primary,
                calendarBackground: colors.white,
                monthTextColor: colors.white,
                textMonthFontFamily: fonts.Poppins.regular,
                'stylesheet.calendar.header': {
                  headerContainer: {
                    backgroundColor: colors.primary,
                    borderRadius: 12,
                    paddingLeft: 4,
                    paddingRight: 4,
                  },
                },
              }}
              monthFormat="MMMM yyyy"
            />
          </>
        )}
      </View>
    );
  };

  const _renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <CartDetailTile
        key={index}
        containerStyle={defaultStyles.marginHorizontal24}
        onPress={() => navigation.navigate('CartDetailScreen')}
      />
    );
  };

  return (
    <View style={[defaultStyles.flex1, {backgroundColor: colors.white2}]}>
      <MinimalAppbar
        title={`${selectedType} Carts`}
        showBackIcon
        withElevation
      />
      <FlatList
        data={[1, 2, 3]}
        renderItem={_renderItem}
        ListHeaderComponent={_renderHeader}
        ItemSeparatorComponent={() => <VerticalSpacer factor={1.5} />}
        ListFooterComponent={() => <VerticalSpacer factor={3} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: colors.primary,
    ...defaultStyles.center,
    width: rw(44),
    borderRadius: 8,
    paddingVertical: rh(11.5),
    top: 3,
  },
  customHeader: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: -4,
    paddingVertical: rh(6),
    borderRadius: 16,
  },
  calendarIcon: {
    paddingHorizontal: rw(16),
    paddingVertical: rh(6),
  },
  monthTitle: {
    color: colors.white,
    fontSize: fontSizes.h6,
    top: 1.4,
  },
});

export default CartListingScreen;
