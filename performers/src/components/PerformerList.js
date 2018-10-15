import React, { Component } from "react";
import Performer from "./Performer";
import { chunk } from "../lib/utils";
import { loadPerformers } from "../lib/performerService";

const CHUNK_SIZE = 3;

class performerList extends Component {
  state = {
    performers: [],
    performerChunks: []
  };

  componentDidMount() {
    loadPerformers().then(performers => {
      const performerChunks = chunk(
        performers.map(performer => <Performer {...performer} />),
        CHUNK_SIZE
      );
      debugger;
      this.setState({ performers, performerChunks });
    });
  }

  render() {
    const { performers, performerChunks } = this.state;

    return (
      <section className="performerapp">
        <ul className="performer-list">
          {performerChunks.map(c => (
            <li>
              {c} <br />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default performerList;
