/* @jsxImportSource react */
'use client'
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

interface StudyPost {
  study_post_id: number;
  block_id: number;
  title: string;
  content: string;
  created: string;
  updated: string;
}

const StudyPage: React.FC = () => {
  const [studyPosts, setStudyPosts] = useState<StudyPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch study-specific posts from the backend
        const response = await fetch(`https://creatend.vercel.app/api/test`);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        setStudyPosts(data.users);
      } catch (error: any) {
        console.error('Error fetching study posts:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Study Posts</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {studyPosts.map((post) => (
          <BlogCard
            key={post.study_post_id}
            title={post.title}
            created={post.created}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
};

export default StudyPage;
