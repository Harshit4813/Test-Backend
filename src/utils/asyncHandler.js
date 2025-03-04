const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}





export{asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (fnc) => () => {}
// const asyncHandler = (fnc) => async() => {}

    // const asyncHandler = (fnc) => async(req,res,next) => {
    //     try {
    //         await fnc(req,res,next);
    //     }catch (error) {
    //         res.status(err.code || 500).json({
    //             sucess: false,
    //             message: err.message
    //         });
    //     }



    // }