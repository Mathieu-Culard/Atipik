import { connect } from 'react-redux';

import ManageAccomodationPanel from 'src/components/ManageAccomodationPanel';

import { changeExtrasOrServices } from 'src/actions/manageAccomodation';
import { setManageAccomodationPanel } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  isManageAccomodationPanelOpen: state.utils.isManageAccomodationPanelOpen,
  content: state.manageAccomodation.panelContent,
  checkedValues: state.manageAccomodation.panelCheckedItems,
  identifier: state.manageAccomodation.panelIdentifier,
});

const mapDispatchToProps = (dispatch) => ({
  setManageAccomodationPanel: (content, identifier) => {
    dispatch(setManageAccomodationPanel(content, identifier));
  },
  changeExtrasOrServices: (identifier, item, checked) => {
    dispatch(changeExtrasOrServices(identifier, item, checked));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageAccomodationPanel);
