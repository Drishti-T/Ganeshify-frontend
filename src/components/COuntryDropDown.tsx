import { useState, useEffect } from 'react';

// Define the type to include `callingCode`
interface CountryOption {
    value: string;
    label: string;
    callingCode: string;
}

interface CountryDropdownProps {
    onChange: (value: string, callingCode: string) => void; // Updated to include callingCode
}

function CountryDropdown({ onChange }: CountryDropdownProps) {
    // State to hold the list of country options
    const [options, setOptions] = useState<CountryOption[]>([]);
    // State to hold the selected country value
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    useEffect(() => {
        // Fetch data from the REST Countries API
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countryOptions = data.map((country: any) => ({
                    value: country.name.common || country.name.official,  // Country code
                    label: country.name.common || country.name.official,  // Common or official name
                    callingCode: country.idd?.root + (country.idd?.suffixes?.[0] || ''),  // Calling code
                })).sort((a: CountryOption, b: CountryOption) => a.label.localeCompare(b.label));               

                // sort((a: CountryOption, b: CountryOption) => a.callingCode.localeCompare(b.callingCode));
                
                
                setOptions(countryOptions);
            });
    }, []);

    // Handle the selection of a country
    const handleChange = (option: CountryOption | null) => {
        if (option) {
            setSelectedCountry(option.value);
            console.log(`Selected Country: ${option.label}, Calling Code: ${option.callingCode}`);
            onChange(option.label, option.callingCode);
        } else {
            setSelectedCountry(null);
            onChange('', ''); 
        }
    };

    return (
        <div>
            <select className="bg-inherit border-b border-slate-400 py-4  sm:py-6 w-fit "
                id="country-select"
                onChange={(e) => {
                    const selectedOption = options.find(option => option.value === e.target.value);
                    handleChange(selectedOption || null);
                }}
                value={selectedCountry || ''}
            >
                <option value="">Select a country</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CountryDropdown;


