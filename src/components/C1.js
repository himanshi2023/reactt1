import React,{useState} from "react";
function C1()
{
	const[text,setText]=useState('');
	const counter=(event)=>{
	setText(event.target.value);  }
	return(
	<div><center>
	<h1>Responsive Paragraph Word <br/>Counter</h1>
	<textarea class="input" value={text} cols="50" rows="7" style={{borderRadius:"3px"}} onChange={counter}></textarea>
	</center>
	<p>Word Count :<h4 class="count"> {text.split(" ").length-1}</h4></p></div>
	)
}
export default C1;
