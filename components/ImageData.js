import Image from 'next/image';
import React from 'react';

function ImageData() {
    return (
        <>
            <div className="flex gap-1 justify-center overflow-x-auto mt-4">
                {/* Each item will be in a row with equal width and consistent styling */}
                <div className="flex-shrink-0 w-80">
                    <Image src={'/min1.jpg'} width={300} height={200} className="object-cover" alt="Minister Image 1" />
                    <h3 className="text-center font-bold text-md mt-2">Shri Ashwini Vaishnaw Honorable Minister for Railways</h3>
                </div>
                <div className="flex-shrink-0 w-80">
                    <Image src={'/min2.jpg'} width={300} height={200} className="object-cover" alt="Minister Image 2" />
                    <h3 className="text-center font-bold text-md mt-2">Shri V. Somanna
                        Honorable Minister of State for Railways</h3>
                </div>
                <div className="flex-shrink-0 w-80">
                    <Image src={'/min3.jpg'} width={300} height={200} className="h-96 object-cover" alt="Minister Image 3" />
                    <h3 className="text-center font-bold text-md mt-2">Shri Ravneet Singh
                        Honorable Minister of State for Railways</h3>
                </div>

            </div>
            <div className='mt-7 p-3'>
                Northern Railway, the Jewel Set in the Crown of Indian Railways, has embarked on the mission to vanquish distances and create its own metaphor of existence. Formally established in the year 1952, it remains the largest zone in terms of route Kilometers, even after the re-organization of the Indian Railways. Northern Railway now comprises of 5 Divisions-Ambala, Delhi, Ferozpur, Lucknow and Moradabad.
            </div>
        </>
    );
}

export default ImageData;
