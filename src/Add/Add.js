import React from "react";
import classes from "./Add.module.css";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      text: "",
      isDisabled: true,
      isAgree: false,
      authorIsEmpty: true,
      textIsEmpty: true
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
  }

  onFieldChange(fieldState, event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    const	next	=	{};
    //наименование состояния поля записано в переменную,
    //т. к. значение передается в виде строки для записи в State создаем новый объект
    //который используем для изменения свойства State
		if	(event.target.value.trim().length	>	0)	{
				next[fieldState]	=	false;
				this.setState(next);
		}	else	{
				next[fieldState]	=	true;
				this.setState(next);
		}
  }

  onSubmit(event) {
    event.preventDefault();
    let author = this.state.author;
    let text = this.state.text;
    let article = {author, text};
    this.props.updateData(article);


    this.setState({
      author: "",
      text: "",
      authorIsEmpty: true,
      textIsEmpty: true
    });
  }

  onCheckRuleClick() {
    this.setState({
      isDisabled: !this.state.isDisabled,
      isAgree: !this.state.isAgree
    });
  }

  render() {
    return (
      <form className={classes.Add}>
        <input
          type="text"
          className={classes.addAuthor}
          name="author"
          placeholder="Ваше имя"
          value={this.state.author}
          onChange={this.onFieldChange.bind(this, "authorIsEmpty")}
        />
        <textarea
          name="text"
          className={classes.addText}
          placeholder="Текст	новости"
          value={this.state.text}
          onChange={this.onFieldChange.bind(this, "textIsEmpty")}
        />
        <label className={classes.addCheckrule}>
          <input
            name="isAgree"
            type="checkbox"
            onChange={this.onCheckRuleClick}
            checked={this.state.isAgree}
          />{" "}
          Я согласен с правилами
        </label>
        <input
          className={classes.sendBtn}
          type="submit"
          value="Добавить новость"
          disabled={
            this.state.isDisabled ||
            this.state.textIsEmpty ||
            this.state.authorIsEmpty
          }
          onClick={this.onSubmit}
        />
      </form>
    );
  }
}

export default Add;
