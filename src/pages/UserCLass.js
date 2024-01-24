import './User.css';
import React from 'react';

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    // console.log(this.props.name + "constructor is called");
    this.state = {
      userName: "",
      userPhoto: "",
      userBio: ""
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + "componentDidMount is called");
    const data = await fetch("https://api.github.com/users/Subho1011");
    const json = await data.json();
    this.setState({
      userName: json.login,
      userPhoto: json.avatar_url,
      userBio: json.bio
    });
  }

  render() {
    // console.log(this.props.name + "render is called");
    return (
      <div className="user-card">
        <h1>Class-Based Components</h1>
        <img src={this.state.userPhoto} style={{width:"20px", height:"20px"}}/>
        <h1>Name: {this.state.userName}</h1>
        <p>Bio: {this.state.userBio}</p>
      </div>
    );
  }
}

export default UserClass;
