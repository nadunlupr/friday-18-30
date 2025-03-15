import { Component } from 'react';
class LessonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
            count: 10,
        }
    }
    render() {
        console.log('*********rerenderingggg*****');
        return (
            <div className="lesson-card">
                <h2>{this.props.name}</h2>
                <div>
                    <p>
                        {this.props.description}
                    </p>
                </div>
                <button onClick={() => this
                    .setState({
                        ...this.state,
                        showInfo: !this.state.showInfo
                    })}>
                    View Summary
                </button>
                {
                    this.state.showInfo &&
                    <div id="moreInfo"
                        className="more-info-panel">
                        <p className="black-text">
                            If you take the first lesson you can do the second one :)
                        </p>
                        <a href="./lesson-page.html">Go to lesson</a>
                    </div>
                }
            </div>
        );
    }
}

export default LessonCard;