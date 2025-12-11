import {RequestHandler} from "express";
import {prisma} from "../prisma";

export const createManyWorkouts:RequestHandler  = async (req, res) => {
    const workouts = req.body;

    if (!Array.isArray(workouts)) {
        return res.status(400).json({ error: "Body must be an array" });
    }

    const result = await prisma.workout.createMany({
        data: workouts,
        skipDuplicates: true,
    });

    res.status(201).json({ message: "Workouts created", count: result.count });
}