import styled from 'styled-components';



export const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
height: 100%;
`

export const Card = styled.div`

display: flex;
background-color: #fff;
border-radius: 16px;
max-width: 1000px;
width: 100%;
margin: 20px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

`

export const Quiz1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
padding: 20px 20px 80px;
`

export const QuizHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 80px;

`

export const QuestionCount = styled.div`
font-weight: bold;
font-size: 12px;
color: #ffc83a;
letter-spacing: 2px;
`

export const Question = styled.div`
color: #000b39;
font-size: 24px;
font-weight: bold;
margin-top: 8px;
`

export const Answers = styled.ul`
margin-top: 40px;
max-width: 600px;
width: 100%; 

`

export const AnswerItem = styled.li`
list-style: none;
padding: 10px;
`

