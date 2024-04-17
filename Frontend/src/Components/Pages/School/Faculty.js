import axios from 'axios';

import React, { useState, useEffect } from 'react';

// import Arrow from "../../Main/Arrow";


// export default function Faculty() {

//     const TGT = [
//         { name: 'Mrs. Ramanjeet Kaur', designation: "T.G.T(Science)", qualification: "M.Sc, B.Ed", experience: "20 Years", payscale: "10300-34800+Gp 5000" },
//         { name: 'Mrs. Inderjeet Kaur', designation: "T.G.T(S.S.T)", qualification: "M.A, B.Ed, M.Ed", experience: "11 Years", payscale: "10300-34800+Gp 5000" },
//         { name: 'Mrs Vanita Sharma', designation: "T.G.T(English)", qualification: "M.A., B.Ed", experience: "08 Years", payscale: "10300-34800+Gp 5000" },
//         { name: 'Mrs Rekha', designation: "T.G.T( S.St)", qualification: "M.A(History), B.Ed", experience: "14 Years", payscale: "10300-34800+Gp 5000" },
//         { name: 'Ms. Neha Handa', designation: "T.G.T(Sci)", qualification: "M.Sc, B.Ed", experience: "08 Years", payscale: "10300-34800+Gp 5000" },
//         { name: 'MS. Dalvinder Singh', designation: "T.G.T(Hindi)", qualification: "	M.A. B.Ed, LLB	12", experience: "12 Years", payscale: "10300-34800+Gp 5000" },
//         { name: 'Mrs. Manvinder Kaur', designation: "TGT (Pbi)		", qualification: "M.A(Punjabi), B.Ed / M.Ed", experience: "09 Years", payscale: "10300-34800+Gp 5000" },
//         { name: 'S. Gurcharan Singh', designation: "P.T.I", qualification: "B.A, DPED, MPED", experience: "15 Years", payscale: "10300-34800+Gp 4000" },
//         { name: 'Mrs. Rachna Sharma', designation: "Home Sci Teacher", qualification: "M.Sc, B.Ed", experience: "06 Years", payscale: "10300-34800+Gp 4200" },
//         { name: 'S. Iqbal Singh', designation: "Drg. Teacher", qualification: "B.A/Dip in Arts & Craft", experience: "11 Years", payscale: "10300-34800+Gp 5000" },
//         { name: 'Mr. Neeta Kumar', designation: "W.Exp	", qualification: "B.A,Dip.(Electrical Engineering)", experience: "25 Years", payscale: "15910-20200+Gp 3000" },
//         { name: 'Ms. Seema Sharma', designation: "P.S.T", qualification: "B.A, E.T.T", experience: "06 Years", payscale: "10300-34800+Gp 4200" },
//         { name: 'Ms. Suman', designation: "P.S.T", qualification: "B.A, M.A. E.T.T", experience: "09 Years", payscale: "10300-34800+Gp 4200" },
//         { name: 'Ms. Asha Sharma', designation: "P.S.T", qualification: "B.Sc(Med.), E.T.T, B.Ed", experience: "09 Years", payscale: "10300-34800+Gp 4200" },
//         { name: 'Ms. Parminderjit Kau', designation: "P.S.T", qualification: "B.Sc, E.T.T", experience: "04 Years", payscale: "10300-34800+Gp 4200" },
//         { name: 'Ms. Jaswinder Kaur', designation: "P.S.T", qualification: "B.A. ETT/B.Ed	", experience: "02 Years", payscale: "10300-34800+Gp 4200" },
//         { name: 'Ms. Saloni Sharma', designation: "P.S.T", qualification: "B.A. ETT", experience: "20 Years", payscale: "10300-34800+Gp 4200" },
//         { name: 'Ms. Anju', designation: "P.S.T", qualification: "B.A. ETT", experience: "20 Years", payscale: "10300-34800+Gp 4200" },

//     ];


