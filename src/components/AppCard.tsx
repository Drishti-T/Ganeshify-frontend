
export const AppCard = ({ img , basis}: { img: string ,basis : string }) => {
  return <div className={`flex-1 ${basis} sm:basis-1/2 rounded-lg`}>
    <img src={img} className="w-screen h-auto sm:w-full sm:h-full object-cover rounded-2xl" />
  </div>

}