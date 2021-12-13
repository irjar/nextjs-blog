import Head from "next/head";
import { Fragment } from "react";
import { getAllPosts } from "../../lib/post-util";
import AllPosts from "./all-posts";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All my posts.</title>
        <meta
          name="description"
          content="A list of all programing-related tutorials and posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
