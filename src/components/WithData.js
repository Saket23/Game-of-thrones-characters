import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getSingleData } from "../actionCreators/getSingleData";
import { isSingleDataLoaded } from "../selectors/getData";

function mapStateToProps(state) {
  return {
    data: state.getSingleData.data,
    error: state.getSingleData.error,
    isDataLoaded: isSingleDataLoaded(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSingleData }, dispatch);
}

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default function withData(WrappedComponent) {
  class withData extends PureComponent {
    componentDidMount() {
      this.props.getSingleData(this.props.match.params.dataId);
    }
    render() {
      const { error, data, isDataLoaded } = this.props;
      return (
        <div>
          {error ? (
            <div>Not Found</div>
          ) : (
            isDataLoaded && <WrappedComponent {...this.props} />
          )}
        </div>
      );
    }
  }
  return enhance(withData);
}
