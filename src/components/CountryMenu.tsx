import { useState } from "react"
import { COUNTRIES } from "../utils/countries.ts"
import { StylesConfig, SingleValue } from "react-select"
import Select from "react-select"


interface OptionType {
    [key: string]: string
}

const options: OptionType[] = Object.keys(COUNTRIES).map(key => ({
    value: key,
    label: COUNTRIES[key]
}))


//custom style 
// Define the custom styles with explicit types
const customStyles: StylesConfig<OptionType> = {
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        width: "100%",
        margin: 0 ,
        color: "black",        
        backgroundColor : "inherit"
    }),

    control: (defaultStyles) => ({
        ...defaultStyles,
        width: "100%",
        margin: 0 ,
        backgroundColor: "inherit",
        // padding: "1px",
        border: "none",
        boxShadow: "none",
        borderRadius : 0
    }),

    dropdownIndicator: (defaultStyles) => ({
        ...defaultStyles,
        color: "black",
        fontSize:  "10px",
      }),
      indicatorSeparator: (defaultStyles) => ({
        ...defaultStyles,
        display: "none", // Hides the line separating the arrow from the input
      }),

    menu: (base) => ({
        ...base,    
        width: "100%",
        borderColor : "blue",
    }),

    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "black" }),
};

interface CountryMenuProps {
    onChange: (country: string) => void; // Accepts a callback function to update the parent state
  }


export const CountryMenu = ({onChange} : CountryMenuProps) => {
    //for single selection dropdown 
    const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(null)

    const handleChange = (newValue: SingleValue<OptionType>) => {
        console.log(newValue)
        setSelectedOption(newValue)
        if(newValue) {
            onChange(newValue.label) // Call the parent onChange with the selected country value
        }
    }
    return <div className="sm:w-[190px] bg-inherit border-b border-zinc-200 py-2 sm:py-[17px]">
        <Select styles={customStyles} options={options} onChange={(selectedValue) => {
        // Handle the selected value here
        handleChange(selectedValue || null); // Ensure it's null if no value is selected
      }} value={selectedOption} placeholder="Select a country" isMulti={false} />
    </div>
}

