import React, {useState, useEffect} from 'react'
import styles from './styles.modules.css'

const Blog = () => {

  const [data, setData] = useState(null)
  
  const fetchData = async () => {
    try {
      // Fetch data from your API endpoint
      const response = await fetch('http://localhost:3001');
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      // Parse the JSON response
      const responseData = await response.json();
      // const responseImage = await response.blob();
      // const url = URL.createObjectURL(responseImage);
      // setImage(url);
      // Update state with fetched data
      // console.log("This is data: " , responseData)
      console.log("This is data: " , responseData);
      setData(responseData);
      // setText(responseData);
      // Set loading state to false
    } catch (error) {
      console.error('Error fetching data:', error);
      // Optionally, handle error state
    }
  };

  useEffect(()=>{
    fetchData()
  },[])
  
  const array = [<h1>Test</h1>,<div>Test div</div>]

  return (
    <div>
      <div className="centeringImage">
        {/* <img src={image}></img> */}
        <div className="rectangle">
          <div className="aboutme">
            {/* {<h1>{data.title}</h1>}
            {<h3>{data.series}</h3>}
            {<p>{data.date}</p>} */}
          </div>
        </div>
      </div>
      <div>
        {array}
      </div>
    </div>
  )
}

export default Blog
