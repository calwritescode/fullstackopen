const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => <h1>{props.course}</h1>;
  const Part = (props) => (
    <p>
      {props.name} {props.exercises}
    </p>
  );
  const Total = ({parts}) => {
    const total =  parts.map(({exercises}) => exercises)
                        .reduce((a, b) => a + b, 0);
    return (
      <p>Number of exercises {total}</p>
    );
  }
  

  
  const Content = ({parts}) => (
  parts.map(({name, exercises}) => (<Part name={name} exercises={exercises} key={name} />))
  );

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
