// import React from "react";
// import Myprops from "../../Myprops";


// export default function OurCertificate() {
//     return (
//         <div className="my-5">
//             <h2 style={{ marginBottom: "40px", color: "var(--orange)" }} className="text-3xl mt-5 text-center font-bold tracking-tight  sm:text-4xl">Certificates </h2>

//             <Myprops path="/" date="1" content="SELF CERTIFICATION FERFORMA" />
//             <Myprops path="./images/Recogination.pdf" date="2" content="RECOGINATION CERTIFICATE" />
//             <Myprops path="./images/AffilationLetter.pdf" date="3" content="AFFILATION LETTER" />
//             <Myprops path="./images/SocietyRegistration.jpeg" date="4" content="SOCIETY REGISTRATION" />
//             <Myprops path="./images/WaterSanitation.jpeg" date="5" content="WATER, HEALTH AND SANITATION" />
//             <Myprops path="./images/SchoolAffiliation.pdf" date="6" content="SCHOOL AFFILIATION CERTIFICATE" />
//             <Myprops path="./images/Buildingsefety.pdf" date="7" content="BUILDING SAFETY" />
//             <Myprops path="./images/FireSafety.jpg" date="8" content="FIRE SAFETY CERTIFICATE" />
//             <Myprops path="./images/Noc.pdf" date="9" content="NOC" />
            


//         </div>
//     )
// }



import React, { useEffect, useState } from "react";
import axios from "axios";


export default function OurCertificate() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);
    const fetchdata = async () => {
        try {
            const response = await axios.get('http://localhost:5000/certificate');
            // console.log('Response from backend:', response.data.reverse());
            setData(response.data.reverse());
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    };


    return (
        <div  className='overflow-scroll w-full h-[500px]'>
            <div className="w-full ">
                <h2 style={{ marginBottom: "40px" }} className="text-3xl  my-4 text-center font-bold tracking-tight text-orange sm:text-4xl">Certificates</h2>

                <div className='w-full  flex justify-center items-center h-full '>

                    {/* <ul className=' border max-w-full sm:max-w-full	 md:max-w-full lg:max-w-7xl '> */}
                    
                    <ul className='w-[100%] lg:w-[75%]  '>
                       
                        {data.map((file, index) => (
                            <li className=' transition duration-400  flex justify-between mb-4  w-full  items-center  gap-x-4 gap-y-2 px-4 py-2 rounded hover:shadow-md' key={index}>
                                <p className="text-md leading-6 text-gray-900">
                                    <strong style={{ color: "var(--blue)" }} className="font-semibold">{file.date} - </strong>

                                    {file.description}
                                </p>

                                <a
                                    className=" bg-orange flex-none  rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                    href={`http://localhost:5000/uploads/certificate/${file.file_name}`} target="_blank" rel="noopener noreferrer">
                                    Download Now<span aria-hidden="true">&rarr;</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}