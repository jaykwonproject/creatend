
'use client'
/* @jsxImportSource react */
import React, { useEffect, useState } from 'react';
import BlogTable from './components/BlogTable';

const Page: React.FC = () => {
  // Fetch data here
  const fetchData = async () => {
    try {
      // Fetch study-specific posts from the backend
      const response = await fetch(`https://creatend.vercel.app/api/test`);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const data = await response.json();
      return data.users;
    } catch (error:any) {
      console.error('Error fetching study posts:', error.message);
      return [];
    }
  };

  // State to store the fetched data
  const [studyPosts, setStudyPosts] = useState([]);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    fetchData().then((data) => setStudyPosts(data));
  }, []);

  // Render the page with the fetched data
  return (
    <div>
      {/* Any other components or content for the page can go here */}
      <BlogTable studyPosts={studyPosts} />
    </div>
  );
};

export default Page;
