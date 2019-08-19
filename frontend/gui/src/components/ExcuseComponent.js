import React from "react"

function ExcuseComponent(props) {
    return (
        <div>
            <div>
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
            <h1>{props.data.randomExcuse}</h1>
            <button onClick={props.handleClick}>
                Generate
            </button>
            <h1>{props.data.currentCategory.content}</h1>
        </div>
    )
}

export default ExcuseComponent