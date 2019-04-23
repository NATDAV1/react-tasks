import React, { Component } from 'react';
import './board.scss';
import Task from '../Task.jsx';


class Board extends Component {
    state = {
        newTaskText: '',

        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    };

    inputTasks = React.createRef();

    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    addTask = text => {
        text = text.trim();
        if (text) {
            let newTask = {
                id: Date.now(),
                createAt: new Date(),
                text,
                completed: false,
            };
            this.setState({
                tasks: [newTask, ...this.state.tasks],
                newTaskText: '',
            }, () => {
                this.inputTasks.current.focus();
            });
        }
    };

    editTask = task => {
        task = {
            ...task,
            updatedAt: new Date(),
        };

        this.setState({
            tasks: this.state.tasks.map(_task => (_task.id === task.id ? task : _task)),
        });
    };

    removeTask = id => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id),
        });
    };

    handleChange = ev => {
        this.setState({ newTaskText: ev.target.value });
    };

    handleKeyUp = (ev) => {
        if (ev.keyCode === 13) {
            this.addTask(ev.target.value)
        }
    };


    render() {
        // console.log(this.props.match.params.id)
        return (
            <div className='board'>
                <header>
                    <input 
                    type='text' 
                    placeholder='add task' 
                    onKeyUp={this.handleKeyUp} 
                    onChange={this.handleChange} 
                    value={this.state.newTaskText}
                    ref={this.inputTasks} 
                    />
                    <button onClick={() => this.addTask(this.inputTasks.current.value)}>Create!</button>
                </header>
                <main className='tasks'>
                    {this.state.tasks.map(task => (
                        <Task 
                        data={task} 
                        deleteTask={this.removeTask} 
                        key={task.id}
                        updateTask={this.editTask} />
                    ))}
                </main>
            </div>
        );
    }
}

export default Board;