import React from 'react'

class Splash extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            days: 5,
        };
        this.requestCurrentUserStats = this.requestCurrentUserStats.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    requestCurrentUserStats(e) {
        e.preventDefault()
        this.props.requestCurrentUserTrackCounts(this.state.days)
    }

    handleChange(event) {
        return this.setState({[event.target.name]: event.target.value});
      };

    render() {
        return (
            <div>
                <h1>Welcome to YourTracks</h1>
                Days: <input 
                type="number" 
                name="days"
                value={this.state.days}
                onChange={this.handleChange}
                />
                <button onClick={this.requestCurrentUserStats} value="Request" >Request</button>
            </div>
        )
    }
};

export default Splash;