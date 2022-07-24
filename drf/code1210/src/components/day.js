import dummy from "../data/data.json"
import Day from './day';

export default function Date() {

    return (
        <ul className="list_date">
            {dummy.Day.map((day) => (
            <li>
                Day {Day.date}
            </li>
            ))}
        </ul>
    )
}