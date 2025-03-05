import mongoose from "mongoose";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import { Auction } from "../models/auctionSchema.js";
//this file will check if the auction has started or ended
export const checkAuctionEndTime = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new ErrorHandler("Invalud ID format.", 400));
    } //checking if the auction id is valid
    const auction = await Auction.findById(id);
    if (!auction) {
        return next(new ErrorHandler("Auction not found.", 404));
    } //checking if the auction exists
    const now = new Date();
    if (new Date(auction.startTime) > now) {
        return next(new ErrorHandler("Auction has not started yet.", 400));
    } //checking if the auction has started
    if (new Date(auction.endTime) < now) {
        return next(new ErrorHandler("Auction is ended.", 400));
    } //checking if the auction has ended
    next(); //else pass the control to the next middleware
});