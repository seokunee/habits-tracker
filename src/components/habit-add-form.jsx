import React, { PureComponent } from "react";

class Habitaddform extends PureComponent {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add__input"
          placeholder="Habit"
        ></input>
        <button className="add__btn">Add</button>
      </form>
    );
  }
}

export default Habitaddform;
