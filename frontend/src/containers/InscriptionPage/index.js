import { connect } from 'react-redux';
import InscriptionPage from 'src/pages/InscriptionPage';

import { setBreadcrumbs } from 'src/actions/utils';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  setBreadcrumbs: (newValue) => dispatch(setBreadcrumbs(newValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InscriptionPage);
