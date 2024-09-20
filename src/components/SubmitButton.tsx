import React from 'react';

interface SubmitButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-52 py-4 text-md font-medium text-white focus:outline-none bg-black rounded-full border border-black hover:bg-white hover:text-black focus:z-10`}
        >
            Submit
        </button>
    );
};
