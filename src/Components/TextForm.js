import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');
    // text = "new Text"; --> // Wrong way to change the state
    // setText("new Text"); --> // Correct way to change the state

    const handleUpClick = () => {
        // console.log( text.toUpperCase() );  --> Try this
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success");
    }
    
    const handleLoClick = () => {
        // console.log( text.toUpperCase() );  --> Try this
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase", "success");
    }
    
    const handleCapitalizeCase = () => {
        const lower = text.toLowerCase();
        setText(lower.charAt(0).toUpperCase() + lower.slice(1));
        props.showAlert("Converted to CapitalizeCase", "success");
    }
    // console.log(handleCapitalizeCase("hello my name is raj"));
    
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "success");
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleClearClick = () => {
        // console.log( text.toUpperCase() );  --> Try this
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change.")  --> Run this to see on the console 
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{color:  props.mode === 'dark'?'white':'black'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style = {{ backgroundColor: props.mode === 'dark' ? 'rgb(32 63 105)' : 'white', color: props.mode === 'dark' ? 'white': 'black' }}></textarea>
                    <button disabled = {text.length === 0} className="btn btn-primary my-3 ms-3" onClick={handleUpClick} >Convert to uppercase</button>
                    <button disabled = {text.length === 0} className="btn btn-primary my-3 ms-3" onClick={handleLoClick} >Convert to lowercase</button>                  
                    <button disabled = {text.length === 0} className="btn btn-primary my-3 ms-3" onClick={handleCapitalizeCase} >Convert to Capitalize-Case</button>                  
                    <button disabled = {text.length === 0} className="btn btn-primary my-3 ms-3" onClick={handleCopy} >Copy Text</button>                    
                    <button disabled = {text.length === 0} className="btn btn-primary my-3 ms-3" onClick={handleExtraSpaces} >Remove Extra Spaces</button>                    
                    <button disabled = {text.length === 0} className="btn btn-primary my-3 ms-3" onClick={handleClearClick} >Clear Text</button>
                </div>
            </div>  

            <div className="container" style={{color:  props.mode === 'dark'?'white':'black'}}>
                <h2>Your text Summary</h2>

                {/*---> The split() method splits a string into an array of substrings.*/}
                
                <p>{ text.split(/\s+/).filter( (element)=>{ return element.length !== 0 } ).length } words and {text.length} characters </p>
                {/* filter ek function return karta hai and if that function returns true then vo element array ke andar rahega else agar false hua then vo array ke andar append nahi hoga. In this case we are seeing spaces */}

                <p>{ 0.008 * text.split(/\s+/).filter( (element)=>{ return element.length !== 0 } ).length} minutes read. </p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>

            </div>

        </>
    );
}
