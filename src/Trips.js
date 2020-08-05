import React from "react";
class Trips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://map-my-trip-example.herokuapp.com/trips")
      .then((res) => res.text())
      .then((result) => {
        console.log(result);
        this.setState({ data: result });
      });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return <div>{data}</div>;
  }
}

export default Trips;
