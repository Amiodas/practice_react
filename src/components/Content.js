import DoubleClickCounter from "./DoubleClickCounter";
import CountingEvent from "./CountingEvent";
import ThemeContext from "../contexts/themeContext";

export default function Content() {
  return (
    <div>
      <h3>I am Content Component.</h3>

      <CountingEvent>
        {(count, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {({ theme }) => (
                <DoubleClickCounter
                  count={count}
                  incrementCount={incrementCount}
                  theme={theme}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </CountingEvent>
    </div>
  );
}
