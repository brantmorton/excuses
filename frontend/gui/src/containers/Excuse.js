import React from "react"
import axios from "axios"
import ExcuseComponent from "../components/ExcuseComponent"

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
            currentCategory: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.selectReason = this.selectReason.bind(this)
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(response => {
                this.setState({
                    allExcuses: response.data,
                    currentCategory: response.data.filter(excuse => excuse.reason.includes('work'))
                })
            })
            
    }


    handleClick(event) {
        event.preventDefault()

        const randNum = Math.floor(Math.random() * this.state.currentCategory.length)
        const randomExcuseGenerated = this.state.currentCategory[randNum].content
        this.setState({ randomExcuse: randomExcuseGenerated})
    }


    selectReason(event) {
        const {name, value} = event.target

        this.setState({
            [name]: value,
            currentCategory: this.state.allExcuses.filter(excuse => excuse.reason.includes(value))
        })
    }


    render() {
        return(
            <ExcuseComponent
                selectReason={this.selectReason}
                handleClick={this.handleClick}
                data={this.state}
            />
        )
    }
}

export default Excuse