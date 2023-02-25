import { DOMElement } from "react";
import RemoveElement from './RemoveElement.js'
const Card = ({Events,unique,EventList,setEventList}) => {
    


    const checkEvent = (event) => {
        const myId = unique.toString();
        //const myEvent = document.querySelector('p');
        const myEvent = document.getElementById(myId);
        if(event.target.checked)
           myEvent.style.textDecoration = "line-through"
        else
            myEvent.style.textDecoration= "none";
    }

    return (
        <div className="flex text-left mx-5 w-auto h-14 rounded-xl bg-slate-500 my-5 ">
            <div className="flex text-left items-center ml-5 mr-2 h-14 rounded-xl w-full justify-between">
                <div className="flex">
                    <input type="checkbox" className="w-4 mr-4" onClick={checkEvent}></input>
                    <p id = {unique}>{Events}</p>
                </div>
                <RemoveElement unique={unique} EventList = {EventList} setEventList = {setEventList}/>
            </div>
        </div>
    );
}
export default Card;