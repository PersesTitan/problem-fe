import React, {Component} from "react";

class CreateTool extends Component {
    state = {
        information: []
    }

    id = 0;
    onCreate = (data) => {
        const information = this.state.information;
        this.setState({
            information: information.concat( {id: this.id++, ...data} )
        })
    }

    onRemove = (id) => {
        const information = this.state.information;
        this.setState({
            information: information.filter(info => info.id !== id)
        })
    }

    onUpdate = (id, data) => {
        const information = this.state.information;
        this.state.setState({
            information: information.map(
                info => id === info.id
                    ? {...info, ...data}
                    : info)
        })
    }

    getSize = () => {
        return this.state.information.length;
    }

    // 공용 로직
    static iconList = [
        {value: 1, icon1: "①", icon2: "❶"}, {value: 2, icon1: "②", icon2: "❷"}, {value: 3, icon1: "③", icon2: "❸"},
        {value: 4, icon1: "④", icon2: "❹"}, {value: 5, icon1: "⑤", icon2: "❺"}, {value: 6, icon1: "⑥", icon2: "❻"},
        {value: 7, icon1: "⑦", icon2: "❼"}, {value: 8, icon1: "⑧", icon2: "❽"}, {value: 9, icon1: "⑨", icon2: "❾"},
        {value: 10, icon1: "⑩", icon2: "❿"}, {value: 11, icon1: "⑪", icon2: "⓫"}, {value: 12, icon1: "⑫", icon2: "⓬"},
        {value: 13, icon1: "⑬", icon2: "⓭"}, {value: 14, icon1: "⑭", icon2: "⓮"}, {value: 15, icon1: "⑮", icon2: "⓯"},
        {value: 16, icon1: "⑯", icon2: "⓰"}, {value: 17, icon1: "⑰", icon2: "⓱"}, {value: 18, icon1: "⑱", icon2: "⓲"},
        {value: 19, icon1: "⑲", icon2: "⓳"}, {value: 20, icon1: "⑳", icon2: "⓴"},
    ];

    makeItem = (state, onAnswerChange) => {
        const {count, list, answer} = state;
        const listValue = [];

        for (let i = 0; i<count; i++) {
            const formName = "check" + i;
            listValue.push(
                <div>
                    <label form={formName}>
                        <input id={formName} type={"checkbox"} name={"answer"} value={answer.has(i)}/>
                        {CreateTool.iconList[i].icon1}
                    </label>
                    <input id={i.toString()} name={"answerInput"} onChange={onAnswerChange} value={list[i]}/>
                </div>
            );
        }
        return listValue;
    }

    makeTR = (title, placeholder, name, value, onChange,
              {
                  type=undefined,
                  min=undefined,
                  max=undefined,
                  checked=undefined,
                  disabled=undefined
              } = {}) => {
        return (
            <tr>
                <td>{title}</td>
                <td>
                    <input placeholder={placeholder}
                           name={name} value={value}
                           onChange={onChange}
                           min={min} max={max}
                           type={type} checked={checked}
                           disabled={disabled}/>
                </td>
            </tr>
        )
    }
}

export default CreateTool;