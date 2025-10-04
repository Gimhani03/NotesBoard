import axios from 'axios';
import { ArrowLeftIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router';

const EditNotes = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch the existing note data
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/notes/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.log("Error fetching note:", error);
        toast.error("Error fetching note");
        navigate("/"); // Redirect to home if note not found
      } finally {
        setFetchLoading(false);
      }
    };

    if (id) {
      fetchNote();
    }
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);
    try {
      await axios.put(`http://localhost:5001/updatenotes/${id}`, { title, content });
      toast.success("Note updated successfully");
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.log("Error updating note", error);
      toast.error("Error updating note");
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center text-primary py-10">Loading note...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Note
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Edit Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end gap-2">
                  <Link to={"/"} className="btn btn-ghost">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-info" disabled={loading}>
                    {loading ? "Updating..." : "Update Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNotes;
