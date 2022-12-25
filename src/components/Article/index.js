import React, {Component} from "react";
import './style.css'

class Article extends Component{
    // constructor(props) {
    //     super(props);
    // }

    state = {
        isOpen: this.props.defaultOpenArticle
    }

    render() {
        const title = 'Article id -';
        const body = this.state.isOpen && <section>{this.props.description}</section>

        return(
            <div className='article'>
                <h3>
                    {this.props.title}
                    <button onClick={this.btnClick}>
                        {this.state.isOpen ? 'close': 'open'}
                    </button>
                </h3>
                {body}
                <p className='articleId'>{title} {this.props.id} </p>
            </div>
        );
    }

    btnClick = () => {
        console.log("btnClick");
        this.setState({
            isOpen: !this.state.isOpen
        })
        console.log(this.state.isOpen);
    };
}

export default Article;