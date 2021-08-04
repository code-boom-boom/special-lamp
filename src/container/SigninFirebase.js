import { Component } from "react";
import { connect } from "react-redux";
import QueueAnim from "rc-queue-anim";

class Signin extends Component {

    // User credentials
    state = {
        email: "demo@example.com",
        password: "test#123"
    }

    render() {
        const { email, password } = this.state;
        const { loading } = this.props;
        return (
            <QueueAnim type="bottom" duration={ 2000 }>
                <div>Sign in page</div>
            </QueueAnim>
        );
    }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
    const { user, loading } = authUser;
    return { user, loading }
};

export default connect(mapStateToProps)(Signin);