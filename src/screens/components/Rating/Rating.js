import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const Rating = () => {
  const [rating, setRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const starImageFilled = require('../../../assets/images/star_filled.png');
  const starImageCorner = require('../../../assets/images/star_corner.png');

  return (
    <View style={styles.customeRatingContainer}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setRating(item)}>
            <Image
              style={styles.imageStyle}
              source={
                item <= rating
                  ? require('../../../assets/images/star_filled.png')
                  : require('../../../assets/images/star_corner.png')
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  customeRatingContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'cover',
  },
});
export default Rating;
