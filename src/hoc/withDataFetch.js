import React, { Component } from "react";

export default (endpoint, WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { data: [] };
    }

    componentDidMount() {
      fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          this.setState({ data });
        })
        .catch(err => console.log(err.message));
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};
