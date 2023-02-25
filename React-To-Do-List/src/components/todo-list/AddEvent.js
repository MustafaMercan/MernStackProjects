
const AddEvent = ({Events,setEvents}) => {

    const newEvent = (event) => {
        if(event.keyCode === 13)
        {
            if(event.target.value != '')
            {
                setEvents([...Events,event.target.value.toString()]);
                console.log(Events);
                event.target.value = '';
            }
        }
    }
    return(
        <div className="flex mx-5 w-auto h-14 rounded-xl bg-slate-500 my-5">
            <input type="text" placeholder="Add New Event" className="w-full rounded-xl text-center" onKeyDown={newEvent}/>

        </div>
    );

}
export default AddEvent;