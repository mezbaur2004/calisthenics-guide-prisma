import express, {Router,Request,Response} from "express";
const router:Router=express.Router();
import * as workouts from "../controller/workouts"

const asyncHandler = (fn: Function) => (req: Request, res: Response, next: any) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.get("/test",(_req:Request,res:Response)=>{
    res.json("API is working!")
})
router.post("/test-sanitize",(req:Request,res:Response)=>{
    res.json(req.body);
})

//workout
router.post("/createmanyworkouts",asyncHandler(workouts.createManyWorkouts));

export default router;