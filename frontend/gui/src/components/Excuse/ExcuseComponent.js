import React, {useState, useEffect, useRef} from "react"
import './Excuse.css';
import axios from "axios"
import {TweenLite, Power3} from 'gsap'

function ExcuseComponent() {
    
    const [allExcuses, setAllExcuses] = useState([]);
    const [randomExcuse, setRandomExcuse] = useState('Click Generate')
    const [reason, setReason] = useState('work')
    const [currentCategory, setCurrentCategory] = useState(['work'])
    
    // This hook is to fetch data from the api; points to the 'work' data on mount
    useEffect( () => {
        async function fetchData() {
            const response = await axios.get('http://127.0.0.1:8000/api/')
            setAllExcuses(response.data)
            setCurrentCategory(response.data.filter(excuse => excuse.reason.includes('work')))
        }
        fetchData()
        } ,[])

    
    // This hook uses GSAP on mount
    let wrapper = useRef(null)
    let generatorContainer = useRef(null)
    let excuse = useRef(null)
    
    useEffect(() => {
       TweenLite.to(wrapper, 0, {css: {visibility: "visible"}})
       TweenLite.from(generatorContainer, 1.3, {opacity: 0.5,  x:-1000, rotation: 180, ease: Power3.easeOut})
       TweenLite.from(excuse, 1, {opacity: 0, ease: Power3.easeIn})
    }, [])
    
    // On click, select a random excuse
    const handleClick = event => {
        if (event) event.preventDefault()

        const randNum = Math.floor(Math.random() * currentCategory.length)
        const randomExcuseGenerated = currentCategory[randNum].content
        
        setRandomExcuse(randomExcuseGenerated)

        TweenLite.from(excuse, 0.3, {opacity: 0, x: -100, ease: Power3.easeOut})
    }

    // When reason selection is made, pool only the excuses in the selected category
    const selectReason = event => {
        const {name, value} = event.target

        setCurrentCategory(allExcuses.filter(excuse => excuse.reason.includes(value)))
        setValues({...values, [name]: value})
        setReason(value)
    }

    // initializes state for dropdown values (excuse categories)
    const [values, setValues] = useState({})
    
    
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
                            onChange={selectReason} 
                            value={reason}
                        >
                            <option value="work">Work</option>
                            <option value="plans">Plans</option>
                            <option id="myself" value="myself">Myself</option>
                        </select>
                    </div>
                    <h1 ref={el => excuse = el}>
                        {randomExcuse}
                    </h1>
                    <button onClick={handleClick} 
                        className="btn" 
                    >
                        Generate
                    </button>
                    <h1 className="excuse">{currentCategory.content}</h1>
                </div>
            </div>
        )
    }
    
export default ExcuseComponent


