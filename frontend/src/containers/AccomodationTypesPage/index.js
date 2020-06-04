import { connect } from 'react-redux';
import AccomodationTypesPage from 'src/pages/AccomodationTypesPage';

import { setBreadcrumbs } from 'src/actions/utils';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  setBreadcrumbs: (newValue) => dispatch(setBreadcrumbs(newValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccomodationTypesPage);
