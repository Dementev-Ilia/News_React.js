import React from "react";
import classes from "./Article.module.css";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  readmoreClick = event => {
    event.preventDefault();
    this.setState({ visible: true });
  };

  render() {
    let author = this.props.data.author;
    let bigText = this.props.data.text;
    let text = bigText.slice(0, 100) + "...";
    let visible = this.state.visible;

    const styleLink = [classes.newsReadmore];


    if (visible || text.length <= 100) {
      styleLink.push(classes.none);
      text = bigText.slice(0, 100);
    }

    return (
      <React.Fragment>
        <p className={classes.newsAuthor}>{author}:</p>
        <p className={classes.newsText}>
          {visible ? bigText : text}
        </p>
        <a
          href="/"
          className={styleLink.join(" ")}
          onClick={this.readmoreClick}
        >
          Подробнее
        </a>
      </React.Fragment>
    );
  }
}

export default Article;
