import React, { Component, Fragment } from 'react'
import QuestionCard from './QuestionCard'
import FlashNav from './FlashNav'
import Toggle from '../../shared/Toggle'
import { withQuestion } from '../../context/questionContext'
import { Fade } from '../../animations/animations.js'
import './flashStyles.css'


class FlashContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
           questions: [{_id: ''}],
           count: 0
        }
    }

    componentDidMount(){
        this.props.getPublicQuestions(this.props.match.params.sectionId)
            .then(() => {
                this.setState({
                    questions: this.props.currentQuestions
                })
            })
            .catch(err => console.log(err))
    }

    nextQuestion = toggle => {
        if(this.state.count < this.state.questions.length - 1){
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        }
        toggle()
    }

    prevQuestion = toggle => {
        if(this.state.count > 0){
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }
        toggle()
    }

    quit = () => {
        this.setState({
            questions: [{_id: ''}],
            count: 0
        }, () => this.props.history.push('/allstacks'))
    }

    render(){
        const { questions, count } = this.state
        return (
            <div className="flash-container">
                <Toggle render={({toggle, isToggled}) => 
                    <Fragment>
                        <button onClick={this.quit}>Quit</button>
                        <span className="question-count">{`${count + 1} / ${questions.length}`}</span>
                            <div className="question-container">
                                <Fade id={questions[count]._id}>
                                    <QuestionCard currentQuestion={questions[count]} toggle={toggle} isToggled={isToggled} {...this.state}/>
                                </Fade> 
                                <button onClick={ toggle } className="show-answer-btn"> Answer </button>
                                <FlashNav nextQ={() => this.nextQuestion(toggle) } prevQ={() => this.prevQuestion(toggle) }/>
                            </div> 
                    </Fragment>
                }/>
            </div>
        )
    }
}

export default withQuestion(FlashContainer)