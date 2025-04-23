import { Router } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const router = Router();

//create tweet
router.post('/', (req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({
    error: ReasonPhrases.NOT_IMPLEMENTED,
  });
});

//list tweet
router.get('/',(req,res)=>{
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        error: ReasonPhrases.NOT_IMPLEMENTED,
    });
});

//get one tweet
router.get('/:id',(req,res)=>{
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        error: ReasonPhrases.NOT_IMPLEMENTED,
    });
});

//update tweet
router.put('/:id',(req,res)=>{
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        error: ReasonPhrases.NOT_IMPLEMENTED,
    });
});

//delete tweet
router.delete('/:id',(req,res)=>{
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        error: ReasonPhrases.NOT_IMPLEMENTED,
    });
});

export default router;
