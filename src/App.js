import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [input, setInput]=useState();
const [tags,setTags]=useState([])
const [isKeyReleased, setIsKeyReleased] = useState(false);

const onChange=(e)=>{
const {value}=e.target;
setInput(value)
}

const onKeyDown=(e)=>{

  const {key}=e
  const trimmedInput=input.trim()
  console.log(key, trimmedInput);
  if(key=='Enter' && trimmedInput.length && !tags.includes(trimmedInput)){
    setTags([...tags,trimmedInput])
    setInput('')

  }
   if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
     e.preventDefault();
     const tagsCopy = [...tags];
     const poppedTag = tagsCopy.pop();

     setTags(tagsCopy);
     setInput(poppedTag);
     setIsKeyReleased(false)
   }
}
const onKeyUp=()=>{
  setIsKeyReleased(true)
}
const deleteTag=(clickedInd)=>{
  const res=tags.filter((val,i)=>i!=clickedInd)
  setTags(res)
}
console.log("input", tags, isKeyReleased);
  return (
    <div className="container">
      {tags.map((tag, i) => (
        <div className="tag">
          {tag}
          <button onClick={() => deleteTag(i)}>X</button>
        </div>
      ))}
      <input
        value={input}
        placeholder="Enter a tag"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
       
      />
    </div>
  );
}

export default App;
