
// export const AppCard = ({ img , basis}: { img: string ,basis : string }) => {
//   return <div className={`flex-1 ${basis} sm:basis-1/2 rounded-lg`}>
//     <img src={img} className="w-screen h-auto sm:w-full sm:h-full object-cover rounded-2xl " />
//   </div>

import { useState } from "react";

// }

// export const AppCard = ({ img, basis }: { img: string; basis: string }) => {
//   return (
//     <div className={`flex-1 ${basis} sm:basis-1/2 rounded-2xl overflow-hidden`}>
//       <div className="relative group">
//         <img
//           src={img}
//           className="w-screen h-auto sm:w-full sm:h-full object-cover transition-transform duration-300 group-hover:scale-125"
//         />
//       </div>
//     </div>
//   );
// };

// export const AppCard = ({ img, basis }: { img: string; basis: string }) => {
//   return (
//     <div
//       className={`flex-1 ${basis} sm:basis-1/2 rounded-lg relative group`}
//     >
//       <div
//         className="relative group-hover:scale-110 group-hover:z-10 group-hover:-translate-y-0 transition-all duration-300 cursor-pointer"
//       >
//         <img
//           src={img}
//           className="w-full hover:ring hover:ring-black hover:ring-offset-2 h-auto object-cover rounded-2xl transition-transform duration-300"
//         />
//       </div>
//     </div>
//   );
// };


export const AppCard = ({ img, basis }: { img: string; basis: string }) => {

  const [isPromptOpen, setPromptOpen] = useState(false);


  const handleImageClick = () => {
    setPromptOpen(true); // Open the prompt
  };

  const closePrompt = () => {
    setPromptOpen(false);
  }

  return (
    <div
      className={`flex-1 ${basis} sm:basis-1/2 rounded-xl relative group`}
    >
      <div onClick={handleImageClick}
        className="relative group-hover:scale-110 group-hover:z-10 group-hover:-translate-y-0 transition-all duration-300 cursor-pointer"
      >
        <img
          src={img}
          className="w-full hover:ring hover:ring-black hover:ring-offset-2 h-auto object-cover rounded-2xl transition-transform duration-300"
        />
      </div>

      {isPromptOpen && (

        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closePrompt} // Close the prompt when clicking outside
        >
          <div
            className="relative flex justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >

            <div
              className="absolute bg-white p-2 rounded-xl shadow-lg z-50 flex justify-center relative max-w-[90%] max-h-[90%] sm:max-w-[90%] sm:max-h-[90%] md:max-w-[90%]  md:max-h-[90%] lg:max-w-[65%] lg:max-h-[65%] xl:max-w-[60%] xl:max-h-[60%]"          

            >
              <img
                src={img}
                className="rounded-xl w-auto h-auto object-contain"
                alt="Enlarged image"
              />

              <div className="absolute top-2 right-2 p-2">
                <button
                  onClick={closePrompt} // Close the prompt when clicked
                  className="text-white bg-zinc-600 px-3 py-1 rounded-full"
                >
                  X
                </button>
              </div>

            </div>


          </div>
        </div>


      )}
    </div>
  );
};










