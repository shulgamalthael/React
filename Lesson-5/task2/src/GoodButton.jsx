import React from "react";

class GoodButton extends React.Component {
  render() {
    return (
      <button
        className="fancy-button"
        onClick={(event) => alert(event.target.textContent)}
      >Click</button>
    )
  }
}

export default GoodButton;