import React from 'react';
import Card from './Card';
import './List.css';
class List extends React.Component {
    render() {
        return (
            <div className="List-Cards">
                <div></div>
                <Card>
                    {this.props.title}
                    {this.props.content}
                </Card>

            </div>
        )
    }
}
