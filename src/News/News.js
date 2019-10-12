import React, { Component } from "react";
import classes from "./News.module.css";
import Article from "./Article/Article";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.onClickIncrease = this.onClickIncrease.bind(this);
  }

  onClickIncrease() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    const data = this.props.data;
    let newsTemplate;
    if (data.length > 0) {
      newsTemplate = data.map((item, index) => {
        return (
          <div className={classes.article} key={index}>
            <Article data={item} />
          </div>
        );
      });
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>;
    }


    return (
      <React.Fragment>
        <div className={classes.news} onClick={this.onClickIncrease}>
          {newsTemplate}
        </div>
        <strong
          className={
            data.length > 0 ? `${classes.newsCount}` : `${classes.none}`
          }
        >
          Всего новостей: {data.length}
        </strong>

        <p>Счетчик кликов: {this.state.counter}</p>
      </React.Fragment>
    );
  }
}

export default News;
