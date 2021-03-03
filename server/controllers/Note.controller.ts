import Note from './../models/Note';

// get notes
export const getNotes = async (req: any, res: any) => {
    try{
        const notes = await Note.find()
        res.status(200).json({data : notes})
    }catch(err){
        // console.log(err)
        return res.status(500).send({err})    
    }
}

// get note by id
export const getNoteById = async (req: any, res: any) => {
    const id = req.params.id;
    try{
        const notes = await Note.findById({_id: id})
        return res.status(200).json({data : notes})
    }catch(err){
        // console.log(err)
        return res.status(404).send({msg : "Note not found"})
    }
}

// post a note
export const postNote = async (req:any,res:any) =>  {
    const {title, content} = req.body;
    const note = new Note({title, content})
    try{
        await note.save()
        return res.status(201).json({data: note})
    }catch(err){
        // console.log(err)
        return res.status(500).send({err})
    }
}

// update a note by id
export const updateNote = async (req:any, res:any) => {
    const id = req.params.id;
    try{
        const isUpdated = await Note.findByIdAndUpdate({_id: id})
        if(!isUpdated){
            return res.status(404).send({msg: "Note not found"})
        }else{
            return res.status(200).send({msg: "Note updated"})
        }
    }catch(err){
        // console.log(err)
        return res.status(500).send({err})
    }
}

// delete a note by id
export const deleteNote = async (req:any, res:any) => {
    const id = req.params.id;
    try{
        const isDeleted = await Note.findByIdAndDelete({_id: id})
        if(!isDeleted){
            return res.status(404).send({msg: "Note not found"})
        }else{
            return res.status(204).send({msg: "Note deleted"})
        }
    }catch(err){
        // console.log(err)
        return res.status(500).send({err})
    }
}