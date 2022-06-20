const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const content = [
    { part: part1, exercises: exercises1 },
    { part: part2, exercises: exercises2 },
    { part: part3, exercises: exercises3 },
  ];
  const total = exercises1 + exercises2 + exercises3;

  const Header = (props) => <h1>{props.course}</h1>;
  const Part = (props) => (
    <p>
      {props.part} {props.exercises}
    </p>
  );
  const Total = (props) => <p>Number of exercises {props.total}</p>;

  const Content = (props) => {
    return props.content.map(({ part, exercises }) => (
      <Part part={part} exercises={exercises} key={part} />
    ));
  };

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={total} />
    </div>
  );
};

export default App;