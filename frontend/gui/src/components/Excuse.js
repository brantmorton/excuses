import React from "react"
import axios from "axios"

// Need to complete set up of logic to separate excuses by category
// Figure out where to put logic
// Readdress randomization with logic in place

class Excuse extends React.Component {

    constructor() {
        super()
        this.state = {
            allExcuses: [],
            randomExcuse: 'Click Generate!',
            reason: 'work',
            workExcuses: [],
            plansExcuses: [],
            myselfExcuses: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.selectReason = this.selectReason.bind(this)
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(response => {
                this.setState({
                    allExcuses: response.data
                })
            })

    }

    handleClick(event) {
        event.preventDefault()

        const randNum = Math.floor(Math.random() * this.state.allExcuses.length)
        const randomExcuseGenerated = this.state.allExcuses[randNum].content
        this.setState({ randomExcuse: randomExcuseGenerated})
    }

    selectReason(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const result = this.state.allExcuses.filter(excuse => excuse.reason.includes('work'))
        console.log(result)
        return(
            <div>
                <div>
                    <h1>I need an excuse for</h1>
                    <select 
                        name="reason" 
                        onChange={this.selectReason} 
                        value={this.state.reason}
                    >
                        <option value="work">Work</option>
                        <option value="plans">Plans</option>
                        <option value="myself">Myself</option>
                    </select>
                </div>
                <h1>{this.state.reason}</h1>
                <h1>{this.state.randomExcuse}</h1>
                <button onClick={this.handleClick}>
                    Generate
                </button>
            </div>
        )
    }
}

export default Excuse