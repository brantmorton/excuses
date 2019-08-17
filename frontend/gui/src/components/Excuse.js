import React from "react"
import axios from "axios"

class Excuse extends React.Component {

    constructor() {
        super()
        this.state = {
            allExcuses: [],
            randomExcuse: 'Click Generate!'
        }
        this.handleClick = this.handleClick.bind(this)
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
        console.log(randomExcuseGenerated)
    }

    render() {
        return(
            <div>
                <h1>{this.state.randomExcuse}</h1>
                <button onClick={this.handleClick}>
                    Generate
                </button>
            </div>
        )
    }
}

export default Excuse