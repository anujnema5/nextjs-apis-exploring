import Task from "../models/TaskModel"
import { connectMongoDB } from "../utils/MongoConnect"

export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.status(405).send({ Message: "Only GET request are Allowed" })
        return
    }

    try {
        await connectMongoDB();
        const tasks = await Task.find();
        res.status(200).send(tasks)
    } catch (error) {
        res.status(400).send({ Message: "Something went wrong" })
    }
}