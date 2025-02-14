import React from 'react'
class UserClass extends React.Component {

    constructor (props) {
        super(props);
        console.log(props);

        this.state = {
            count: 0,
            count2: 2,
            count3: 3
        }
    };

    

  render() {
    const {name, location, contact, count,count2, count3} = this.props;

    return (

        <div className="user-card">
            <h2>Count:- {this.state.count}</h2>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                })
            }}>Count Increase</button>
            <h2>Name: {name} </h2>
            <h3>Loaction: {location}</h3>
            <h4>Contact: {contact}</h4>
        </div>
    )
  }
}

export default UserClass;