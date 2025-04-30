const Square = ({ value, onClick, index }) => {
  /* const [state, setState] = useState(null);
  const handleClick = () => {
    setState("X");
    console.log("Square clicked:", value);
  }; */

  return (
    <div className="square" onClick={onClick}>
      <span
        style={{
          position: "absolute",
          color: "red",
          fontSize: "15px",
          top: "0",
          left: "4px",
        }}
      >
        {index}
      </span>
      {value}
    </div>
  );
};

export default Square;
