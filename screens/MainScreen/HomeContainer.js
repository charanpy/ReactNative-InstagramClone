import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsLoading } from '../../redux-sagas/user/user.selector';
import LoaderHOC from '../Loader/LoaderHOC';
import HomeScreen from './HomeScreen';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading
});

const HomeContainer = compose(
  connect(mapStateToProps),
  LoaderHOC
)(HomeScreen);

export default HomeContainer;
