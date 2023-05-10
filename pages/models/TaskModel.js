import mongoose, { model, models, mongo } from "mongoose";

const taskSchema = new mongoose.Schema({
    task : {
        type : String,
        required : true,
    },
})

const Task = models.Task || model("Task", taskSchema)
export default Task;