import { StyleSheet } from 'react-native';
import { screenWidth as width, color } from '../../../helper/utils/constants';

const screenWidth = width / 4 - 5;

const styles = StyleSheet.create({
  Image: {
    width: screenWidth,
    height: screenWidth,
    resizeMode: 'cover',
    marginRight: 5,
  },
  Selected_Image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  Text: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  Selected: {
    position: 'absolute',
    top: 2,
    right: 10,
    width: 22,
    height: 22,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Loader: {
    height: '20%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.PRIMARY_DARK_GRAY,
  }
});

export default styles;
