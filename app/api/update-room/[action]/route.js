import Room from "@models/room";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  await connectToDB();
  const requestBody = await req.json();

  switch (requestBody.action) {
    case "add":
      // Create a new Room instance and populate it with data from the request body
      try {
        const newRoom = new Room({
          roomNumber: requestBody.roomNo,
          roomType: requestBody.roomType,
          roomSize: requestBody.roomSize,
          roomCategory: requestBody.roomCategory,
          roomPrice: requestBody.roomPrice,
          occupied: false, // Assuming the room is initially not occupied
        });

        await Room.create(newRoom);

        return new Response(
          JSON.stringify({ message: "Updated Room successfully" }),
          {
            status: 201,
          }
        );
      } catch (error) {
        console.log(error);
      }
      break;

    case "update":
      try {
        const updatedRoom = await Room.findOneAndUpdate(
          { roomNumber: requestBody.oldRoomNo },
          { roomNumber: requestBody.newRoomNo }
        );

        if (!updatedRoom) {
          // No room document was found with the old room number
          return new Response(
            JSON.stringify({ message: "Old Room Number not found" }),
            { status: 404 }
          );
        }

        return new Response(
          JSON.stringify({ message: "Updated Room successfully" }),
          {
            status: 201,
          }
        );
      } catch (error) {
        console.log(error);
      }
      break;

    case "remove":
      try {
        const deletedRoom = await Room.findOneAndDelete({
          roomNumber: requestBody.roomNo,
        });

        if (!deletedRoom) {
          return new Response(JSON.stringify({ message: "Room not found" }), {
            status: 404,
          });
        } else {
          return new Response(
            JSON.stringify({ message: "Deleted room successfully" }),
            { status: 201 }
          );
        }
      } catch (error) {
        console.log(error);
      }
      break;
  }

  return new Response("Updated room successfully");
};
