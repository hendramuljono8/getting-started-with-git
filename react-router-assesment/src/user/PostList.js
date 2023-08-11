import React from "react";
import { Route, Switch } from "react-router-dom";
import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

export const PostList = ({ posts }) => {
  const postLinks = posts.map((post) => (
    <PostLink key={post.id} userId={post.userId} post={post} />
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Switch>
          <Route path="/test/post-list/posts/:postId" render={() => <Post posts={posts} />} />
          <Route path="/test/post-list/posts" component={NoPostSelectedMessage} />
        </Switch>
      </div>
    </div>
  );
};

export default PostList;
