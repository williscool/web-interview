import React, { Component } from "react";
import Performer from "./Performer";
import { loadPerformers } from "../lib/performerService";

class performerList extends Component {
  state = {
    performers: []
  };

  componentDidMount() {
    loadPerformers().then(performers => this.setState({ performers }));
  }

  render() {
    const { performers } = this.state;

    return (
      <section className="performerapp">
        <ul className="performer-list">
          {performers.map(performer => (
            <Performer {...performer} />
          ))}
        </ul>
      </section>
    );
  }
}

export default performerList;
