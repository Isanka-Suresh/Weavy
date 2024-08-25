'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  interface user {
    uid: string,
    name: string,
    directory: string
  }

  const [userData, setUser] = useState({
    uid: '',
    name: '',
    directory: ''
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...userData, [name]: value });
  };

  const submitUser = (e: any) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="text-3xl font-extrabold text-center mt-2">Weavy App</div>
      <form onSubmit={submitUser}>
        <div className="col-span-5 mb-4 flex">
          <label htmlFor="uid" className="block w-28 font-medium mt-2 pl-2 content-center">
            NIC
          </label>
          <input
            type="text"
            id="uid"
            name="uid"
            placeholder="User Id"
            value={userData.uid}
            onChange={handleInputChange}
            className="w-90 px-4 mt-2 mx-2 py-2 border rounded-md focus:input-info"
          />
        </div>
      </form>
    </>
  );
}
