const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(function(part) {
          return <Part key = {part.id} part={part} />
        })}
      </div>
    )
  }
  
  const Total = ({ course }) => {
    const total = course.parts.reduce(function(sum, part) {
      return sum + part.exercises}, 0)
    return (
      <p>Total of {total} exercises</p>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }

  export default Course