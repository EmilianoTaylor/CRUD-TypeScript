
import { useState } from "react";

type FilterNoteProps = {
  getNoteFilterValue: (filterValue: string) => void;
};

const FilterNote = ({ getNoteFilterValue }: FilterNoteProps) => {
  const [filterNoteVal, setFilterNoteVal] = useState("all");

// This event handler updates current select option and passes currently selected option value to App component  
const handleFilterNoteChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterNoteVal(e.target.value);
    getNoteFilterValue(e.target.value);
  };
  return (
    <select
      onChange={handleFilterNoteChanges}
      value={filterNoteVal}
      className="filter-todo"
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
    </select>
  );
};

export default FilterNote;