//     const PGT = [
//         { name: 'Mrs. Mandeep Kaur', designation: "PGT(Pbi & Comp)", qualification: "M.A, B.Ed PGDCA", experience: "12 Years", payscale: "10300-34800" },
//         { name: 'Mrs. Loveleenjeet Kaur', designation: "PGT(Hindi)", qualification: "M.A, B.Ed ", experience: "12 Years", payscale: "10300-34800" },
//         { name: 'Mrs. Kamaljit Kaur', designation: "PGT(Com)", qualification: "M.Com, B.EdM.Ed", experience: "20 Years", payscale: "10300-34800" },
//         { name: 'Mrs. Parminder Kaur', designation: "PGT(Bio)", qualification: "M.Sc., B.Ed", experience: "09 Years", payscale: "10300-34800" },
//         { name: 'Ms. Anuradha', designation: "PGT(Eco)", qualification: "M.A, B.Ed, M.Ed", experience: "01 Years", payscale: "10300-34800" },
//         { name: 'Mrs. Sangeeta Sharma', designation: "PGT(Eng)", qualification: "M.A, B.Ed", experience: "16 Years", payscale: "10300-34800" },
//         { name: 'Mrs. Devinderjit Kaur', designation: "PGT(maths)", qualification: "M.A, B.Ed PGDCA", experience: "11 Years", payscale: "10300-34800" },
//         { name: 'Mrs. Simmy Jain', designation: "PGT(Physics)", qualification: "M.Sc, B.Ed", experience: "08 Years", payscale: "10300-34800" },
//         { name: 'Mr. Sunil Kumar', designation: "PGT(Phy Edu)", qualification: "M.P.Ed", experience: "08 Years", payscale: "10300-34800" },
//         { name: 'Mrs. Prabhdeep Kaur', designation: "PGT(Music)", qualification: "M.A(Music Vocal), B.Ed", experience: "05 Years", payscale: "10300-34800" },
//         { name: 'Mrs Gurpreet Kaur', designation: "PGT(Pol SC)", qualification: "M.A, M.Ed", experience: "08 Years", payscale: "10300-34800" },
//         { name: 'Ms. Charanjit Kaur', designation: "PGT(History)", qualification: "M.A, M.Ed", experience: "02 Years", payscale: "10300-34800" },
//         { name: 'Ms. Jaspreet Kaur', designation: "PGT (Chemistry)	", qualification: "M.sc. B.Ed", experience: "", payscale: "10300-34800" },
//         { name: 'Ms. Ravneet Kau', designation: "PGT(Eng)", qualification: "M.A. B.Ed", experience: "", payscale: "10300-34800" },
//         { name: 'Ms. Sarina', designation: "PGT(Sociology)", qualification: "M.A. B.Ed", experience: "", payscale: "10300-34800" },
//         { name: 'Ms. Rita Rani ', designation: "PGT(IT)", qualification: "M.sc. IT,  B.Ed", experience: "", payscale: "10300-34800" },

//     ];

//     const TGT2 = [
//         { name: 'Ms. Gurdeep Kaur', designation: "TGT", qualification: "B.Sc, B.Ed	", experience: "09 Years", payscale: "10300-34800" },
//         { name: 'Mrs. Namrta', designation: "TGT(Maths)", qualification: "B.Sc, B.Ed	 ", experience: "09 Years", payscale: "10300-34800" },
//         { name: 'Mrs. Ruchi', designation: "TGT(SCi)", qualification: "M.Sc, B.Ed	", experience: "09 Years", payscale: "10300-34800" },
//         { name: 'Mrs. Sonu Babbar', designation: "TGT", qualification: "B.Sc, B.Ed	", experience: "09 Years", payscale: "10300-34800" },
//         { name: 'Mrs. Gurmohan Kaur', designation: "TGT(Science)", qualification: "B.Sc, MA, B.Ed", experience: "05 Years", payscale: "10300-34800" },

//     ];

//     const PST_NTT = [
//         { name: 'Ms. Gurdeep Kaur', designation: "PST", qualification: "B.A, B.Ed", experience: "06 Years", payscale: "5910-20200" },
//         { name: 'Paramjeet Kaur', designation: "Nursery", qualification: "2, NTT", experience: "23 Years", payscale: "5910-20200" },
//         { name: 'Rajinder Kaur', designation: "Nursery", qualification: "B.A II,N.T.T", experience: "11 Years", payscale: "5910-20200" },
//         { name: 'Harneet Kaur', designation: "Nursery", qualification: "B.A,NTT", experience: "04 Years", payscale: "5910-20200" },
//         { name: 'Ranbir Kaur', designation: "Computer", qualification: "B.Com ,B.Ed PGDCA", experience: "11 Years", payscale: "5910-20200" },
//         { name: 'Prableen Kaur', designation: "NTT", qualification: "B.A, NTT", experience: "02 Years", payscale: "5910-20200" },
//         { name: 'Ramanjit Kaur', designation: "PST", qualification: "MA, B.Ed.", experience: "01 Years", payscale: "5910-20200" },


