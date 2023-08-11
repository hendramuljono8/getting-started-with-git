import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export const PostLink = ({ post }) => {
  const { url } = useRouteMatch(); // get the current URL from the route match

  return (
    <li className="list-group-item text-truncate">
      <Link to={`${url}/${post.id}`}>{post.title}</Link> {/* Use the current URL to create a relative link */}
    </li>
  );
};

export default PostLink;
