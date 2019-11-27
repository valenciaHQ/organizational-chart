import React from "react";
import { connect } from "react-redux";
import { hide } from "../../../actions/tooltip";

import { Wrapper, Greet, Text, Dismiss } from "./styled";

const Tooltip = props =>
  props.showTooltip && (
    <Wrapper>
      <Greet>Greetings!</Greet>
      <Text>Click the arrow to see the next manager level! </Text>
      <Dismiss onClick={props.hide}>Close me</Dismiss>
    </Wrapper>
  );

const mapStateToProps = state => ({
  showTooltip: state.tooltip
});

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hide())
});

export default connect(mapStateToProps, mapDispatchToProps)(Tooltip);
