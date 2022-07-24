import dummy from "../data/data.json";

export default function Id() {

    return (
        <ul className="list_id">
            {dummy.Id.map((day) => (
            <li>
                Id {Id.id}
            </li>
            ))}
        </ul>
    )
}