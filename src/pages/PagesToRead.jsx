import { useEffect, useState } from "react";
import { getRead } from "../utils";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const PagesToRead = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const readBooksData = getRead();
      setReadBooks(readBooksData);
    };

    fetchData();
  }, []);

  
  const chartData = readBooks.map(book => ({
    name: book.bookName,
    totalPages: book.totalPages
  }));

  
  const CustomShapeBar = (props) => {
    const { x, y, width, height } = props;

   
    const path = `M ${x},${y + height} L ${x + width / 2},${y} L ${x + width},${y + height} Z`;

    return <path d={path} fill="#8884d8" />;
  };

  return (
    <div className="container mx-auto">
     
      <BarChart width={600} height={400} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      
        <Bar dataKey="totalPages" fill="#8884d8" shape={<CustomShapeBar />} />
      </BarChart>
    </div>
  );
};

export default PagesToRead;
