import { useSelector } from "react-redux";

const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];


const Calendar = () => {
    const currentDate = useSelector(state => state.calendar.currentDate);
    // return <p>Cal</p>
    return <p>{months[new Date(currentDate).getMonth()]}, {new Date(currentDate).getFullYear()}</p>
}

export default Calendar;