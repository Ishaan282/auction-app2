import mongoose from "mongoose";
//this schema is for storing the auction items
const auctionSchema = new mongoose.Schema({
    title: String, //title of the auction item
    description: String,
    startingBid: Number, //base bit amount
    category: String,
    condition: {
        type: String,
        enum: ["New", "Used"],
    },
    currentBid: { type: Number, default: 0 },
    startTime: String,
    endTime: String,
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    bids: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Bid",
            },
            userName: String,
            profileImage: String,
            amount: Number,
        },
    ],
    highestBidder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    commissionCalculated: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Auction = mongoose.model("Auction", auctionSchema);