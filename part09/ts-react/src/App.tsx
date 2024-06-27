import { CoursePart } from "./types"

const App = () => {

  const courseName = "Half Stack application development";

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <h1>{courseName}</h1>
      {courseParts.map((part, index) => {
        switch (part.kind) {
          case "basic":
            return (
              <p key={index}>
                {part.name} {part.exerciseCount} <br />
                <i>{part.description}</i>
              </p>
            );
          case "group":
            return (
              <p key={index}>
                {part.name} {part.exerciseCount} <br />
                project exercises {part.groupProjectCount}
              </p>
            );
          case "background":
            return (
              <p key={index}>
                {part.name} {part.exerciseCount} <br />
                <i>{part.description}</i> <br />
                background material: <a href={part.backgroundMaterial}>{part.backgroundMaterial}</a>
              </p>
            );
          default:
            return assertNever(part);
        }
      })}
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
};

const assertNever = (value: never): never => {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};

export default App;