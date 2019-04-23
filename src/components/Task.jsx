import React, { useState } from 'react';
import './task.scss';

const Task2 = (props) => {
    console.log(props.data.text)
    const [ newText, setNewText ] = useState(props.data.text);
    const handleChange = ev => (
        setNewText(ev.target.value)
    );

    const isEnter = ev => {
        if (ev.keyCode === 13){
            edit(ev);
        }
    };

    const edit = (ev) => {
        let editedTask = {
            ...props.data,
            text: newText,
        };

    }
   const markAsCompleted = ()  => {
            let editedTask = {
                ...props.data,
                completed: !props.data.completed,
            };
              props.updateTask(editedTask);
          }

    return (
        <div className={'task ' +(props.data.completed ? 'completed' : '')}>
        <div 
        className='text' 
        value={newText} 
        onChange={handleChange} 
        onKeyUp={isEnter} 
        onBlur={edit} />
       {newText}

        
        <div className='actions'>
            <button onClick={() => props.deleteTask(props.data.id)}>Delete</button>
            <button onClick={markAsCompleted}>Completed</button>
        </div>
    </div>
    );
}

// class Task extends React.Component {
//     state = {
//         newText: props.data.text
//     }

//     handleChange = (ev) => {
//         this.setState({ newText: ev.target.value});
//     }
//     isEnter = ev => {
//         if(ev.keyCode === 13) {
//             this.edit(ev)
//             }
//          }
//          edit = (ev) => {
//              let editedTask = {
//                  ...this.props.data,
//                  text: newText
//              }
//              this.props.updateTask(editedTask);
//              ev.target.blur();
//          }
//   markAsCompleted = ()  => {
//     let editedTask = {
//         ...props.data,
//         completed: props.data.completed,
//     };
//       props.updateTask(editedTask);
//   }
//     render() {
//         return (
//             <div className={'task ' +(props.data.completed ? 'completed' : '')}>
//                 <div className='text' value={state.newText} onChange={handleChange} onKeyUp={isEnter} onBlur={edit} />
               

                
//                 <div className='actions'>
//                     <button onClick={() => props.deleteTask(props.data.id)}>delete</button>
//                     <button onClick={markAsCompleted}>completed</button>
//                 </div>
//             </div>
//             )
//     }
// }

export default Task2;

// git add .
// git log
// git commit -m