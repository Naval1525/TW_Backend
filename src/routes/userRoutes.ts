import { Router } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const router = Router();

//create user
router.post('/', (req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({
    error: ReasonPhrases.NOT_IMPLEMENTED,
  });
});

//get user
router.get('/',(req,res)=>{
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        error: ReasonPhrases.NOT_IMPLEMENTED,
    });
});

//get one user
router.get('/:id',(req,res)=>{
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        error: ReasonPhrases.NOT_IMPLEMENTED,
    });
});

//update user
router.put('/:id',(req,res)=>{
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        error: ReasonPhrases.NOT_IMPLEMENTED,
    });
});

//delete user
router.delete('/:id',(req,res)=>{
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        error: ReasonPhrases.NOT_IMPLEMENTED,
    });
});

export default router;
