import React, {useState} from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {deviceWidth, rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

interface Props {
  data: {id: string; image: ImageSourcePropType}[];
}

const NoteImagesCarousel = ({data}: Props) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={rw(deviceWidth) - rw(48)}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={setCurrentItemIndex}
        renderItem={({index}: {index: number}) => (
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Image source={data[index].image} style={styles.image} />
          </View>
        )}
      />
      <View style={[styles.indicatorsContainer]}>
        {new Array(data.length).fill(0).map((_: number, index: number) => {
          return (
            <View
              key={index.toString()}
              style={[
                styles.indicator,
                {marginLeft: index === 0 ? 0 : rw(6)},
                currentItemIndex === index
                  ? styles.selectedIndicator
                  : styles.nonSelectedIndicator,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 16,
  },
  indicatorsContainer: {
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: rw(4),
    paddingHorizontal: rw(8),
    flexDirection: 'row',
    bottom: rh(8),
  },
  indicator: {
    width: rw(10),
    height: rw(10),
    backgroundColor: 'red',
    borderRadius: 10,
  },
  nonSelectedIndicator: {
    backgroundColor: '#D9D9D9',
  },
  selectedIndicator: {
    backgroundColor: colors.primary,
  },
});

export default NoteImagesCarousel;
