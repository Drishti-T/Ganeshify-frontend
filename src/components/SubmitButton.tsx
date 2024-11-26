import React from 'react';

interface SubmitButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
    status: "idle" | "loading" | "disabled";
}

// export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
//     return (
//         <button
//             onClick={onClick}
//             className={`w-52 py-4 text-md font-medium text-white focus:outline-none bg-black rounded-full border border-black hover:bg-white hover:text-black focus:z-10`}
//         >
//             Submit
//         </button>
//     );
// };


export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, status }) => {
    return (
        <button
            onClick={onClick}
            disabled={status === "loading" || status === "disabled"}
            className={`w-52 py-4 text-md font-medium rounded-full border focus:outline-none focus:z-10 transition-all 
                ${
                    status === "disabled"
                        ? "bg-gray-400 text-gray-700 border-gray-400 cursor-not-allowed"
                        : "bg-black text-white border-black hover:bg-white hover:text-black"
                }`}
        >
            {status === "loading" ? (
                <span className="flex items-center justify-center">
                    <svg
                        className="animate-spin h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C6.716 0 0 6.716 0 12h4zm2 5.291A7.96 7.96 0 004 12H0c0 2.577.978 4.919 2.636 6.636L6 17.291z"
                        ></path>
                    </svg>
                    Submitting...
                </span>
            ) : (
                "Submit"
            )}
        </button>
    );
};