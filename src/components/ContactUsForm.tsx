import axios from "axios";
import CountryDropdown from "./COuntryDropDown"; // Make sure the import name is correct
import { SubmitButton } from "./SubmitButton"; // Ensure this component is defined correctly
import { ChangeEvent, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND;

export const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        country: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((oldData) => ({
            ...oldData,
            [name]: value,
        }));
        console.log(name, value);
    };

    const validateForm = () => {
        const { firstName, lastName, email, phoneNumber, country, message } = formData;
        if (!firstName || !lastName || !email || !phoneNumber || !country || !message) {
            return 'Please fill out all fields.';
        }
        return '';
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent form default behavior
        const error = validateForm();
        if (error) {
            setErrorMessage(error);
            return; // Stop submission if there are errors
        }
        setErrorMessage(''); // Clear error message if all fields are filled

        try {
            const response = await axios.post(`${BACKEND_URL}api/v1/user/form`, formData);
            console.log(response.data);  // Log response data after successful submission
        } catch (error) {
            console.error('Error submitting form:', error); // Handle and log errors
        }
    };

    return (
        <div className="bg-zinc-100 w-screen sm:w-fit px-8 py-8 rounded-3xl border">
            <div className="text-2xl font-semibold">
                Collaborate with Ganeshify
            </div>
            {errorMessage && <div className="text-red-500">{errorMessage}</div>} {/* Display error message */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div><InputBox className="w-full sm:w-[290px]" name={"firstName"} placeholder={"First Name"} onChange={handleChange} /></div>
                <div><InputBox className="w-full sm:w-[290px]" name={"lastName"} placeholder={"Last Name"} onChange={handleChange} /></div>
            </div>
            <div>
                <div><InputBox className="w-full" name={"email"} placeholder={"Email Address"} onChange={handleChange} /></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <div><CountryDropdown onChange={(country: string) => {
                    setFormData(prevData => ({
                        ...prevData,
                        country: country, // Set the selected country
                    }));
                }} /></div>
                <div>
                    <InputBox className="w-full sm:w-[240px]" name={"phoneNumber"} placeholder={"Phone Number"} onChange={handleChange} />
                </div>
            </div>
            <div>
                <TextEditor name={"message"} onChange={handleChange} />
            </div>
          
            <div>
                <SubmitButton onClick={handleSubmit} />
            </div>
        </div>
    );
}

interface InputBoxType {
    placeholder: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;  // Make className optional
}

function InputBox({ placeholder, onChange, name, className }: InputBoxType) {
    return (
        <div>
            <input
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                className={`bg-inherit border-b border-zinc-200 focus:border-slate-700 placeholder-zinc-400 sm:py-6 py-4 sm:py-6 px-2 focus:outline-none ${className}`}
            />
        </div>
    );
}

function TextEditor({ onChange, name }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void, name: string }) {
    return (
        <div>
            <div className="w-full mb-4">
                <div className="flex items-center justify-between">
                    <div className="py-2 bg-inherit rounded-b-lg w-full">
                        <label className="sr-only">Publish post</label>
                        <textarea
                            name={name}
                            onChange={onChange}
                            id="editor"
                            rows={8}
                            className="focus:outline-none block w-full pt-3 text-sm text-gray-800 bg-inherit border-b border-slate-400 pl-2"
                            placeholder="Let us know about your project..."
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
