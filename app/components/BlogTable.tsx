// components/BlogTable.tsx

import React from 'react';

interface BlogTableProps {
  studyPosts: any[]; // Adjust the type based on the actual structure of your data
}

const BlogTable: React.FC<BlogTableProps> = ({ studyPosts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Content</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {studyPosts.map((post) => (
            <tr key={post.study_post_id} className="hover">
              <th>{post.study_post_id}</th>
              <td>{post.title}</td>
              <td>
                {/* Display up to 20 characters, add ... if content exceeds 20 characters */}
                {post.content.length > 20 ? `${post.content.substring(0, 20)}...` : post.content}
              </td>
              <td>{new Date(post.created).toLocaleDateString('en-US')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
