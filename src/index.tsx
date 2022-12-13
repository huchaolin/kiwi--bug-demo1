import React, { Component } from 'react';
import ReactDom from 'react-dom';


class RootComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                测试用文字
            </div>
        );
    }
}

ReactDom.render(<RootComponent></RootComponent>, document.getElementById('root'));
