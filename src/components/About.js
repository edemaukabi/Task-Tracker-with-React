import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p> <div>This is Task Tracker App built </div> using React for tracking your tasks</p>
            <Link to='/'>Go Back</Link>
        </div>
    )
}
export default About