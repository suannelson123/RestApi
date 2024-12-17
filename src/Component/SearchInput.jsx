import { useContext, useRef } from "react";
import { Input } from "../components/ui/input";
import PropTypes from "prop-types";
import { ApiContext } from "../ContextApi/Context";

const SearchInput = ({ className }) => {
  const inputRef = useRef(null);
  const { countryName, setCountryName } = useContext(ApiContext);
  const handleOnchange = (e) => {
    setCountryName(e.target.value);
  };

  return (
    <Input
      ref={inputRef}
      onChange={handleOnchange}
      type="text"
      placeholder="Search for a country..."
      className={className}
      defaultValue={countryName}
    />
  );
};

SearchInput.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SearchInput;
