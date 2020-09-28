import React from 'react';

class Mailbox extends React.Component {

    state = {
        unreadMessages: 2
    }  

    render() {

        const {unreadMessages} = this.state;

        return(
            <div className="mailbox">
                <div className="mailbox__text">Messages
        {unreadMessages && <div className="mailbox__count">{this.state.unreadMessages}</div>}
                </div>
            </div>
        )
    }
}

export default Mailbox;