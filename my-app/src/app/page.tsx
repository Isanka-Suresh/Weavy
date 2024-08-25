'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import api from "./api/api";

export default function Home() {
  interface user {
    uid: string,
    name: string,
    directory: string
  }

  useEffect(() => {
    fetchUsers();
    
  },[])

  const [userData, setUser] = useState({
    uid: '',
    name: '',
    directory: ''
  })
  const[users,setUsers] = useState<user[]>([]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...userData, [name]: value });
  };

  const handleClear = () => {
    setUser({
      uid: '',
      name:'',
      directory:''
    });
  }

  const fetchUsers = async () => {
    
    console.log('Form submitted:', user);
    api.get('/users', user).then(response => {
      if (response.status === 200) {
        console.log("User Created successfuly");
      }
    }).catch(err => console.log("Error: ", err));
  }

  const submitUser = (e: any) => {
    e.preventDefault();
    const user = {
      uid:userData.uid,
      name:userData.name,
      directory:userData.directory
    }
    console.log('Form submitted:', user);
    api.post('/users', user).then(response => {
      if (response.status === 200) {
        console.log("User Created successfuly");
      }
    }).catch(err => console.log("Error: ", err));
  }

  return (
    <>
      <div className="text-4xl font-extrabold text-center mt-2">Weavy App</div>
      <div className="text-3xl font-thin text-center mt-2">Create User</div>
      <form onSubmit={submitUser} className="w-full relative -right-1/4 top-10">
        <div className="col-span-5 mb-4 flex">
          <label htmlFor="uid" className="block w-28 font-medium mt-2 pl-2 content-center">
            User Name
          </label>
          <input
            type="text"
            id="uid"
            name="uid"
            placeholder="User Id"
            value={userData.uid}
            onChange={handleInputChange}
            className="w-90 px-4 mt-2 mx-2 py-2 border rounded-md focus:input-info text-black"
          />
        </div>
        <div className="col-span-5 mb-4 flex">
          <label htmlFor="name" className="block w-28 font-medium mt-2 pl-2 content-center">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="User Name"
            value={userData.name}
            onChange={handleInputChange}
            className="w-90 px-4 mt-2 mx-2 py-2 border rounded-md focus:input-info text-black"
          />
        </div>
        <div className="col-span-5 mb-4 flex">
          <label htmlFor="directory" className="block w-28 font-medium mt-2 pl-2 content-center">
          Directory
          </label>
          <input
            type="text"
            id="directory"
            name="directory"
            placeholder="User Directory"
            value={userData.directory}
            onChange={handleInputChange}
            className="w-90 px-4 mt-2 mx-2 py-2 border rounded-md focus:input-info text-black"
          />
        </div>
        <div className="m-2">
            <button
              type="button"
              onClick={handleClear}
              className=" bg-cyan-400 text-gray-950 m-2 px-4 py-2 rounded-md  hover:bg-cyan-500"
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-cyan-400 text-gray-950 m-2 px-4 py-2 rounded-md hover:bg-cyan-500"
            >
              Submit
            </button>
          </div>
      </form>
      <div className="text-3xl font-thin text-center mt-2">Users</div>
      <div>User Id - </div>
    </>
  );
}
