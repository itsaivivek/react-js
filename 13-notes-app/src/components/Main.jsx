import React, {useState} from 'react'

import NoteCard from './NoteCard'

const Main = () => {
  // 1. Manage the selected color using React state
  const [selectedColor, setSelectedColor] = useState('bg-red-300');
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const [task, setTask] = useState([])

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const deleteNote = (indexToDelete) => {
    setTask(task.filter((_, idx) => idx !== indexToDelete));
  };

  return (
    <div className='px-10 flex flex-col gap-4'>
      <div>
        <form className='flex flex-col gap-2 lg:w-1/4' onSubmit={(e) => {
          e.preventDefault();

          const copyTask = [...task]
          copyTask.push({ heading, description, selectedColor })
          setTask(copyTask);

          setDate(Date.now())

          setDescription('')
          setHeading('')
          setSelectedColor('bg-red-300')
        }
        }>
          <input className='outline-none border p-2' type="text" placeholder='Enter Notes Heading' value={heading} onChange={(e) => {
            setHeading(e.target.value)
          }
          } />
          <textarea className='outline-none border p-2' placeholder='Enter Description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }
            }
          ></textarea>

          {/* 2. Flex container for horizontal alignment */}
          <div className="flex gap-3 my-2 items-center">
            <span className="text-sm text-gray-600">Select Tag Color:</span>

            {/* Red Swatch */}
            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="color-selection"
                value="bg-red-300"
                checked={selectedColor === 'bg-red-300'}
                onChange={handleColorChange}
                className="hidden peer" // Hides native radio circle
              />
              <span className="block w-6 h-6 rounded-full bg-red-300 border-2 border-transparent peer-checked:border-black peer-checked:scale-110 transition-all" title="Red"></span>
            </label>

            {/* Blue Swatch */}
            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="color-selection"
                value="bg-blue-300"
                checked={selectedColor === 'bg-blue-300'}
                onChange={handleColorChange}
                className="hidden peer"
              />
              <span className="block w-6 h-6 rounded-full bg-blue-300 border-2 border-transparent peer-checked:border-black peer-checked:scale-110 transition-all" title="Blue"></span>
            </label>

            {/* Green Swatch */}
            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="color-selection"
                value="bg-green-300"
                checked={selectedColor === 'bg-green-300'}
                onChange={handleColorChange}
                className="hidden peer"
              />
              <span className="block w-6 h-6 rounded-full bg-green-300 border-2 border-transparent peer-checked:border-black peer-checked:scale-110 transition-all" title="Green"></span>
            </label>
          </div>

          <button disabled={heading.trim() === '' && description.trim() === ''}  className='bg-gray-700 active:scale-95 text-white p-2 rounded hover:bg-gray-800 transition-colors'>Add Note</button>
        </form>
      </div>
      <h1 className='text-xl font-medium'>Recent Notes</h1>
      <div className="noteContailer flex gap-4 flex-wrap">
      {task.map((elem, idx) => {
        return <div key={idx}>
          <NoteCard id={idx} date={date} heading={elem.heading} description={elem.description} bgColor={elem.selectedColor} onDelete={() => deleteNote(idx)}/>
        </div>
      }
      )}
      </div>
    </div>
  )
}

export default Main
