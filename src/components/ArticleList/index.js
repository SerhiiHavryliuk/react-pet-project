import React, {Component} from "react";
import './style.css';
import Article from "../Article";
import Modal from "../Modal";

class ArticleList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        showModal: this.props.showModal
    }
    render() {
        const myArticles = this.props.articles;
        const title = "Список статей (класовий компонент).";

        return(
            <div>
                <h2> {title} </h2>
                <Modal showModal={this.state.showModal}></Modal>
                <button onClick={this.openModal}> Open Modal </button>
                <p> dssfafd</p>
                <div className="articleList">
                    {
                        myArticles.map((myArticle, i) => {
                            return(
                                <Article
                                    key={myArticle.id}
                                    id={myArticle.id}
                                    title={myArticle.title}
                                    description={myArticle.description}
                                    defaultOpenArticle = {i===0}
                                />
                            );
                        })
                    }
                </div>
            </div>

        );
    }

    openModal = () => {
        console.log(22222);
        console.log(this.state.showModal);

        this.setState({
            showModal: !this.state.showModal
        })
    }
}

export default ArticleList;
