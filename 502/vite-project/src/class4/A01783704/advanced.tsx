import React, { useState, useEffect } from "react";

// Adds a timestamp to the wrapped component
function withTimestamp(WrappedComponent: React.ComponentType<any>) {
  return function EnhancedComponent(
    props: React.ComponentProps<typeof WrappedComponent>
  ) {
    const timestamp = new Date().toLocaleTimeString();
    return <WrappedComponent {...props} timestamp={timestamp} />;
  };
}

const Message = ({ text, timestamp }: { text: string; timestamp: string }) => (
  <div>
    <p>{text}</p>
    <small>Rendered at: {timestamp}</small>
  </div>
);

const MessageWithTimestamp = withTimestamp(Message);

// Render Props Pattern: MouseTracker
class MouseTracker extends React.Component<{
  children: (pos: { x: number; y: number }) => JSX.Element;
}> {
  state = { x: 0, y: 0 };

  handleMouseMove = (event: React.MouseEvent) => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  render() {
    return (
      <div
        onMouseMove={this.handleMouseMove}
        style={{ height: "200px", border: "1px solid black" }}
      >
        {this.props.children(this.state)}
      </div>
    );
  }
}

// Custom Hook: useWindowWidth
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// Demo Component: Advance
const Advanced = () => {
  const width = useWindowWidth();

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Advanced React Patterns</h1>

      <h2>1. Higher-Order Component</h2>
      <MessageWithTimestamp text="This is an HOC-enhanced message." />

      <h2>2. Render Props</h2>
      <MouseTracker>
        {({ x, y }) => (
          <p>
            Mouse position: ({x}, {y})
          </p>
        )}
      </MouseTracker>

      <h2>3. Custom Hook</h2>
      <p>Current window width: {width}px</p>
    </div>
  );
};

export default Advanced;
