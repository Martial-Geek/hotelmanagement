import Room from "@models/room";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  await connectToDB();

  const startDate = req.nextUrl.searchParams.get("startDate");
  const endDate = req.nextUrl.searchParams.get("endDate");
  const roomType = req.nextUrl.searchParams.get("roomType");
  const roomSize = req.nextUrl.searchParams.get("roomSize");
  // const parsedStartDate = new Date(startDate);
  // const parsedEndDate = new Date(endDate);

  try {
    // Query the Room model to count documents where the "occupiedFrom" is not within the given range.
    const availableRoomCount = await Room.countDocuments({
      occupiedFrom: { $not: { $gte: endDate } },
      occupiedTo: { $not: { $lte: startDate } },
      roomType: roomType,
      roomSize: roomSize,
    });

    // 'availableRoomCount' will contain the count of rooms available within the specified date range.

    console.log(availableRoomCount);
    return new Response(availableRoomCount, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle any errors that may occur during the database query.
    console.error("Error while counting available rooms:", error);
    return new Error("Error while counting available rooms");
  }
};
