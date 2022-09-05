import ClockList from "./components/ClockList";
import Form from "./components/Form";
import TemperatureCalculator from "./components/TemperatureCalculator";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";
import HoverIncrement from "./components/HoverIncrement";
import CountingEvent from "./components/CountingEvent";

function App() {
  const quantities = [1, 2, 3];
  return (
    <div>
      <ClockList quantities={quantities} />
      <br />
      <Form />
      <br />
      <TemperatureCalculator />
      <br />
      <ClickCounter />
      <HoverCounter />
      <br />
      <User name={(isLoggedIn) => (isLoggedIn ? "Amio Das" : "Guest User")} />
      <br />
      <CountingEvent
        render={(count, incrementCount) => (
          <HoverIncrement count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
