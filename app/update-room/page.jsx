"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [selectedAction, setSelectedAction] = useState(null);
  const [addRoom, setAddRoom] = useState({
    roomNo: "",
    roomType: "",
    roomCategory: "",
    roomSize: "",
    roomPrice: "",
  });
  const [removeRoom, setRemoveRoom] = useState({
    roomNo: "",
  });
  const [updateRoom, setUpdateRoom] = useState({
    oldRoomNo: "",
    newRoomNo: "",
  });

  const handleCheckboxChange = (action) => {
    setSelectedAction(action);
  };

  const handleAddRoomChange = (e) => {
    const { name, value } = e.target;
    setAddRoom((prevAddRoom) => ({
      ...prevAddRoom,
      [name]: value,
    }));
  };

  const handleRemoveRoomChange = (e) => {
    const { name, value } = e.target;
    setRemoveRoom((prevRemoveRoom) => ({
      ...prevRemoveRoom,
      [name]: value,
    }));
  };

  const handleUpdateRoomChange = (e) => {
    const { name, value } = e.target;
    setUpdateRoom((prevUpdateRoom) => ({
      ...prevUpdateRoom,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let requestBody = {};
    if (selectedAction === "add") {
      requestBody = { action: "add", ...addRoom };
    } else if (selectedAction === "update") {
      requestBody = { action: "update", ...updateRoom };
    } else if (selectedAction === "remove") {
      requestBody = { action: "remove", ...removeRoom };
    }

    try {
      const response = await fetch(`/api/update-room/${requestBody.action}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.status === 201) {
        router.push("/");
      } else {
        const data = await response.json();
        throw new Error(`Could not update room, ${data.message}}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="glassmorphism flex flex-col gap-2">
      <label className="desc">Select Action</label>
      <div className="flex gap-2">
        <input
          type="checkbox"
          id="add"
          checked={selectedAction === "add"}
          onChange={() => handleCheckboxChange("add")}
        />
        <label>Add Room</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          id="update"
          checked={selectedAction === "update"}
          onChange={() => handleCheckboxChange("update")}
        />
        <label>Update Room</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          id="remove"
          checked={selectedAction === "remove"}
          onChange={() => handleCheckboxChange("remove")}
        />
        <label>Remove Room</label>
      </div>
      {selectedAction === "add" && (
        <>
          <label className="desc">Add Room</label>
          <input
            type="text"
            className="form_input"
            placeholder="Room No"
            name="roomNo"
            onChange={handleAddRoomChange}
          />
          <input
            type="text"
            className="form_input"
            placeholder="Room Type"
            name="roomType"
            onChange={handleAddRoomChange}
          />
          <input
            type="text"
            className="form_input"
            placeholder="Room Category"
            name="roomCategory"
            onChange={handleAddRoomChange}
          />
          <input
            type="text"
            className="form_input"
            placeholder="Room Size"
            name="roomSize"
            onChange={handleAddRoomChange}
          />
          <input
            type="text"
            className="form_input"
            placeholder="Room Price"
            name="roomPrice"
            onChange={handleAddRoomChange}
          />
        </>
      )}
      {selectedAction === "update" && (
        <>
          <label className="desc">Update Room</label>
          <input
            type="text"
            className="form_input"
            placeholder="Old Room No"
            name="oldRoomNo"
            onChange={handleUpdateRoomChange}
          />
          <input
            type="text"
            className="form_input"
            placeholder="New Room No"
            name="newRoomNo"
            onChange={handleUpdateRoomChange}
          />
        </>
      )}
      {selectedAction === "remove" && (
        <>
          <label className="desc">Remove Room</label>
          <input
            type="text"
            className="form_input"
            placeholder="Room No"
            name="roomNo"
            onChange={handleRemoveRoomChange}
          />
        </>
      )}
      <button className="black_btn my-3" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Page;
