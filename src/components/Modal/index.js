import React, {Component} from "react";
import './style.css';


class ArticleList extends Component {
    render() {
        console.log(1111)
        console.log(this.props.showModal)
        const title = "Modal";

        return(
            <div className={this.props.showModal ? 'openModal': 'closeModal'}>
                <div className='modal'>
                    <p>{this.props.showModal ? 'openModal': 'closeModal'}</p>
                    <h2> {title} </h2>
                </div>
            </div>
        );
    }
}

export default ArticleList;
