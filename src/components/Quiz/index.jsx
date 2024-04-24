
import { useState } from 'react'
import { QuestionAnswer } from '../QuestionAnswer'
import { Answers, AnswerItem, QuizHeader, Question, QuestionCount, Container, Card, Quiz1 } from '../Quiz/styles'
import S from '../Quiz/style.module.css'



const QUESTIONS = [
    {

        id: 1,
        question: 'Qual é o meu nome?',
        answers: ['Miguel', 'Luis', 'Matheus', 'Ana'],
        correctAnswers: 'Matheus',
    },

    {

        id: 2,
        question: 'Qual é a minha idade?',
        answers: ['12', '2', '26' ,'32'],
        correctAnswers: '26',
    },

    {
        id: 3, 
        question: 'O que eu sou?',
        answers: ['Desenvolvedor', 'Médico', 'Eletricista', 'Jogador de futebol'],
        correctAnswers: 'Desenvolvedor',
    },

    {

        id: 1,
        question: 'Quem é Daniel?',
        answers: ['Homem de ferro', 'Super man', 'Homem aranha' ,'Homem Formiga'],
        correctAnswers: 'Homem Formiga',

    }


]

export function Quiz() {

    const currentQuestion = QUESTIONS[0]

    const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
    const [isCurrentQuestionAswered, setisCurrentQuestionAswered] = useState(false)
    

    const handleAnswersQuestion = (event, question, answer) =>{

        if(isCurrentQuestionAswered){
            return
        }

        const isCorrectAnswers = question.correctAnswers === answer

        const resultClassName = isCorrectAnswers ? S.correct : S.incorrect
        event.currentTarget.classList.toggle(resultClassName)

        if(isCorrectAnswers){
            setCorrectAnswersCount (correctAnswersCount + 1)
        }

        setisCurrentQuestionAswered(true)
        
    }
    
    return (
        <Container>
            <Card>
                <Quiz1>  
                    <QuizHeader>
                        <QuestionCount> PERGUNTA 1/3</QuestionCount>
                        <Question>{currentQuestion.question}</Question>
                    </QuizHeader>

                    <h1>{correctAnswersCount}</h1>


                    <Answers>
                       {currentQuestion.answers.map(answer => 
                     <AnswerItem key={answer}> <QuestionAnswer answers={answer} question={currentQuestion } handleAnswersQuestion={handleAnswersQuestion}/> </AnswerItem>)}
                       
                    </Answers >
                </Quiz1>
            </Card>

        </Container>
    )
}