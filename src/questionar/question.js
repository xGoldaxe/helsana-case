import React, {useState, useEffect, useRef} from 'react'
import healthSvg from '../images/health.svg'
import muscleSvg from '../images/muscle.svg'
import getQuestion from '../lib/questionnaire/getQuestion'
import { useHistory } from "react-router-dom";


function PrintInput({input, onChange}) {
    if(input.type == 'text') {
        return <input type="text" placeholder={input.placeHolder} onChange={onChange}></input>
    }
}

export default function Question() {
    const [questionValue, setQuestionValue] = useState(null)
    const [responseValue, setResponseValue] = useState(null)
    let history = useHistory();


    useEffect(() => {
        setQuestionValue(getQuestion())
    }, [])

    function handleChange(event) {
        setResponseValue(event.target.value)
    }

    function submit(e) {
        e.preventDefault()
        if(questionValue.input.required) {
            if(responseValue !== null && responseValue.length>1) {
                history.push("/");
            }
        } else {
            history.push("/");
        }
    }

    function questionBody(questionValueArg) {
        if(questionValueArg) {
            return  (  
                <div className="register__form">
                    <form className="register__form">
                        <h2 className="register__form__title">{questionValueArg.question}</h2>
                        <PrintInput input={questionValueArg.input} onChange={handleChange}/>
                        <button onClick={submit}>Next</button>
                    </form>
                </div>)
        }
        else {
            return  (  
                <div className="register__form">
                    <form className="register__form">
                        <h2 className="register__form__title">Loading</h2>
                        <button >Next</button>
                    </form>
                </div>)
        }
    }

    return (
        <div className="register">
            {questionValue ? questionBody(questionValue) : questionBody(false)}
            <div className="register__left">
                <h3>Heslana</h3>
                <p>Become healthier, save money</p>
                <div className="register__left__images">
                    {/* <img src={muscleSvg}></img> */}
                </div>
            </div>
        </div>
    )
}