//     ];
//     const aided_TGT = [
//         { name: 'Mrs. Ramanjeet Kaur', designation: "T.G.T(Science)", qualification: "M.Sc, B.Ed", date_of_birth: "25-09-1968", appointment_date: "07-05-1999", retirement_date: "30-09-2026" },
//         { name: 'Mrs. Inderjeet Kaur', designation: "T.G.T(S.S.T)", qualification: "M.A, B.Ed,M.Ed", date_of_birth: "16-06-1970", appointment_date: "11-11-2004", retirement_date: "30-06-2028" },
//         { name: 'Mrs Vanita Sharma', designation: "T.G.T(English)", qualification: "M.A., B.Ed", date_of_birth: "19-10-1976", appointment_date: "27-2-2009", retirement_date: "31-10-2034" },
//         { name: 'Mrs Rekha', designation: "T.G.T(S.St)", qualification: "M.A(History), B.Ed", date_of_birth: "28-7-1982", appointment_date: "15/03/2012", retirement_date: "31-7-2040" },
//         { name: 'Ms. Neha Handa', designation: "T.G.T(Science)", qualification: "M.Sc., B.Ed", date_of_birth: "17-5-1984", appointment_date: "09-02-2010", retirement_date: "30-05-2042" },
//         { name: 'S. Dalvinder Singh', designation: "T.G.T(Hindi)", qualification: "M.A. B.Ed, LLB", date_of_birth: "9-4-1972", appointment_date: "03-07-2006", retirement_date: "30-04-2030" },
//         { name: 'Mrs Satinder Kaur', designation: "T.G.T(Punjabi)", qualification: "M.A., B.Ed., Giani", date_of_birth: "15-12-1962", appointment_date: "06-03-2010", retirement_date: "31-12-2020" },
//         { name: 'Mrs. Manvinder Kau', designation: "T.G.T(Punjabi)", qualification: "M.A(Punbi), B.Ed/M.Ed", date_of_birth: "22/11/1979", appointment_date: "08/10/2013", retirement_date: "30-11-2037" },
//     ];

//     const primary_school_teacher = [
//         { name: 'Ms. Seema Sharma', designation: "P.S.T", qualification: "B.A, E.T.T", date_of_birth: "11-2-1983", appointment_date: "07-05-1999", retirement_date: "28-02-2041" },
//         { name: 'Ms. Suman', designation: "P.S.T", qualification: "B.A, M.A. E.T.T", date_of_birth: "19-10-1984", appointment_date: "05-03-2010", retirement_date: "31-10-2042" },
//         { name: 'Ms. Asha Sharma', designation: "P.S.T", qualification: "B.Sc(Med.), E.T.T, B.Ed", date_of_birth: "25-10-1979", appointment_date: "05-03-2010", retirement_date: "31-10-2037" },
//         { name: 'Ms. Parminderjit Kaur', designation: "P.S.T", qualification: "B.Sc, E.T.T", date_of_birth: "17/09/1987", appointment_date: "30/06/2012", retirement_date: "30-9-2045" },
//         { name: 'Ms. Jaswinder Kaur', designation: "P.S.T", qualification: "B.A. ETT/B.Ed", date_of_birth: "25-03-1990", appointment_date: "01-12-2014", retirement_date: "30-9-2048" },
//         { name: 'Ms. Anju', designation: "P.S.T", qualification: "BA, MA, DEID, BED", date_of_birth: "01-10-1986", appointment_date: "26-9-2018", retirement_date: "31-10-2044" },
//         { name: 'Ms. Saloni Sharma', designation: "P.S.T", qualification: "B.Com, M.Com, DEID", date_of_birth: "29-5-1994", appointment_date: "17-11-2018", retirement_date: "31-5-2052" },
//     ];

//     const non_teaching_staff = [
//         { name: 'Mr. Satish Kumar', designation: "Lab. Att.", qualification: "10+2", date_of_birth: "12-02-1972", appointment_date: "20-03-1997", retirement_date: "31-02-2030" },
//         { name: 'Ms. Suman', designation: "P.S.T", qualification: "10th", date_of_birth: "23/05/1974", appointment_date: "30/07/2004", retirement_date: "31-5-2034" },
//         { name: 'Ms. Asha Sharma', designation: "P.S.T", qualification: "10th", date_of_birth: "08/08/1964", appointment_date: "14/07/1986", retirement_date: "31-08-2024" },
//         { name: 'Ms. Saloni Sharma', designation: "P.S.T", qualification: "10th", date_of_birth: "04/10/1974", appointment_date: "21/09/2010", retirement_date: "31-10-2034" },
//     ];

