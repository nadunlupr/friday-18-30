import { Component } from 'react';
import axios from 'axios';
import loaderImg from '../assets/images/loader.gif';
import { Link } from 'react-router';

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
                <button onClick={() => this.onViewSummaryClicked()}>
                    View Summary
                </button>
                {
                    this.state.showInfo &&
                    <div>
                        {
                            this.state.description ?
                                <div id="moreInfo"
                                    className="more-info-panel">
                                    <p className="black-text">
                                        {this.state.description}
                                    </p>
                                    <Link to='/lesson'>Go to lesson</Link>
                                </div> :
                                <div>
                                    <img src={loaderImg} width="40px" alt="loading..." />
                                </div>
                        }
                    </div>
                }
            </div>
        );
    }

    onViewSummaryClicked() {
        this.setState(prevState => ({
            ...prevState,
            showInfo: !prevState.showInfo,
            description: undefined
        }));
        this.getDetails();
    }

    getDetails() {
        axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?2015/summer/cmpt/120/${this.props.name}`)
            .then(({ data }) => {
                const {
                    info: {
                        description
                    } = {}
                } = data;
                console.log('result: ', description);
                this.setState(prevState => ({
                    ...prevState,
                    description,
                }));
            })
            .catch(err => console.error('error: ', err));
    }

}

export default LessonCard;