import { Button } from '../QuestionAnswer/styles'

export function QuestionAnswer(props) {

    return (
        <Button
        onClick={(event) => props.handleAnswersQuestion(event, props.question, props.answers)}
        
        >
            
          {props.answers}
          
        </Button>
    )


}