//     const unaided_PGT = [
//         { name: 'Mrs. Mandeep Kaur', designation: "PGT(Pbi & Comp)", qualification: "M.A, B.Ed &PGDCA", date_of_birth: "20.09-1981", appointment_date: "01-04-2004", retirement_date: "30-09- 2039" },
//         { name: 'Mrs. Loveleenjeet Kaur', designation: "PGT(Hindi)", qualification: "M.A,B.Ed", date_of_birth: "11-07-1969", appointment_date: "01-07-2004", retirement_date: "31-07- 2027" },
//         { name: 'Mrs. Kamaljit Kaur', designation: "PGT(Com)", qualification: "M.Com, B.EdM.Ed", date_of_birth: "01-08-1969", appointment_date: "01-7-2005", retirement_date: "31-08- 2027" },
//         { name: 'Mrs. Parminder Kaur', designation: "PGT(Bio)", qualification: "M.Sc., B.Ed", date_of_birth: "26-07-1974", appointment_date: "09-07-2007", retirement_date: "31-07- 2032" },
//         { name: 'Mrs. Sangeeta Sharma', designation: "PGT(Eng)", qualification: "M.A,B.Ed", date_of_birth: "16-2-1972", appointment_date: "30-08-2008", retirement_date: "28-2- 2030" },
//         { name: 'Mrs. Devinderjit Kaur', designation: "PGT(Maths)", qualification: "M.Sc,B.Ed", date_of_birth: "06-06-1974", appointment_date: "13-10-2008", retirement_date: "30-09-2032" },
//         { name: 'Mrs. Simmy Jain', designation: "PGT(Physics)", qualification: "M.Sc,B.Ed", date_of_birth: "06-07-1983", appointment_date: "23-10-2008", retirement_date: "31-07- 2041" },
//         { name: 'Mr. Sunil Kumar', designation: "PGT(Phy Edu)", qualification: "M.P.Ed", date_of_birth: "17-10-1978", appointment_date: "01-01-2009", retirement_date: "31-10- 2036" },
//         { name: 'Mrs. Prabhdeep Kaur', designation: "PGT(Music)", qualification: "M.A(Music Vocal), B.Ed", date_of_birth: "13-10-1985", appointment_date: "17-09-2009", retirement_date: "31-10-2043" },
//         { name: 'Ms. Charanjit Kaur', designation: "PGT(History)", qualification: "MA (History), M.Ed", date_of_birth: "26-3-1987", appointment_date: "01/05/2016", retirement_date: "31-3-2045" },
//         { name: 'Ms. Anuradha', designation: "PGT(Eco)", qualification: "M.A, B.Ed, M.Ed", date_of_birth: "22/12/1991", appointment_date: "01/09/2016", retirement_date: "31-12-2049" },
//         { name: 'Ms. Jaspreet Kaur', designation: "PGT(Chem)", qualification: "M.Sc. (Chem", date_of_birth: "27/12/1988", appointment_date: "01/11/2017", retirement_date: "31-12-2046" },
//         { name: 'Ms. Kulwinderjit Kaur', designation: "PGT(Pol Sc)", qualification: "MA(Pol Sc), B.Ed", date_of_birth: "14-5-1987", appointment_date: "06-7-2019", retirement_date: "31-5-2045" },

//     ];

//     const unaided_TGT = [
//         { name: 'Ms. Gurdeep Kaur', designation: "TGT", qualification: "B.Sc, B.Ed", date_of_birth: "18-08-1975", appointment_date: "01-04-2006", retirement_date: "31-08-2033" },
//         { name: 'Mrs. Namrta', designation: "TGT(Maths)", qualification: "B.Sc, B.Ed", date_of_birth: "02-07-1974", appointment_date: "09-07-2007", retirement_date: "31-07-2032" },
//         { name: 'Ms. Ruchi', designation: "TGT(Sci)", qualification: "M.Sc, B.Ed", date_of_birth: "19-11-1981", appointment_date: "09-07-2007", retirement_date: "30-11-2039" },
//         { name: 'Mrs. Sonu', designation: "TGT", qualification: "B.Sc, B.Ed", date_of_birth: "01-0 4-1972", appointment_date: "09-07-2007", retirement_date: "30-04-2030" },
//         { name: 'Mrs. Gurmohan Kaur', designation: "B.Sc, MA, B.Ed", qualification: "10th", date_of_birth: "01-01-1975", appointment_date: "01-12-2009", retirement_date: "31-01-2033" },

//     ];

