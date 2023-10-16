"use client";

import RoomSection from "@components/RoomSection";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    const getNoOfRoomsAvailable = async () => {
      // Construct the URL with query parameters for startDate and endDate
      const startingYear = startDate.getFullYear();
      const startingMonth = String(startDate.getMonth() + 1).padStart(2, "0"); // Adding 1 to month as it is 0-indexed
      const startingDay = String(startDate.getDate()).padStart(2, "0");

      // Create the formatted string
      const startingDate = `${startingYear}-${startingMonth}-${startingDay}`;

      const endingYear = endDate.getFullYear();
      const endingMonth = String(endDate.getMonth() + 1).padStart(2, "0"); // Adding 1 to month as it is 0-indexed
      const endingDay = String(endDate.getDate()).padStart(2, "0");

      const endingDate = `${endingYear}-${endingMonth}-${endingDay}`;

      console.log(startingDate, endingDate);

      const url = `/api/rooms-available?startDate=${startingDate}&endDate=${endingDate}`;
      // const url = `/api/rooms-available?startDate=${startDate}&endDate=${endDate}`;

      try {
        // Send a GET request with the constructed URL
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Check if the response is successful (status code 200)
        if (response.status === 200) {
          // const roomsAvailable = await response.json();
          // Process the data received from the backend
          // console.log("Rooms available:", roomsAvailable);
        } else {
          // Handle the response for other status codes (e.g., error handling)
          console.error("Error:", response.status);
        }
      } catch (error) {
        // Handle network errors or request failures
        console.error("Request failed:", error);
      }
    };
    if (startDate !== null && endDate !== null) {
      getNoOfRoomsAvailable();
    }
  }, [startDate, endDate]);

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

        <div className="py-2">
          <p className="desc py-2">Select Date</p>
          <DatePicker
            showIcon
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
          />
        </div>

        {/* FORM */}

        <form className="py-4">
          <label htmlFor="roomSpec" className="desc">
            Room Specification
          </label>

          {/* LARGE VIP  */}

          {roomCategory.roomSize === "large" &&
            roomCategory.roomType === "vip" && (
              <RoomSection
                roomSpecs={{
                  roomCategory: roomCategory.roomType,
                  roomSize: roomCategory.roomSize,
                  roomsAvailable: roomsAvailable,
                  bookingCount: bookingCount,
                  setBookingCount: setBookingCount,
                }}
              />
            )}

          {/* SMALL VIP  */}

          {roomCategory.roomSize === "small" &&
            roomCategory.roomType === "vip" && (
              <RoomSection
                roomSpecs={{
                  roomCategory: roomCategory.roomType,
                  roomSize: roomCategory.roomSize,
                  roomsAvailable: roomsAvailable,
                  bookingCount: bookingCount,
                  setBookingCount: setBookingCount,
                }}
              />
            )}

          {/* SMALL REGULAR  */}
          {roomCategory.roomSize === "small" &&
            roomCategory.roomType === "regular" && (
              <RoomSection
                roomSpecs={{
                  roomCategory: roomCategory.roomType,
                  roomSize: roomCategory.roomSize,
                  roomsAvailable: roomsAvailable,
                  bookingCount: bookingCount,
                  setBookingCount: setBookingCount,
                }}
              />
            )}

          {/* LARGE REGULAR  */}
          {roomCategory.roomSize === "large" &&
            roomCategory.roomType === "regular" && (
              <RoomSection
                roomSpecs={{
                  roomCategory: roomCategory.roomType,
                  roomSize: roomCategory.roomSize,
                  roomsAvailable: roomsAvailable,
                  bookingCount: bookingCount,
                  setBookingCount: setBookingCount,
                }}
              />
            )}
        </form>
      </div>
    </div>
  );
};

export default CreateBooking;
