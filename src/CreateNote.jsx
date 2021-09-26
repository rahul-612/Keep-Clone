import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{
   const[expand,setExpand]=useState(false);

    const[note,setNote]=useState({
        title:'',
        content:''
    });

    const inputEvent=(event)=>{
        const {name,value}=event.target;        {/* Object Destructuring */}
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
                
            }
        })
    }

    const addEvent=()=>{
        props.passNote(note)
        // console.log('clicked!');
        setNote({
            title:'',
        content:''
    });

    }

    const expandIt=()=>{
        setExpand(true);
    }

    const backToNormal=()=>{
        setExpand(false);
        
    }
    return(
        <>
            <div className="main_note" onDoubleClick={backToNormal}>
                <form>
                {expand?(
                    <input type="text" value={note.title} onChange={inputEvent} name="title" placeholder="Title"  autoComplete="off"/>
                ):null}
                    <textarea rows="" column="" value={note.content} onChange={inputEvent} name="content" placeholder="Write a note here" onClick={expandIt} />
                {expand?(
                       <Button onClick={addEvent}>
                        <AddIcon class='plus_sign' />
                    </Button>
                 ) :null}
                </form>
            </div>
        </>
    );
}

export default CreateNote;