//     const unaided_PST_NTT = [
//         { name: 'Mrs. Gagandeep Kaur', designation: "PST", qualification: "B.A, B.Ed", date_of_birth: "04-01-1973", appointment_date: "01-07-2010", retirement_date: "04-01-2031" },
//         { name: 'Ms. Ramanjeet Kaur', designation: "PST", qualification: "M.A (Eng), B.Ed", date_of_birth: "18/05/1985", appointment_date: "01/05/2016", retirement_date: "31-5-2043" },
//         { name: 'Ms. Paramjeet Kaur', designation: "NTT", qualification: "+2, NTT", date_of_birth: "17-01-1965", appointment_date: "06-09-1993", retirement_date: "31-01- 2023" },
//         { name: 'Ms. Rajinder Kaur', designation: "NTT", qualification: "B.A II,N.T.T", date_of_birth: "14-04-1964", appointment_date: "14-10-2005", retirement_date: "30-04- 2022" },
//         { name: 'Ms. Harneet Kaur', designation: "NTT", qualification: "B.A,NTT", date_of_birth: "28-12-1982", appointment_date: "02-07-2012", retirement_date: "31-12-2040" },
//         { name: 'Ms. Prabhleen Kaur', designation: "NTT", qualification: "M.A (pbi), NTT", date_of_birth: "23/04/1984", appointment_date: "11/02/2016", retirement_date: "28-2-2042" },
//         { name: 'Ranbir Kaur', designation: "Computer", qualification: "PGDCA", date_of_birth: "09-03-1978", appointment_date: "01-05-2005", retirement_date: "31-03-2036" },
//     ];

//     const unaided_non_teaching = [
//         { name: 'Ms. Rajni Sharma', designation: "Assistant", qualification: "B.A", date_of_birth: "12-02-1972", appointment_date: "20-03-1997", retirement_date: "31-02-2030" },
//         { name: 'Ms. Manpreet Kaur', designation: "Clerk", qualification: "", date_of_birth: "", appointment_date: "", retirement_date: "" },
//         { name: 'Ms.Anureet Kaur', designation: "Assistant", qualification: "PGD E.COM., PDCA M.A. (History) ", date_of_birth: "11-1-1981", appointment_date: "01/01/2015", retirement_date: "31-1-2039" },
//         { name: 'Ms. Raj Kumari', designation: "Aya", qualification: "", date_of_birth: "01-01-1966", appointment_date: "27/02/2007", retirement_date: "31-1-2026" },
//         { name: 'S.Balveer Singh', designation: "Gate Keepe", qualification: "5th", date_of_birth: "03-04-1968", appointment_date: "16/10/2007", retirement_date: "30-4-2028" },
//         { name: 'Mr. Raj Kumar', designation: "Mali", qualification: "8th", date_of_birth: "01-7-1978", appointment_date: "19/09/2007", retirement_date: "31-7-2038" },
//         { name: 'Ms. Noori', designation: "Aya", qualification: "5th", date_of_birth: "07-9-1982", appointment_date: "04/07/2007", retirement_date: "31-9-2040" },
//         { name: 'Mr. Ram Jas', designation: "Mali", qualification: "10th", date_of_birth: "11-4-1989", appointment_date: "01/09/2009", retirement_date: "31-12-2047" },
//     ];

//     return (
//         <>
//         <Arrow/>
//             <div className="w-full h-full flex justify-center">
//                 <div style={{ width: "90%" }} className="m-5 p-2 ">
//                     <h2 style={{ textAlign: "center", marginBottom: "40px" }} className="text-3xl font-bold my-5 tracking-tight text-gray-900 sm:text-4xl"> <span style={{ color: 'var(--orange)' }}> FACULTY </span></h2>

//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="w-full border-none m-0">Very dedicated and trained highly qualified staff who are keen to impart knowledge and skills to their pupils with understanding.</h2>
//                     <br></br>
//                     <p style={{ fontSize: "18px" }} className="w-full border-none m-0">Creation of excellent students is their aim.
//                         <br></br><br></br>
//                         Names and Designations of Teachers( Aided Staff)
//                         <br></br><br></br>
//                         Nominal Roll of Aided Staff
//                     </p><br></br>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">PRINCIPAL</h2>
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>

//                                 <tr className="bg-blue text-white"  >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">EXPERIENCE</th>
//                                     <th scope="col" className="py-2 px-4  ">PAY SCALE</th>
//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 <tr className="hover:bg-gray-100">
//                                     <th scope="row" className="py-2 px-4  ">1</th>
//                                     <td className="py-2 px-4  ">Mrs Paramjeet Kaur</td>
//                                     <td className="py-2 px-4  ">Offg. Principal</td>
//                                     <td className="py-2 px-4  "></td>
//                                     <td className="py-2 px-4  "></td>
//                                     <td className="py-2 px-4  "></td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>

