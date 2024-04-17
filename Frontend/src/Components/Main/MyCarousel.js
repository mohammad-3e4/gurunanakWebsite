import React, { useEffect, useState } from 'react';
import { Carousel } from 'flowbite-react';
import axios from 'axios';

export default function MyCarousel() {
  const [file, setFile] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/carousel');
      setFile(response.data);
      // console.log(response.data)
    }
    catch (err) {
      console.log(err);
    }
  }
  return (

    <div className="h-56 sm:h-64 md:h-80 lg:h-[500px] xl:h-100 2xl:h-svh">
      <Carousel>
        {file.map((item, index) => (
          <img key={index} src={`http://localhost:5000/uploads/carousel/${item.file_name}`} alt={`Slide  ${index + 1}`} />

        ))}
      </Carousel>
    </div>
  );
}

// <div className="h-56 sm:h-64 md:h-80 lg:h-[500px] xl:h-100 2xl:h-svh">
//   <Carousel>
//     <img src="./images/SR408056.jpg" alt="..." />
//     <img src="./images/Staffpic.jpg" alt="..." />
//     <img src="./images/SR406664.jpg" alt="..." />
//     <img src="./images/SR406644.jpg" alt="..." />
//     <img src="./images/SR408128.jpg" alt="..." />
//   </Carousel>
// </div>











