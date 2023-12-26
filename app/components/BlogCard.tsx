import React from 'react';

interface BlogCardProps {
  title: string;
  created: string;
  content: string;
}

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};

const BlogCard: React.FC<BlogCardProps> = ({ title, created, content }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-title text-sm text-secondary">{formatDate(created)}</h3>
        <p className="card-text line-clamp-3">{content}</p>
        {/* Add ellipsis after 3 lines, adjust line-clamp value as needed */}
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
