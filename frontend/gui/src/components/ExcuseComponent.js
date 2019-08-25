import React, {useEffect, useRef} from "react"
import '../Excuse.css';
import {TweenLite, Power3} from 'gsap'

function ExcuseComponent(props) {

    let wrapper = useRef(null)
    let generatorContainer = useRef(null)
    let excuse = useRef(null)

    useEffect(() => {
        TweenLite.to(wrapper, 0, {css: {visibility: "visible"}})
        TweenLite.from(generatorContainer, 2, {opacity: 0, x: 100, ease: Power3.easeOut})
        TweenLite.from(excuse, 1.5, {opacity: 0, ease: Power3.easeIn})

    }, [])

    return (
        <div 
        ref={el => wrapper = el}
        className="wrapper"> 
            <div 
            ref={el => generatorContainer = el}
            className="generatorContainer">
                <div className="excuseSelection">
                    <h1>I need an excuse for</h1>
                    <select 
                        name="reason" 
                        onChange={props.selectReason} 
                        value={props.data.reason}
                    >
                        <option value="work">Work</option>
                        <option value="plans">Plans</option>
                        <option value="myself">Myself</option>
                    </select>
                </div>
                <h1 ref={el => excuse = el}>
                    {props.data.randomExcuse}
                </h1>
                <button onClick={props.handleClick} className="btn">
                    Generate
                </button>
                <h1>{props.data.currentCategory.content}</h1>
            </div>
        </div>
    )
}

export default ExcuseComponent