import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { ApiContext } from "../ContextApi/Context";

const Selection = ({ className }) => {
  const { setRegion, filteredContinent } = useContext(ApiContext);

  const handleValueChange = (value) => {
    setRegion(value);
  };

  return (
    <Select className={className} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[50%] h-[50px] lg:w-[20%]">
        <SelectValue placeholder="Filter By Region" />
      </SelectTrigger>
      <SelectContent>
        {filteredContinent.map((continent, index) => (
          <SelectItem key={index} value={continent}>
            {continent}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Selection;
