import Card from './Card.js'
import AddEvent from './AddEvent.js';
import { useState } from 'react';
const Container = () => {
//<Card Events = {Events} setEvents = {setEvents} />
    const [Events,setEvents] = useState([]);
    return (
        <div>
            <AddEvent Events = {Events} setEvents = {setEvents} />
            
            {
               //Events.map((element,key) => <li key={key}>{element}</li>)
                Events.map((element,key) => <div key = {key}>  <Card Events = {element} unique = {key} EventList = {Events} setEventList = {setEvents}/>  </div>)
            }
        </div>
    );
}
export default Container;