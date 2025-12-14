import {useState} from "react";
import { X } from 'lucide-react';
const App = () => {

  const [title, settitle] = useState('');
  const [notesInfo, setnotesInfo] = useState('');
  const [task, setTask] = useState([])

  const formSubmitted = (e) => {
    e.preventDefault();
    let copyTask = [...task];
    copyTask.push({title,notesInfo});
    setTask(copyTask);
    settitle('');
    setnotesInfo('');
  };

  const deleteNote = (idx)=>{
    let copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }

  return (
    <div className="lg:h-screen min-h-screen  lg:flex  bg-black text-white ">
      <form
        onSubmit={(e) => {
          formSubmitted(e);
        }}
        className="p-10 lg:w-1/2  flex flex-col items-start gap-6 "
      >
        <h1 className="text-6xl font-bold text-center mb-10">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 font-medium outline-none py-2 border-2 rounded w-full"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter Details"
          className="px-5 py-2 h-25 outline-none font-medium border-2 rounded w-full"
          value={notesInfo}
          onChange={(e)=>{
            setnotesInfo(e.target.value);
          }}
        ></textarea>
        <button className="w-full px-5 active:bg-gray-200 font-medium py-2 border-2 rounded-2xl outline-none bg-white text-black">
          Add Notes
        </button>
      </form>
      <div className="p-10 lg:w-1/2 lg:border-l-4">
        <h1 className="text-6xl font-bold text-center mb-12">Your Notes</h1>
        <div className="notes-container flex flex-wrap gap-10 h-full overflow-y-auto">
          {task.map((e,idx)=>{
            return <div key={idx} className="relative w-52 h-72 bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] text-black rounded-2xl">
              <h2 onClick={()=>deleteNote(idx)} className="absolute top-6 right-3 cursor-pointer active:scale-95 bg-red-500 rounded-full p-1"><X size={16} color="#dedede" strokeWidth={3} /></h2>
              <h3 className="leading-tight text-xl font-bold px-5 mt-13 uppercase">{e.title}</h3>
              <p className="leading-tight text-gray-700
              mt-5 font-medium px-5 capitalize">{e.notesInfo}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
