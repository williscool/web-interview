import React, { Component } from "react";

class Performer extends Component {
  render() {
    const { id, name, hero_image_url, category_group } = this.props;

    return (
      <li>
        {id} - {name} - {hero_image_url} - {category_group}
      </li>
    );
  }
}

export default Performer;
