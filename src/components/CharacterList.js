import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getData } from "../actionCreators/getData";
import "./CharacterList.css";
import { isDataLoadedSelector } from "../selectors/getData";
import { Link } from "react-router-dom";

export class CharacterList extends PureComponent {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }
  render() {
    const { data, isDataLoaded } = this.props;
    return (
      <div className="root">
        <div>Hello World</div>
        {isDataLoaded &&
          data.map((d, i) => (
            <Link to={`/${i + 1}`}>
              <div key={d.url} className="element">
                {d.aliases[0]}
              </div>
            </Link>
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.getData.data,
    isDataLoaded: isDataLoadedSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getData }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
