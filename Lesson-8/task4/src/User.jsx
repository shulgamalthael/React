import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then(res => res.json())
      .then(data => this.setState({
        user: data
      }))
  }
  render() {
    if (!this.state.user) return null;

    const { avatar_url, name, location } = this.state.user
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    )
  }
}

export default User;