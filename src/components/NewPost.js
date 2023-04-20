import { useState } from "react";
import classes from './NewPost.module.css';
import axios from "axios";

function NewPost(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [isSaved,setIsSaved] = useState(false)

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsSaved(true)
    axios.post("https://jsonplaceholder.typicode.com/posts",{
      title: enteredTitle
    }).then(response=>{
      let newList = [...props.posts,response.data]
      props.updateList(newList)
      setIsSaved(false)
      setEnteredTitle("")
    }).catch( e => console.log(e))
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button type="submit">{isSaved?'Saving...':'Save'}</button>
    </form>
  )
}

export default NewPost;
