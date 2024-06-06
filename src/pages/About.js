// In about page I am going to fetch my details from github and display it here
import User from "./User";
import UserClass from "./UserCLass";
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor is called");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount is called ");
  }

  render() {
    // console.log("Parent render is called");

    return (
      <div>
        <h1>This is About Page</h1>
        <UserClass name="User1" location="US" />
      </div>
    );
  }
}

export default About;



/* const About = () => {
  const name = 'Subhabrata Ghoshal';
  const location = 'Kolkata';
  return(
    <div>
      <h1>This is About Page</h1>
      <User name={name} location={location}/>
      <UserClass name={name} location={location}/>
    </div>
  );
};

export default About; */
