const Btn = ({ handleClick, btnStyle, children }) => {
  const customBtn = {
    bacgroundColor: "grey",
    border: "none",
    color: "#fff",
    fontSize: "19px",
    padding: "15px 30px",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "7px",
    display: "block",
    margin: "5px auto",
  };

  return (
    <button onClick={handleClick} style={{ ...customBtn, ...btnStyle }}>
      {children}
    </button>
  );
};

export default Btn;
