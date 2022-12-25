import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        console.log('tick');
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}

export default Timer;