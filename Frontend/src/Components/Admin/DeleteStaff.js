import React, { useEffect, useState } from "react";
import axios from 'axios';
import AdminPageLayout from "./AdminPageLayout";



export default function DeleteStaff() {
    const [facultyData, setFacultyData] = useState([]);
    const [facultyData1, setFacultyData1] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/joining');
                setFacultyData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/salary');
                setFacultyData1(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    // Function to filter faculty data by category
    const getFacultyByCategory = (category) => {
        return facultyData.filter((faculty) => faculty.category === category);
    };

    const handledelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/joining/${id}`)
            // console.log(`${id}`);

        }
        catch (err) {
            console.log(err);
        }
    }

    // Function to render a table based on faculty data for a specific category
    const renderTable = (category) => {
        const facultyByCategory = getFacultyByCategory(category);

        return (
            <>
                <div className='w-full' key={category}>
                    <div className="overflow-x-auto" >
                        <h2 className="text-xl text-orange font-semibold my-5">{category.toUpperCase()} </h2>
                        <table className="min-w-full text-left ">
                            <thead>
                                <tr className="bg-blue text-white">
                                    <th scope="col" className="px-4 py-2">Name</th>
                                    <th scope="col" className="px-4 py-2">Designation</th>
                                    <th scope="col" className="px-4 py-2">Qualification</th>
                                    <th scope="col" className="px-4 py-2">Date of Birth</th>
                                    <th scope="col" className="px-4 py-2">Date of Appointment</th>
                                    <th scope="col" className="px-4 py-2">Date of Retirement</th>
                                    <th scope="col" className="px-4 py-2">Action</th>


                                    {/* Add more columns as needed */}
                                </tr>
                            </thead>
                            <tbody>
                                {facultyByCategory.map((faculty) => (
                                    <tr className="hover:bg-gray-100" key={faculty.id}>
                                        <td className="border px-4 py-2">{faculty.name}</td>
                                        <td className="border px-4 py-2">{faculty.designation}</td>
                                        <td className="border px-4 py-2">{faculty.qualification}</td>
                                        <td className="border px-4 py-2">{faculty.date_of_birth}</td>
                                        <td className="border px-4 py-2">{faculty.date_of_appointment}</td>
                                        <td className="border px-4 py-2">{faculty.date_of_retirement}</td>
                                        <th scope="col" className="px-4 py-2"><button onClick={() => { handledelete(faculty.id) }} className="py-1 px-3 rounded-lg bg-orange text-white">Delete</button></th>


                                        {/* Add more columns as needed */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    };

    const getFacultyByCategory1 = (category) => {
        return facultyData1.filter((faculty) => faculty.category === category);
    };

    const handledelete1 = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/salary/${id}`)
            // console.log(`${id}`);

        }
        catch (err) {
            console.log(err);
        }
    }

    const renderTable1 = (category) => {
        const facultyByCategory1 = getFacultyByCategory1(category);

        return (
            <>
                <div className='w-full' key={category}>
                    <div className="overflow-x-auto" >
                        <h2 className="text-xl text-orange font-semibold my-5">{category.toUpperCase()} </h2>
                        <table className="min-w-full text-left ">
                            <thead>
                                <tr className="bg-blue text-white">
                                    <th scope="col" className="px-4 py-2">Name</th>
                                    <th scope="col" className="px-4 py-2">Designation</th>
                                    <th scope="col" className="px-4 py-2">Qualification</th>
                                    <th scope="col" className="px-4 py-2">Experience</th>
                                    <th scope="col" className="px-4 py-2">Pay Scale</th>
                                    <th scope="col" className="px-4 py-2">Action</th>


                                    {/* Add more columns as needed */}
                                </tr>
                            </thead>
                            <tbody>
                                {facultyByCategory1.map((faculty) => (
                                    <tr className="hover:bg-gray-100" key={faculty.id}>
                                        <td className="border px-4 py-2">{faculty.name}</td>
                                        <td className="border px-4 py-2">{faculty.designation}</td>
                                        <td className="border px-4 py-2">{faculty.qualification}</td>
                                        <td className="border px-4 py-2">{faculty.experience}</td>
                                        <td className="border px-4 py-2">{faculty.pay_scale}</td>
                                        <th scope="col" className="px-4 py-2"><button onClick={() => { handledelete1(faculty.id) }} className="py-1 px-3 rounded-lg bg-orange text-white">Delete</button></th>



                                        {/* Add more columns as needed */}
                                    </tr>
                                ))}
                            </tbody>


                        </table>

                    </div>
                </div>
            </>
        );
    };
    return (
        <div className="flex">
            <AdminPageLayout />

            <div className='w-full flex justify-center'>
                <div style={{ width: "90%" }} className="m-5 p-2 " >

                    <div className="container mx-auto">
                        <h1 className="text-center text-orange text-2xl font-bold mb-4">Staff Salary Details</h1>
                        {/* Render tables for different categories */}
                        {['principal', 'aided_tgt', 'unaided_pgt', 'unaided_tgt', 'unaided_pst/ntt'].map((category) => (
                            <div key={category}>
                                {renderTable1(category)}
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto">
                        <h1 className="text-center text-orange text-2xl font-bold mb-4">Staff Joining Details</h1>
                        {/* Render tables for different categories */}
                        {['aided_tgt', 'aided_pti', 'aided_drawing', 'aided_homescience', 'aided_workexperience', 'aided_primary', 'aided_nonteaching', 'unaided_pgt', 'unaided_tgt', 'unaided_pst/ntt', 'unaided_nonteaching', 'unaided_librarian'].map((category) => (
                            <div key={category}>
                                {renderTable(category)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    );
}