"use client";

import RoomSection from "@components/RoomSection";
import React from "react";
import { useState } from "react";

const CreateBooking = () => {
  const [bookingCount, setBookingCount] = useState({
    cottage: 0,
    bungalow: 0,
    suite: 0,
    tripleBed: 0,
    doubleBed: 0,
    singleBed: 0,
  });
  const [roomsAvailable, setRoomsAvailable] = useState({
    vip: {
      cottage: 5,
      bungalow: 7,
      suite: 3,
      tripleBed: 1,
      doubleBed: 8,
      singleBed: 2,
    },
    regular: {
      cottage: 7,
      bungalow: 3,
      suite: 4,
      tripleBed: 5,
      doubleBed: 3,
      singleBed: 4,
    },
  });
  const [roomCategory, setRoomCategory] = useState({
    roomSize: "large",
    roomType: "",
    roomSpecification: "",
  });

  return (
    <div>
      <div className="glassmorphism">
        <p className="desc">Room Size</p>
        <div className="flex gap-5 px-5 py-5">
          <span
            className={`${
              roomCategory.roomSize === "large" ? "white_btn" : "black_btn"
            }`}
            onClick={() =>
              setRoomCategory({ ...roomCategory, roomSize: "large" })
            }
          >
            Large
          </span>
          <span
            className={`${
              roomCategory.roomSize === "small" ? "white_btn" : "black_btn"
            }`}
            onClick={() =>
              setRoomCategory({ ...roomCategory, roomSize: "small" })
            }
          >
            Small
          </span>
        </div>

        <p className="desc">Room Type</p>
        <div className="flex gap-5 px-5 py-5">
          <span
            className={`${
              roomCategory.roomType === "vip" ? "white_btn" : "black_btn"
            }`}
            onClick={() => {
              setRoomCategory({ ...roomCategory, roomType: "vip" });
              setBookingCount({
                ...bookingCount,
                cottage: 0,
                bungalow: 0,
                suite: 0,
                tripleBed: 0,
                doubleBed: 0,
                singleBed: 0,
              });
            }}
          >
            V.I.P
          </span>
          <span
            className={`${
              roomCategory.roomType === "regular" ? "white_btn" : "black_btn"
            }`}
            roomType
            onClick={() => {
              setRoomCategory({ ...roomCategory, roomType: "regular" });
              setBookingCount({
                ...bookingCount,
                cottage: 0,
                bungalow: 0,
                suite: 0,
                tripleBed: 0,
                doubleBed: 0,
                singleBed: 0,
              });
            }}
          >
            Regular
          </span>
        </div>

        {/* FORM */}

        <form className="">
          <label htmlFor="roomSpec" className="desc">
            Room Specification
          </label>

          {/* LARGE VIP  */}

          {roomCategory.roomSize === "large" &&
            roomCategory.roomType === "vip" && (
              <RoomSection
                roomCategory="vip"
                roomSize="large"
                roomsAvailable={roomsAvailable}
                bookingCount={bookingCount}
                setBookingCount={setBookingCount}
              />
            )}

          {/* SMALL VIP  */}

          {roomCategory.roomSize === "small" &&
            roomCategory.roomType === "vip" && (
              <RoomSection
                roomCategory="vip"
                roomSize="small"
                roomsAvailable={roomsAvailable}
                bookingCount={bookingCount}
                setBookingCount={setBookingCount}
              />
            )}

          {/* SMALL REGULAR  */}
          {roomCategory.roomSize === "small" &&
            roomCategory.roomType === "regular" && (
              <RoomSection
                roomCategory="regular"
                roomSize="small"
                roomsAvailable={roomsAvailable}
                bookingCount={bookingCount}
                setBookingCount={setBookingCount}
              />
            )}

          {/* LARGE REGULAR  */}
          {roomCategory.roomSize === "large" &&
            roomCategory.roomType === "regular" && (
              <RoomSection
                roomCategory="regular"
                roomSize="large"
                roomsAvailable={roomsAvailable}
                bookingCount={bookingCount}
                setBookingCount={setBookingCount}
              />
            )}
        </form>
      </div>
    </div>
  );
};

export default CreateBooking;
