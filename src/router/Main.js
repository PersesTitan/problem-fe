import React from "react";
import './Main.css'
import {Link} from "react-router-dom";

const Like1 = () => {
    return (
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg" className="like-color">
            <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"/>
        </svg>
    );
}

const Like2 = () => {
    return (
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg" className="like-color">
            <path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z"/>
        </svg>
    );
}

// like : true, false (인기도 눌렸는지 확인)
// title : 문제지 이름
// username : 제작자
// subject : 과목
// likeCount : 인기도 갯수
// totalCount : 총 시험 횟수
// problemCount : 문제 갯수
// answerRate : 정답률
const Item = (props) => {
    const like = props.like ? <Like1/> : <Like2/>
    return (
        <fieldset className="item">
            <table style={{color: "white"}}>
                <tr>
                    <th colSpan={2} style={{textAlign: "left", fontSize: "1.3em"}}>
                        {props.title}
                    </th>
                </tr>
                <tr>
                    <th>제작자</th>
                    <td>{props.username}</td>
                    <th>과목</th>
                    <td>{props.subject}</td>
                </tr>
                <tr>
                    <th>인기도{like}</th>
                    <td>{props.likeCount}</td>
                    <th>총 시험 횟수</th>
                    <td>{props.totalCount}</td>
                </tr>
                <tr>
                    <th>문제 갯수</th>
                    <td>{props.problemCount}</td>
                    <th>정답률</th>
                    <td>{props.answerRate}%</td>
                </tr>
            </table>
        </fieldset>
    )
}

const Main = (props) => {
    return (
        <div className="full-width">
            <h3>인기 있는 시험</h3>
            <div className="item-setting">
                <Item like={0} title={"123"} username={"user"} subject={"영어"} likeCount={0} totalCount={0} problemCount={0} answerRate="10"/>
                <Item like={0} title={"123"} username={"user"} subject={"영어"} likeCount={0} totalCount={0} problemCount={0} answerRate="10"/>
                <Item like={0} title={"123"} username={"user"} subject={"영어"} likeCount={0} totalCount={0} problemCount={0} answerRate="10"/>
                <Item like={0} title={"123"} username={"user"} subject={"영어"} likeCount={0} totalCount={0} problemCount={0} answerRate="10"/>
                <Item like={0} title={"123"} username={"user"} subject={"영어"} likeCount={0} totalCount={0} problemCount={0} answerRate="10"/>
            </div>
        </div>
    )
}

export default Main;