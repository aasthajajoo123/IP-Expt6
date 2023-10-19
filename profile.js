import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import IMG20220815112254 from "./profile.png"
class Profile extends React.Component {
render() {
return (
<div className="container">
<strong><h2>{this.props.name}</h2></strong>
<div className='row'>
<div className='col-md-4'>
<img src={IMG20220815112254} alt="Anushka"/>
</div>
</div>
<p>
</p>
<p>
{this.props.bio}
</p>
<p>
<hr/>
<h2><i>Projects :</i></h2>
<p>
<h4>Healthcare Management System</h4>
<h4>Student App Portal</h4>
<h4>AVTA - Clothing Brand</h4>
</p>
<br/>
<hr/>
<strong><h3><i>Personal Details :</i></h3></strong>
<p>Phone no: 9876543210</p>
<p>Email Id: aasthajajoo2205@gmail.com</p>
<p>LinkedIn: <a href="https://www.linkedin.com/in/aastha-jajoo-a64973247"
target="_blank"><b>https://www.linkedin.com/in/aastha-jajoo-a64973247</b></a></p>
</p>
<p>
<Link to={'/contact'}>Contact Me</Link>
</p>
</div>
);
}
}
class Home extends React.Component {
render() {
const d = { name: "Aastha Jajoo", bio: "Enthusiastic problem solver and lifelong learner." };
return (
<div>
<Profile name={d.name} bio={d.bio} />
</div>
);
}
}
export default Home;