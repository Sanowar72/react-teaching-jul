import axios from "axios";
import React, { useEffect, useState } from "react";
const BASE_URL = "https://67ef80232a80b06b88944c65.mockapi.io/api/person/";
const Jupiter = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setData(res.data);
      console.log(res.data[0].id);
      setSelectedUser(res.data[0].id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3>Jupiter money</h3>
      <div className="container">
        <div className="sidebar">
          <SideBar
            data={data}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        </div>
        <div className="main-page">
          <Main
            data={data}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        </div>
      </div>
    </>
  );
};

const SideBar = ({ data, setSelectedUser, selectedUser }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelectedUser(item.id)}
          className={`${selectedUser == item.id ? "active" : ""}`}
        >
          {item.name}
        </div>
      ))}
    </>
  );
};
const Main = ({ data, setSelectedUser, selectedUser }) => {
  const [userData, setUserData] = useState([]);
  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${selectedUser}`);
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (selectedUser) fetchUserData();
  }, [selectedUser]);
  //   console.log("this is user data====", userData);
  const firstName = userData?.name?.split(" ")[0];
  const lastName = userData?.name?.split(" ")[1];
  return (
    <>
      <div className="name-container">
        {data.map((ele) => {
          return (
            <ShowList
              ele={ele}
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
            />
          );
        })}
      </div>

      <div className="user-name-container">
        <p>first Name:{firstName} </p>
        <p>last Name: {lastName}</p>
      </div>

      <div className="additional-details">
        {/* ['address','communication','finance'].map((ele)=>{
            return(
                <ShowList
              ele={ele}
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
            />
            )
        }) */}
      </div>
    </>
  );
};
const ShowList = ({ ele, setSelectedUser, selectedUser }) => {
  return (
    <>
      <div
        key={ele.id}
        className={`name ${selectedUser == ele.id ? "active" : ""}`}
        onClick={() => setSelectedUser(ele.id)}
      >
        {ele.name}
      </div>
    </>
  );
};
export default Jupiter;
