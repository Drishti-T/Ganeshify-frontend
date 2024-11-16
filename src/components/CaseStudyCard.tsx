import { AppCard } from "./AppCard";

export const CaseStudyCard = ({ images }: { images: string[] }) => {

    return <div className="flex">

        <div className="border bg-white rounded-3xl px-3 py-3">
            <div className="flex  flex-col sm:flex-row gap-2">
             
                {images.map((img, index) => (
                        img && (
                            <AppCard
                                key={index} // Use `index` as the key since `images` is a small array
                                img={img}
                                basis={"md:basis-1/3"}
                            />
                        )
                    ))}

            </div>


        </div>
    </div>


}