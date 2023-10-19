import React from 'react';
import "./Contact.css"
class Contact extends React.Component {
constructor(props) {
super(props);
this.state = {
firstName: "",
lastName: "",
submitted: false,
};
}
handleFirstNameChange = (event) => {
this.setState({ firstName: event.target.value });
};
handleLastNameChange = (event) => {
this.setState({ lastName: event.target.value });
};
handleSubmit = (event) => {
event.preventDefault();
this.setState({ submitted: true });
};
render() {
return (
<div>
<form onSubmit={this.handleSubmit}>
<label>First name:</label>
<input
type="text"
value={this.state.firstName}
onChange={this.handleFirstNameChange}
/>
<br />
<label>Last name:</label>
<input
type="text"
value={this.state.lastName}
onChange={this.handleLastNameChange}
/>
<br />
<button type="submit">Submit</button>
</form>
{this.state.submitted && (
<div>
<h4>Thank you {this.state.firstName} {this.state.lastName}</h4>
</div>
)}
</div>
);
}
}
export default Contact;