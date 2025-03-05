export const catchAsyncErrors = (theFunction) => {
    return (req, res, next) => {
        Promise.resolve(theFunction(req, res, next)).catch(next);
    };
}; 
//this file is used to catch the errors in the async functions