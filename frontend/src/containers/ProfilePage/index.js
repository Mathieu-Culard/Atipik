import { connect } from 'react-redux';
import ProfilePage from 'src/pages/ProfilePage';

import { setBreadcrumbs } from 'src/actions/utils';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  setBreadcrumbs: (newValue) => dispatch(setBreadcrumbs(newValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
