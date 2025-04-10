import React from "react";

const HeaderList = [
  {
    id: 1,
    name: "Home",
    link: () => {
      console.log("Home button pressed");
    },
  },
  {
    id: 2,
    name: "About",
    link: () => {
      console.log("About button pressed");
    },
  },
  {
    id: 3,
    name: "Contact",
    link: () => {
      console.log("Contact button pressed");
    },
  },
  {
    id: 4,
    name: "Carrer",
    link: () => {
      console.log("Carreer button pressed");
    },
  },
];

const Header = () => {
  const styles = {
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#333",
      color: "white",
      padding: "10px 50px",
      position: "sticky",
      top: 0,
      zIndex: "10",
    },
  };

  return (
    <>
      <nav style={styles.headerContainer}>
        {HeaderList.map((item) => {
          return (
            <div key={item.id} onClick={item.link}>
              {item.name}
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default Header;