//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">TGT</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>

//                                 <tr className="bg-blue text-white">
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">EXPERIENCE</th>
//                                     <th scope="col" className="py-2 px-4  ">PAY SCALE</th>
//                                 </tr>
//                             </thead>
//                             <tbody >

//                                 {TGT.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <th scope="row" className="py-2 px-4  ">{index + 1}</th>
//                                         <td className="py-2 px-4  ">{item.name}</td>
//                                         <td className="py-2 px-4  ">{item.designation}</td>
//                                         <td className="py-2 px-4  ">{item.qualification}</td>
//                                         <td className="py-2 px-4  ">{item.experience}</td>
//                                         <td className="py-2 px-4  ">{item.payscale}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div><br></br>

//                     <h2 style={{ fontSize: "20px" }} className=" text-orange font-bold my-5">Nominal Roll of Un- Aided Staff</h2>
//                     <h2 style={{ fontSize: "20px" }} className="text-orange font-bold my-5">PGT</h2>


//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>

//                                 <tr className="bg-blue text-white" >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">EXPERIENCE</th>
//                                     <th scope="col" className="py-2 px-4  ">PAY SCALE</th>
//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 {PGT.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <th scope="row" className="py-2 px-4  ">{index + 1}</th>
//                                         <td className="py-2 px-4  ">{item.name}</td>
//                                         <td className="py-2 px-4  ">{item.designation}</td>
//                                         <td className="py-2 px-4  ">{item.qualification}</td>
//                                         <td className="py-2 px-4  ">{item.experience}</td>
//                                         <td className="py-2 px-4  ">{item.payscale}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div><br></br>

//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">TGT</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>

//                                 <tr className="bg-blue text-white">
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">EXPERIENCE</th>
//                                     <th scope="col" className="py-2 px-4  ">PAY SCALE</th>
//                                 </tr>
//                             </thead>
//                             <tbody >

//                                 {TGT2.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <th scope="row" className="py-2 px-4  ">{index + 1}</th>
//                                         <td className="py-2 px-4  ">{item.name}</td>
//                                         <td className="py-2 px-4  ">{item.designation}</td>
//                                         <td className="py-2 px-4  ">{item.qualification}</td>
//                                         <td className="py-2 px-4  ">{item.experience}</td>
//                                         <td className="py-2 px-4  ">{item.payscale}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div><br></br>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">PST / NTT</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>

//                                 <tr className="bg-blue text-white"  >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">EXPERIENCE</th>
//                                     <th scope="col" className="py-2 px-4  ">PAY SCALE</th>
//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 {PST_NTT.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <th scope="row" className="py-2 px-4  ">{index + 1}</th>
//                                         <td className="py-2 px-4  ">{item.name}</td>
//                                         <td className="py-2 px-4  ">{item.designation}</td>
//                                         <td className="py-2 px-4  ">{item.qualification}</td>
//                                         <td className="py-2 px-4  ">{item.experience}</td>
//                                         <td className="py-2 px-4  ">{item.payscale}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <br></br>
//                     <br></br>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">Nominal Roll of Aided Staff</h2>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">TGT</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>

//                                 <tr className="bg-blue text-white" >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF APPOINTMENT ON AIDED POST</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>

//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 {aided_TGT.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <th scope="row" className="py-2 px-4  ">{index + 1}</th>
//                                         <td className="py-2 px-4  ">{item.name}</td>
//                                         <td className="py-2 px-4  ">{item.designation}</td>
//                                         <td className="py-2 px-4  ">{item.qualification}</td>
//                                         <td className="py-2 px-4  ">{item.date_of_birth}</td>
//                                         <td className="py-2 px-4  ">{item.appointment_date}</td>
//                                         <td className="py-2 px-4  ">{item.retirement_date}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>

//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">PTI</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>

//                                 <tr className="bg-blue text-white">
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF APPOINTMENT ON AIDED POST</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>

