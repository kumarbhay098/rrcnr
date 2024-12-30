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
            पश्चिम रेलवे को अपना वर्तमान स्वरूप 5 नवम्बर, 1951 को दिया गया जब पूर्ववर्ती तत्कालीन बम्बई, बडोदा और सेन्ट्रल इंडिया रेलवे को अन्य रियासती रेलों यथा सौराष्ट्र राजस्थान और जयपुर के साथ मिलाया गया। स्वयं बीबी एंड सीआई रेलवे वर्ष 1855 में उस समय आरम्भ हुई, जब पश्चिमी तट पर गुजरात राज्य में अंकलेश्वर से उत्राण तक 29 मील लम्बे बड़ी लाइन रेल पथ का निर्माण किया गया। वर्ष 1864 में इस रेल मार्ग को मुंबई तक विस्तारित किया गया।
            </div>
        </>
    );
}

export default ImageData;
