import {Component} from "react";

class FormTool extends Component {
    state = {
        number: '1',
        title: '',
        score: 1,
        count: 5,
        answer: new Set(),
        list: [],
        auto: true,
    }

    onAnswerChange = (e) => {
        const list = this.state.list;
        list[Number(e.target.id)] = e.target.value;
        this.setState({
            list: list
        });
    }

    // 값이 변경되었을때
    onChange = (e) => {
        const { type, name, value } = e.target;
        this.setState({
            [name]: type === 'checkbox' ? e.target.checked : value
        })
        // 크기가 변경되었을때 리스트 사이즈 변경하는 로직
        if (name === 'count') {
            const list = this.state.list;
            list.length = value;
            this.setState({
                list: list
            })
        }
    }

    errorMessageList = [];
    onSubmit = (e) => {
        e.preventDefault();

        const {number, title, score, list} = this.state;
        // 문제가 있는지 확인하는 로직
        this.errorMessageList.length = 0;
        if (number.toString().trim() === '') this.errorMessageList.push("문제 번호를 입력해주세요.");
        if (title.toString().trim() === '') this.errorMessageList.push("문제 설명을 입력해주세요.");
        if (score <= 0) this.errorMessageList.push("문제 점수가 0점 이하일 수 없습니다.");
        if (list.length === 0) this.errorMessageList.push("정답을 1개 이상 선택해주세요.");
        // 에러 메세지가 있다면 동작 끝내기
        if (this.errorMessageList.length !== 0) {
            this.forceUpdate();
            return;
        }

        const { answer, answerInput } = e.target;
        const answerList = this.state.answer;
        const listValue = [];
        answer.forEach(i => {
            if (i.checked) {
                answerList.add(Number(i.value));
                i.checked = false;
            }
        })
        answerInput.forEach(i => {
            listValue.push(i.value);
            i.value = '';
        })

        this.setState({
            answer: answerList,
            list: listValue
        });

        // 생성하는 로직
        this.props.onCreate(this.state);
        this.setState({
            number: '', title: '',
            score: 1, count: 5,
            answer: new Set(), list: []
        });
    }
}

export default FormTool;