import ClockList from "./components/ClockList";
import Form from "./components/Form";
import TemperatureCalculator from "./components/TemperatureCalculator";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";
// import HoverIncrement from "./components/HoverIncrement";
import CountingEvent from "./components/CountingEvent";
import Section from "./components/Section";

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
      {/* 
      
      ** If using this format we have to enable render method from CounterEvent ** 
      
      <CountingEvent
        render={(count, incrementCount) => (
          <HoverIncrement count={count} incrementCount={incrementCount} />
        )}
      /> */}
      <br />
      <CountingEvent>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </CountingEvent>
      <br />
      <Section />
    </div>
  );
}

export default App;
