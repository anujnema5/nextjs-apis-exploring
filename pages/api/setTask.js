import Task from "../models/TaskModel"
import { connectMongoDB } from "../utils/MongoConnect"

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).send({ Message: "Only post request are Allowed" })
        return
    }

    const { task } = req.body;

    try {
        await connectMongoDB();
        console.log("Reaching here");
        Task.create({ task }).then((data) => {
            console.log(data);
            res.status(201).send(data)
        })
    } catch (error) {
        console.log("REaching ere");
        res.status(400).send({ Message: "Something went wrong" })
    }
}