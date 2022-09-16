import Part from "components/Part/part"

const Content = (props) => {
    return (
      <div>
        <Part part={props.part1} exercises={props.exercises1} />
        <Part part={props.part2} exercises={props.exercises2} />
        <Part part={props.part3} exercises={props.exercises3} />
        {/* <p>
          {props.part} {props.exercises}
        </p>
        <p>
          {props.part2} {props.exercises2}
        </p>
        <p>
          {props.part3} {props.exercises3}
        </p> */}
      </div>
    )
  }

  export default Content