//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 <tr className="hover:bg-gray-100"  >
//                                     <th scope="row" className="py-2 px-4  ">1</th>
//                                     <td className="py-2 px-4  ">S. Gurcharan Singh</td>
//                                     <td className="py-2 px-4  ">P.T.I</td>
//                                     <td className="py-2 px-4  ">B.A DPEd MPEd</td>
//                                     <td className="py-2 px-4  ">02-07-1975</td>
//                                     <td className="py-2 px-4  ">07-05-2001</td>
//                                     <td className="py-2 px-4  ">31-07-2033</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">Home Science Teacher</h2>
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>
//                                 <tr className="bg-blue text-white" >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF APPOINTMENT ON AIDED POST</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>
//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 <tr className="hover:bg-gray-100" >
//                                     <th scope="row" className="py-2 px-4  ">1</th>
//                                     <td className="py-2 px-4  ">Mrs. Rachna Sharma</td>
//                                     <td className="py-2 px-4  ">Home Science Teacher</td>
//                                     <td className="py-2 px-4  ">M.Sc, B.Ed</td>
//                                     <td className="py-2 px-4  ">10-8-1981</td>
//                                     <td className="py-2 px-4  ">21-09-2010</td>
//                                     <td className="py-2 px-4  ">31-08-2039</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">Drawing Teacher</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>
//                                 <tr className="bg-blue text-white" >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF APPOINTMENT ON AIDED POST</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>
//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 <tr className="hover:bg-gray-100">
//                                     <th scope="row" className="py-2 px-4  ">1</th>
//                                     <td className="py-2 px-4  ">S. Iqbal Singh</td>
//                                     <td className="py-2 px-4  ">Drg. Teacher</td>
//                                     <td className="py-2 px-4  ">B.A/Dip in Arts & Craft</td>
//                                     <td className="py-2 px-4  ">11-7-1981</td>
//                                     <td className="py-2 px-4  ">03-07-2006</td>
//                                     <td className="py-2 px-4  ">31-07-2039</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">Work Experience</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>

//                                 <tr className="bg-blue text-white" >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF APPOINTMENT ON AIDED POST</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>

//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 <tr className="hover:bg-gray-100">
//                                     <th scope="row" className="py-2 px-4  ">1</th>
//                                     <td className="py-2 px-4  ">Mr. Neeta Kumar</td>
//                                     <td className="py-2 px-4  ">W.Exp</td>
//                                     <td className="py-2 px-4  ">B.A,Dip.(Electrical Engineering)</td>
//                                     <td className="py-2 px-4  ">02-02-1969</td>
//                                     <td className="py-2 px-4  ">12-11-1990</td>
//                                     <td className="py-2 px-4  ">28-02-2027</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>

//                     <h2 style={{ fontSize: "20px" }} className=" text-orange font-bold my-5">Primary School Teacher</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>
//                                 <tr className="bg-blue text-white"  >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF APPOINTMENT ON AIDED POST</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>
//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 {primary_school_teacher.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <th scope="row" className="py-2 px-4  ">{index + 1}</th>
//                                         <td className="py-2 px-4  ">{item.name}</td>
//                                         <td className="py-2 px-4  ">{item.designation}</td>
//                                         <td className="py-2 px-4  ">{item.qualification}</td>
//                                         <td className="py-2 px-4  ">{item.date_of_birth}</td>
//                                         <td className="py-2 px-4  ">{item.appointment_date}</td>
//                                         <td className="py-2 px-4  ">{item.retirement_date}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">Non Teaching Staff</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>
//                                 <tr className="bg-blue text-white"  >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF APPOINTMENT ON AIDED POST</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>
//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 {non_teaching_staff.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <th scope="row" className="py-2 px-4  ">{index + 1}</th>
//                                         <td className="py-2 px-4  ">{item.name}</td>
//                                         <td className="py-2 px-4  ">{item.designation}</td>
//                                         <td className="py-2 px-4  ">{item.qualification}</td>
//                                         <td className="py-2 px-4  ">{item.date_of_birth}</td>
//                                         <td className="py-2 px-4  ">{item.appointment_date}</td>
//                                         <td className="py-2 px-4  ">{item.retirement_date}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">Nominal Roll of Un-Aided Staff</h2>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">PGT</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>
//                                 <tr className="bg-blue text-white" >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF JOINING</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>

//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 {unaided_PGT.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <th scope="row" className="py-2 px-4  ">{index + 1}</th>
//                                         <td className="py-2 px-4  ">{item.name}</td>
//                                         <td className="py-2 px-4  ">{item.designation}</td>
//                                         <td className="py-2 px-4  ">{item.qualification}</td>
//                                         <td className="py-2 px-4  ">{item.date_of_birth}</td>
//                                         <td className="py-2 px-4  ">{item.appointment_date}</td>
//                                         <td className="py-2 px-4  ">{item.retirement_date}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">TGT</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>
//                                 <tr className="bg-blue text-white" >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF JOINING</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>

