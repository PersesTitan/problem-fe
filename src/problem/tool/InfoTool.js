import {Component} from "react";

class InfoTool extends Component {
    state = {
        edit: false,
        answer: new Set(),
        list: []
    }

    onRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    onEdit = () => {
        const edit = this.state.edit;
        this.setState({
            edit: !edit,
        });
    }

    onChange = (e) => {
        const { name, value, type, checked } = e.target;
        // 크기가 변경되었을때 리스트 사이즈 변경하는 로직
        if (name === 'count') {
            const list = this.state.list;
            list.length = value;
            this.setState({
                count: value,
                list: list
            })
        } else if (type === 'checkbox') {
            const answer = this.state.answer;

            if (checked) answer.add(Number(value));
            else answer.delete(Number(value));

            this.setState({
                [name]: checked,
                answer: answer
            })
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    onAnswerChange = (e) => {
        const {id, value} = e.target;
        const list = this.state.list;

        list[Number(id)] = value;
        this.setState({
            list: list,
        })
    }
}

export default InfoTool;