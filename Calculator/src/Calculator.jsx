import { useState } from "react"

const Calculator = () => {
    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e) => {
        e.preventDefault()
        if (inputValue === "0")
            setInputValue(e.target.value)
        else
            setInputValue(inputValue + e.target.value)
    }

    const handleClearInputValue = (e) => {
        e.preventDefault()
        setInputValue("0")
    }

    const handleDeleteInputValue = (e) => {
        e.preventDefault()
        if (inputValue.length === 1)
            setInputValue("0")
        else
            setInputValue(inputValue.slice(0, -1))
    }

    const handleCalculation = (e) => {
        e.preventDefault()
        setInputValue(eval(inputValue))
    }
    
    return(
        <div>
            <form>
                <table>
                    <tr>
                        <td colSpan={4}>
                            <input type="text" value={inputValue} style={{width: "100%"}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button value={7} onClick={handleInputValue}> {7} </button>
                        </td>
                        <td>
                            <button value={8} onClick={handleInputValue}> {8} </button>
                        </td>
                        <td>
                            <button value={9} onClick={handleInputValue}> {9} </button>
                        </td>
                        <td>
                            <button value={"C"} onClick={handleClearInputValue}> {"C"} </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button value={4} onClick={handleInputValue}> {4} </button>
                        </td>
                        <td>
                            <button value={5} onClick={handleInputValue}> {5} </button>
                        </td>
                        <td>
                            <button value={6} onClick={handleInputValue}> {6} </button>
                        </td>
                        <td>
                            <button value={"DE"} onClick={handleDeleteInputValue}> &larr; </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button value={1} onClick={handleInputValue}> {1} </button>
                        </td>
                        <td>
                            <button value={2} onClick={handleInputValue}> {2} </button>
                        </td>
                        <td>
                            <button value={3} onClick={handleInputValue}> {3} </button>
                        </td>
                        <td>
                            <button value={"+"} onClick={handleInputValue}> {"+"} </button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} >
                            <button value={0} onClick={handleInputValue} style={{width: "100%"}}> {0} </button>
                        </td>
                        <td>
                        <button value={"."} onClick={handleInputValue}> {"."} </button>
                        </td>
                        
                        <td>
                            <button value={"/"} onClick={handleInputValue}> {"/"} </button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                        <button value={"="} onClick={handleCalculation}  style={{width: "100%"}}> {"="} </button>
                        </td>
                        <td>
                            <button value={"-"} onClick={handleInputValue}> {"-"} </button>
                        </td>
                        <td>
                            <button value={"*"} onClick={handleInputValue}> {"*"} </button>
                        </td>
                        
                    </tr>
                </table>                
            </form>
        </div>
        
    )
}

export default Calculator