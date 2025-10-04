import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { ArrowLeft, PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils'

const NoteDetails = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/notes/${id}`);
        setNote(res.data);
        
      } catch (error) {
        console.log("Error fetching note:", error);
        
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNote();
    }
  }, [id]);

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='max-w-4xl mx-auto p-4 mt-6'>
        {loading ? (
          <div className='text-center text-primary py-10'>Loading notes...</div>
        ) : (
          <>
            <Link to="/" className='btn btn-ghost mb-4'>
              <ArrowLeft className='size-4 mr-2' />
              Back to Notes
            </Link>
       
            <div className='card bg-base-100 shadow-xl border-t-4 border-info'>
              <div className='card-body'>
                <div className='flex justify-between items-start mb-4'>
                  <h1 className='text-3xl font-bold text-primary'>{note.title}</h1>
                  <div className='flex items-center gap-2'>
                    <Link to={`/edit/${id}`} className='btn btn-ghost btn-sm'>
                      <PenSquareIcon className='size-4' />
                    </Link>
                    <button className='btn btn-ghost btn-sm text-error'>
                      <Trash2Icon className='size-4' />
                    </button>
                  </div>
                </div>
                
                <div className='divider'></div>
                
                <div className='prose max-w-none'>
                  <p className='text-base-content text-lg leading-relaxed whitespace-pre-wrap'>
                    {note.content}
                  </p>
                </div>
                
                <div className='divider'></div>
                
                <div className='flex justify-end items-center text-sm text-base-content/60'>
                  <span>Created: {formatDate(new Date(note.createdAt))}</span>
                  {note.updatedAt && note.updatedAt !== note.createdAt && (
                    <span>Updated: {formatDate(new Date(note.updatedAt))}</span>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default NoteDetails
