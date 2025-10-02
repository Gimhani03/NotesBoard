import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { formatDate } from '../lib/utils'
import { Link } from 'react-router'

const NoteCard = ({ note }) => {
  return (
    <Link to={`/note/${note._id}`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-info border-solid p-4 rounded-lg shadow-md'>
       
        <h3 className='text-lg font-semibold mb-2'>{note.title}</h3>
        <p className='text-gray-600'>{note.content}</p>
        <div className='card-actions justify-between mt-4'>
          <span className='text-sm text-base-content/60'>{formatDate(new Date(note.createdAt))}</span>

           <div className='flex items-center gap-4'>
            <PenSquareIcon className='size-4'/>
            <button className='btn btn-ghost btn-xs text-error'>
            <Trash2Icon className='size-4'/>
            </button>
          </div>
        </div>
       
        
    </Link>
  )
}

export default NoteCard
