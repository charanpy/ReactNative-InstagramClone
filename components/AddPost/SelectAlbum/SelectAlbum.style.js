import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Set_Album_Name: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    marginRight: '4%',
  },
  SelectedImage_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '20%',
    marginTop: '5%',
    marginHorizontal: '2%'
  },
  Camera_Container: {
    flexDirection: 'row',
    paddingRight: 20,
  },
  Left_Container: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: '3%',
    flexDirection: 'row',
  },
  Right_Container: {
    flexDirection: 'row',
  },
  Icon_Container: {
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_Style: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  Icon_Style: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});

export default styles;
