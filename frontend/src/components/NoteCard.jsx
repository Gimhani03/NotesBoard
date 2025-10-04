import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { formatDate } from '../lib/utils'
import { Link } from 'react-router'
import axios from 'axios'
import toast from 'react-hot-toast'

const NoteCard = ({ note, setNotes }) => {

    const handleDelete = async(e, id) =>{
        e.preventDefault();

        if(!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            await axios.delete(`http://localhost:5001/deletenotes/${id}`);
            setNotes((prev) => prev.filter((note) => note._id !== id));
            toast.success("Note deleted successfully");
            // Optionally, you can refresh the notes list or remove the deleted note from the UI
        } catch (error) {
            console.log("Error deleting note", error);
            toast.error("Error deleting note");
        }
    }

  return (
    <Link to={`/note/${note._id}`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-info border-solid p-4 rounded-lg shadow-md'>
       
        <h3 className='text-lg font-semibold mb-2'>{note.title}</h3>
        <p className='text-gray-600'>{note.content}</p>
        <div className='card-actions justify-between mt-4'>
          <span className='text-sm text-base-content/60'>{formatDate(new Date(note.createdAt))}</span>

           <div className='flex items-center gap-4'>
            <Link to={`/edit/${note._id}`}>
              <PenSquareIcon className='size-4' />
            </Link>
            <button className='btn btn-ghost btn-xs text-error'>
            <Trash2Icon className='size-4' onClick={(e) => handleDelete(e, note._id)}/>
            </button>
          </div>
        </div>
       
        
    </Link>
  )
}

export default NoteCard
