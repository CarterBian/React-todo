import React, {useState} from 'react';

function AddToDo({addTodo}) {
    const [content, setcontent] = useState({content: ''});

    const handleChange = (e) =>{
        setcontent({content: e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(content);
        setcontent({content:''});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add new todo:</label>
                <input type="text" onChange={handleChange} value={content.content}/>
            </form>
        </div>
    );
}
export default AddToDo;