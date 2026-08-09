import PropTypes from "prop-types";

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>IsStudent: {props.student ? "True" : "False"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    student: PropTypes.bool.isRequired
};

Student.defaultProps = {

    name: "Guest",
    age: 0,

    student:false
}

export default Student;