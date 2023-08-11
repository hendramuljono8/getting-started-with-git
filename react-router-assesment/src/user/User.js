import React, { useEffect, useState } from 'react';
import { useParams, Route, Link, Switch } from 'react-router-dom';
import UserProfile from './UserProfile';
import { fetchUserWithPosts } from '../api';
import PostList from './PostList';
import PostsNav from './PostsNav';
import ErrorMessage from '../common/ErrorMessage';

export const User = () => {
  const [user, setUser] = useState({ posts: [] });
  const [error, setError] = useState(undefined);
  const { userId } = useParams(); // Fetching the userId from route parameters

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError);

    return () => abortController.abort();
  }, [userId]);

  if (error) {
    return (
      <ErrorMessage error={error}>
        <p>
          <Link to="/">Return Home</Link> {/* Updated link to return to home */}
        </p>
      </ErrorMessage>
    );
  }

  return (
    <section className="container">
      <PostsNav />
      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="mb-3">{user.name}</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to={`/users/${userId}`} className="nav-link">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to={`/users/${userId}/posts`} className="nav-link">Posts</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`/users/${userId}/posts`} render={() => <PostList posts={user.posts} />} />
          <Route path={`/users/${userId}`} render={() => <UserProfile user={user} />} />
        </Switch>
      </div>
    </section>
  );
};

export default User;
