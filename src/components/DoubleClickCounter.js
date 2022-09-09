function DoubleClickCounter({ count, incrementCount, theme }) {
  const style =
    theme === "dark" ? { backgroundColor: "#000000", color: "#ffffff" } : null;
  return (
    <div>
      <h3 style={style}>
        I am double click counter. I am clicked {count} times.
      </h3>
      <button type="button" onDoubleClick={incrementCount}>
        Double Click Button
      </button>
    </div>
  );
}

export default DoubleClickCounter;
