import React, { PureComponent } from "react";
import { connect } from "react-redux";
import WithData from "./WithData";

import "./Character.css";

export class Character extends PureComponent {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <div className="heading">{data.aliases[0]}</div>
        <div className="text">
          <b>Culture :</b> {data.culture}
        </div>
        <div className="text">
          <b>Gender :</b> {data.gender}
        </div>
        <div className="text">
          <b>Born on:</b> {data.born}
        </div>
        <div className="text">
          <b>Born :</b> {data.born}
        </div>
        <div className="text">
          <b>Died :</b> {data.died}
        </div>
        <div className="text">
          <b>Father :</b> {data.father}
        </div>
        <div className="text">
          <b>Mother :</b> {data.mother}
        </div>
        <div className="text">
          <b>Name :</b> {data.name}
        </div>
        <div className="text">
          <b>Spouse :</b> {data.spouse}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.getData.data
  };
}

export default connect(mapStateToProps)(WithData(Character));
