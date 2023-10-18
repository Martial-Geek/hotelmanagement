import React from "react";

const RoomSection = ({ roomSpecs }) => {
  const {
    roomCategory,
    roomSize,
    roomsAvailable,
    bookingCount,
    setBookingCount,
  } = roomSpecs;

  const selectedRoomTypes =
    roomSize === "large"
      ? ["cottage", "bungalow", "suite"]
      : ["singleBed", "doubleBed", "tripleBed"];

  // Filter the roomData object to only include the selected room types
  const roomData = Object.keys(roomsAvailable[roomCategory])
    .filter((roomType) => selectedRoomTypes.includes(roomType))
    .reduce((obj, key) => {
      obj[key] = roomsAvailable[roomCategory][key];
      return obj;
    }, {});
  return (
    <div className="desc">
      {Object.keys(roomData).map((roomType) => (
        <p className="desc flex gap-2" key={roomType}>
          {roomType} <span>({roomData[roomType]})</span>
          <span
            className="black_btn max-w-fit"
            onClick={() => {
              if (bookingCount[roomType] < roomData[roomType]) {
                setBookingCount({
                  ...bookingCount,
                  [roomType]: bookingCount[roomType] + 1,
                });
              }
            }}
          >
            {bookingCount[roomType]} (+)
          </span>
        </p>
      ))}
    </div>
  );
};

export default RoomSection;
