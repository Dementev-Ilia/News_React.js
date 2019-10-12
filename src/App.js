import React, {Component} from "react";
import "./App.css";
import News from "./News/News";
import Add from "./Add/Add";

const myNews = [
  {
    author: "Саша	Печкин",
    text:
      "В	четчерг,	четвертого	числа в	четыре	с	четвертью	часа.	Четыре	чёрненьких	чумазеньких	чертёнка	чертили чёрными	чернилами	чертёж."
  },
  {
    author: "Просто	Вася",
    text: "Считаю,	что	$	должен	стоить	35	рублей! А	евро	42!"
  },
  {
    author: "Гость",
    text:
      "Бесплатно.	Скачать.	Лучший	сайт	-	http://localhost:3000. На	самом	деле	платно,	просто	нужно	прочитать	очень	длинное	лицензионное соглашение"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: myNews,
      article: {}
    };
  }

  updateData = value => {
    this.setState({
      article: value
    });
  };

  render() {
    let article = this.state.article;
    let news = this.state.news

    let isNotEmptyObject = obj => {
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          return true;
        }
      }
      return false;
    };

    if (isNotEmptyObject(article)) {
      news.push(article);
    }

    return (
      <div className="app">
        <Add updateData={this.updateData} />
        <h2>Новости</h2>
        <News data={news} />
      </div>
    );
  }
}

export default App;
