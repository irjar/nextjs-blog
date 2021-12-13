import { Fragment } from "react";
import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";

function HomePage(props) {
  // 1 hero section where we present ourselves
  // 2 featured posts section
  return (
    <Fragment>
      <Head>
        <title>Irmina's blog</title>
        <meta
          name="description="
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
