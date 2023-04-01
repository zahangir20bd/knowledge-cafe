import React from "react";

const FAQBlog = () => {
  return (
    <div className="card mt-4">
      <h2 className="m-3 fw-bold text-decoration-underline">
        FAQ Blog Section:
      </h2>
      <div className="m-4 p-2 card">
        <h4 className="fw-bold"> FAQ Title: State vs Props</h4>
        <p style={{ textAlign: "justify" }} className="px-2 ">
          In React, state and props are two of the most important concepts that
          are used to manage and manipulate the data in a component. <br />
          <br />
          <span className="fw-bold">State:</span> State represents an updatable
          structure that contains data or information about the component, which
          can change over time. The change in state can occur in response to
          user actions or system events, such as network requests or timeouts.
          The state is the heart of the React component, and it determines the
          behavior of the component and how it will render. It is crucial to
          keep the state as simple as possible, only containing the data that is
          necessary for the component to function properly. The state represents
          the component's local state or information, and it can only be
          accessed or modified inside the component or by the component
          directly. <br /> <br />
          <span className="fw-bold">Props: </span> Props (short for properties)
          are passed to a component by its parent component. They are read-only
          and cannot be modified within the component. Props are used to pass
          data from one component to another, and they help to keep the
          components decoupled and reusable.
          <br />
          <br />
          In shortly I can say, props are used to pass data from a parent
          component to a child component, while state is used to manage and
          update the internal data of a component. Both are important concepts
          in React.
        </p>
      </div>
      <div className="m-4 p-2 card">
        <h4 className="fw-bold"> FAQ Title: How does useState work?</h4>
        <p style={{ textAlign: "justify" }} className="px-2 ">
          "useState" is a built-in React Hook that allows functional components
          to manage state. It works by providing a way to declare state
          variables inside a component and returns an array with the current
          state value and a function to update it. The initial value of the
          state variable is passed as an argument to the "useState" function.
          When the state is updated using the function returned by "useState",
          React re-renders the component with the new state value. Using
          "useState", we can create stateful functional components, which can
          make code more concise and easier to read.
        </p>
      </div>
      <div className="m-4 p-2 card">
        <h4 className="fw-bold">
          {" "}
          FAQ Title: What are the purposes of useEffect other than fetching
          data?
        </h4>
        <p style={{ textAlign: "justify" }} className="px-2 ">
          "useEffect" is a React Hook that enables functional components to
          handle side effects. The primary use of "useEffect" is data fetching.
          But it has several other purposes as well. One of the most common use
          case is updating the document title based on the current state of the
          component. Besides, it can be used to handle window events like
          resizing or scrolling. "useEffect" can also be used to manage state
          outside of a component, such as setting up and tearing down web
          sockets, connecting to third-party libraries, or managing timers.
          Overall, "useEffect" simplifies the process of building complex and
          responsive user interfaces with React by providing a way to manage
          state and handle side effects in a clean and efficient way.
        </p>
      </div>
      <div className="m-4 p-2 card">
        <h4 className="fw-bold"> FAQ Title: How Does React work??</h4>
        <p style={{ textAlign: "justify" }} className="px-2 ">
          React is a JavaScript library that allow to build user interfaces in a
          declarative and efficient way. It works by creating a virtual
          representation of the UI which is called the Virtual DOM, and it is a
          lightweight copy of the actual DOM. React uses this Virtual DOM to
          compare and update only the parts of the UI that have changed, which
          results in better performance and faster rendering. <br />
          <br />
          React follows a unidirectional data flow pattern, where data flows
          only from the parent components to the child components. Each
          component can have its own state, which allows for more modular and
          reusable code. React also provides a set of lifecycle methods that
          enable to control the behavior of a component during different stages
          of its life cycle. <br /> <br /> Overall, React's efficient rendering
          process, unidirectional data flow, and lifecycle methods make it a
          powerful tool for building complex and responsive user interfaces with
          ease.
        </p>
      </div>
    </div>
  );
};

export default FAQBlog;
