import axios from "axios";
import React, { useEffect, useState } from "react";

const UserForm = () => {
  const [filter, setFilter] = useState("");
  const [userData, setUserData] = useState([]);
  const handleOnChange = (e) => {
    setFilter(e.target.value);
  };
  const getData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const filterValue = () => {
    const filteredData = userData.filter((item) => {
      return item.title.toLowerCase().includes(filter.toLowerCase());
    });
    return filteredData;
  };

  const filteredData = filter ? filterValue() : userData;

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <form onSubmit={handleOnChange}>
        <div>please search</div>
        <input
          value={filter}
          name="email"
          type="text"
          placeholder="Please enter your search"
          onChange={handleOnChange}
        />
      </form>
      <div>
        {filteredData?.map((ele) => (
          <>
            <h1>{ele?.title}</h1>
          </>
        ))}
      </div>
    </>
  );
};

export default UserForm;
