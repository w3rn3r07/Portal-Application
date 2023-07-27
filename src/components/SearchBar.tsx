import { Input } from "@chakra-ui/react";
import { useRef } from "react";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(ref.current?.value);
      }}
    >
      <Input ref={ref} placeholder="Enter Game Name Please" variant="Filled" />
    </form>
  );
};

export default SearchBar;
