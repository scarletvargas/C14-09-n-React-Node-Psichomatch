import axios from "axios";
import { useEffect, useState } from "react";
import Therapist from "../Components/Therapist-Info";
const DashboardSearchTherapist = function () {
  async function getTherapist (page) {
    try {
      const {data} = await axios.get(`http://localhost:3001/therapist?page=${page}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }

  const [therapist, setTherapist] = useState({});
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const therapistData = await getTherapist(1);
        setTherapist(therapistData);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const prevButtonHandler = async (e) =>{
    e.preventDefault();
    
    
    if(page !== 1) {
      setPage((prev)=> prev-1)
      const therapistData = await getTherapist(page);
      setTherapist(therapistData);
    }
    
    
  } 

  const nextButtonHandler = async (e) =>{
    e.preventDefault();
    
    if(page < therapist.totalPages) {
      setPage((prev)=> prev+1)
      const therapistData = await getTherapist(page);
      setTherapist(therapistData);
    }
  } 

  return (
    <>

    {therapist.therapists?.map(x=> {
    return(<Therapist key={x.id} id={x.id} name={x.name} lastName={x.lastName} price={x.price} category={x.Category.name} image={x.image} rating = {x.rating} />)})}
    <button onClick={prevButtonHandler}>prev</button>
    <button onClick={nextButtonHandler}>next</button>
    </>
  )
}

export default DashboardSearchTherapist;