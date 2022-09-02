import fetchNotes from "../api/fetchNotes";
import wrapSuspense from "../api/wrapSuspense";
const resource = wrapSuspense<string[]>(fetchNotes("success"));

const Notes = () => {
  console.log("Reload - Notes");
  const notes = resource();
  return (
    <div>
      <p>Elements</p>
      <ul>
        {notes.map((note, i) => (
          <li key={i}>
            <p>{note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
