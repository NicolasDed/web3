import Header from "./header"
import Content from "./content"

const Course = (props) => {
    const courseslist = props.courses.map(course => {
        return <><Header course={course.name}></Header><Content parts={course.parts}></Content></>
    })

    return (
        <div>
            {courseslist}
        </div>
    )
}

export default Course