import React from 'react'
import Navbar from '../components/Navbar'

import { useState } from 'react';
import RateLimitedUI from '../components/RateLimitedUI';
import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get('http://localhost:5001/notes');
                console.log(res.data);
                setNotes(res.data);
            } catch (error) {
                console.log("Error in fetching notes", error);
            } finally {
                setLoading(false);
            }
        };
        fetchNotes();
    }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />

      

      <div className='max-w-6xl mx-auto p-4 mt-6'>
      {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}
      {notes.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map(note => (
                <div key={note._id} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-primary border-solid p-4 rounded-lg shadow-md'>
                    <h3 className='text-lg font-semibold mb-2'>{note.title}</h3>
                    <p className='text-gray-600'>{note.content}</p>
                </div>
            ))}
        </div>
      )}

      </div>
    </div>
  )
}

export default Home