//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 {unaided_TGT.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <th scope="row" className="py-2 px-4  ">{index + 1}</th>
//                                         <td className="py-2 px-4  ">{item.name}</td>
//                                         <td className="py-2 px-4  ">{item.designation}</td>
//                                         <td className="py-2 px-4  ">{item.qualification}</td>
//                                         <td className="py-2 px-4  ">{item.date_of_birth}</td>
//                                         <td className="py-2 px-4  ">{item.appointment_date}</td>
//                                         <td className="py-2 px-4  ">{item.retirement_date}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">PST/NTT</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>
//                                 <tr className="bg-blue text-white" >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF JOINING</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>

//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 {unaided_PST_NTT.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <th scope="row" className="py-2 px-4  ">{index + 1}</th>
//                                         <td className="py-2 px-4  ">{item.name}</td>
//                                         <td className="py-2 px-4  ">{item.designation}</td>
//                                         <td className="py-2 px-4  ">{item.qualification}</td>
//                                         <td className="py-2 px-4  ">{item.date_of_birth}</td>
//                                         <td className="py-2 px-4  ">{item.appointment_date}</td>
//                                         <td className="py-2 px-4  ">{item.retirement_date}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">Librarian</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>

//                                 <tr className="bg-blue text-white" >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF JOINING</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>

//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 <tr className="hover:bg-gray-100">
//                                     <th scope="row" className="py-2 px-4  ">1</th>
//                                     <td className="py-2 px-4  ">Mrs Paramjeet Kaur</td>
//                                     <td className="py-2 px-4  ">T.G.T (Math)</td>
//                                     <td className="py-2 px-4  ">B.Sc., M.Sc, B.Ed</td>
//                                     <td className="py-2 px-4  ">27-05-1964</td>
//                                     <td className="py-2 px-4  ">12-11-1990</td>
//                                     <td className="py-2 px-4  ">27-05-2022</td>
//                                 </tr>
//                                 <tr className="hover:bg-gray-100">
//                                     <th scope="row" className="py-2 px-4  ">2</th>
//                                     <td className="py-2 px-4  ">Mrs Paramjeet Kaur</td>
//                                     <td className="py-2 px-4  ">T.G.T (Math)</td>
//                                     <td className="py-2 px-4  ">B.Sc., M.Sc, B.Ed</td>
//                                     <td className="py-2 px-4  ">27-05-1964</td>
//                                     <td className="py-2 px-4  ">12-11-1990</td>
//                                     <td className="py-2 px-4  ">27-05-2022</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                     <h2 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">NON TEACHING (UNAIDED)</h2>

//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-left ">
//                             <thead>
//                                 <tr className="bg-blue text-white" >
//                                     <th scope="col" className="py-2 px-4  ">S.NO.</th>
//                                     <th scope="col" className="py-2 px-4  ">NAME</th>
//                                     <th scope="col" className="py-2 px-4  ">DESIGNATION</th>
//                                     <th scope="col" className="py-2 px-4  ">QUALIFICATION</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF BIRTH</th>
//                                     <th scope="col" className="py-2 px-4  ">DATE OF JOINING</th>
//                                     <th scope="col" className="py-2 px-4  ">Date of Retirement_date</th>
//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 {unaided_non_teaching.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <th scope="row" className="py-2 px-4  ">{index + 1}</th>
//                                         <td className="py-2 px-4  ">{item.name}</td>
//                                         <td className="py-2 px-4  ">{item.designation}</td>
//                                         <td className="py-2 px-4  ">{item.qualification}</td>
//                                         <td className="py-2 px-4  ">{item.date_of_birth}</td>
//                                         <td className="py-2 px-4  ">{item.appointment_date}</td>
//                                         <td className="py-2 px-4  ">{item.retirement_date}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }









export default function Faculty() {
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
        <div className='w-full flex justify-center'>
            <div style={{ width: "90%" }} className="m-5 p-2 " >
                <h2 style={{ marginBottom: "40px" }} className="text-3xl  text-center font-bold my-5 tracking-tight text-gray-900 sm:text-4xl"> <span style={{ color: 'var(--orange)' }}> FACULTY </span></h2>
                <h2  className="text-2xl text-orange w-full border-none m-0">Very dedicated and trained highly qualified staff who are keen to impart knowledge and skills to their pupils with understanding.</h2>
                <br></br>
                <p className="text-xl w-full border-none m-0">Creation of excellent students is their aim.</p>
                <br></br><br></br>


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
    );
}