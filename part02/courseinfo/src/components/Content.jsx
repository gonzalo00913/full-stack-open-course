import Part from "./Part"

const Content = ({parts}) => {
  const sumExercises = parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <div>
        {
          parts.map((part) =>{
           return <Part key={part.id} part={part}/>
          })
        }
        <b>Total of {sumExercises} exercises</b>
    </div>
  )
}

export default Content