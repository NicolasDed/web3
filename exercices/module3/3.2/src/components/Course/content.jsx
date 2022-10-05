import Part from "./part"

const Content = (props) => {
  const total = props.parts.reduce((acc, p) => acc + p.exercises, 0)

  const partslist = props.parts.map(part => {
    return <Part key={part.id} part={part.name} exercises={part.exercises}></Part>
  })

  return (
    <div>
      {partslist}
      <strong>total of {total} exercises</strong>
    </div>
  )
}

  export default Content