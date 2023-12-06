import { Select } from "@chakra-ui/react";
import { TICKET_STATUS } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams("");

  function handleOnChange(e) {
    if (e.target.value) searchParams.set("status", e.target.value);
    else searchParams.delete("status");
    setSearchParams(searchParams);
  }
  return (
    <>
      <Select
        placeholder="Filter By:"
        defaultValue={searchParams.get("status")}
        onChange={handleOnChange}
      >
        {" "}
        {Object.keys(TICKET_STATUS).map((status) => (
          <option value={status} key={status}>
            {status}
          </option>
        ))}
      </Select>
    </>
  );
}

export default Filter;
