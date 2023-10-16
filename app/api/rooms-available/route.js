import Room from "@models/room";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  await connectToDB();

  const startDate = req.nextUrl.searchParams.get("startDate");
  const endDate = req.nextUrl.searchParams.get("endDate");

  console.log(startDate, endDate);

  return new Response("Hello World");
};
