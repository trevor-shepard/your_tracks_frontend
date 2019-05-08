import React from 'react'

import TrackDataIndex from './TrackDataIndex'

class Splash extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            days: 5,
            
        };
        this.requestCurrentUserStats = this.requestCurrentUserStats.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.props.requestCurrentUserTrackCounts(5)
    }

    requestCurrentUserStats(e) {
        e.preventDefault()
        this.props.requestCurrentUserTrackCounts(this.state.days)
    }

    handleChange(event) {
        return this.setState({[event.target.name]: event.target.value});
      };

    render() {
        let track_index
        console.log(this.props)
        if (this.props.track_data) {
            track_index = <TrackDataIndex track_data={this.props.track_data} />
        }

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
                { track_index }
            </div>
        )
    }
};

export default Splash;