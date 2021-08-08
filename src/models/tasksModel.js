const mongoose = require("mongoose");

const TasksModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date,
        required: true,
        default: function () {
            return Date.now()
        }
    },
    dueDate: {
        type: Date,
        required: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Tasks = mongoose.model("Tasks", TasksModel);

export default Tasks;
