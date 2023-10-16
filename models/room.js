import { Schema, model, models } from "mongoose";

const RoomSchema = new Schema({
  roomNumber: Number,
  roomType: String,
  roomSize: String,
  roomCategory: String,
  roomPrice: Number,
  occupiedFrom: Date,
  occupiedTo: Date,
  occupied: Boolean,
});

const Room = models.Room || model("Room", RoomSchema);

export default Room;
