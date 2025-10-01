import Note from "../models/Note.js";

export const getnotes = async (req,res) => {
   try {
    const notes = await Note.find().sort({createdAt : -1});
    res.status(200).json(notes);

   } catch (error) {
    console.log("Error in getting notes", error);
    res.status(500).json({message: 'Server Error', type: 'error'});
   }
}

export const createnotes = async(req,res) => {
   try {
    const {title, content} = req.body;
    const newNote = new Note({title, content});
    await newNote.save();
    res.status(201).json({message: 'Note created successfully', type: 'success'});
   } catch (error) {
     console.log("Error in creating notes", error);
     res.status(500).json({message: 'Server Error', type: 'error'});
   }
}

export const updatenotes = async (req, res) => {
   try {
      const {title, content} = req.body;
      const updatenote = await Note.findByIdAndUpdate(req.params.id, {title, content});
      if(!updatenote){
         return res.status(404).json({message: 'Note not found', type: 'error'});
      }
      res.status(200).json({message: 'Note updated successfully'});
   } catch (error) {
      console.log("Error in updating notes", error);
      res.status(500).json({message: 'Server Error', type: 'error'});
   }
}

export const deletenotes = async (req, res) => {
   try {
      const deletednote =await Note.findByIdAndDelete(req.params.id);
      if(!deletednote){
         return res.status(404).json({message: 'Note not found', type: 'error'});
      }
       res.status(200).json({message: 'Note deleted successfully'});
   } catch (error) {
      console.log("Error in deleting notes", error);
      res.status(500).json({message: 'Server Error', type: 'error'});
   }
}