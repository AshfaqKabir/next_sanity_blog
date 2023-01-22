import { Container, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import { groq } from "next-sanity";
import Head from "next/head";
import { client } from "../../../lib/sanity.client";

import Card from "../../components/Card";

export async function getStaticProps() {
  const posts = await client.fetch(groq`*[_type == "post"]{
    ...,
    author->
  }`);
  // console.log(posts[0].author.name);
  return { props: { posts } };
}

const Blogs = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blogs | Sanity</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading textAlign={"center"} mt="48px">
        BLOGS
      </Heading>
      <hr />
      <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {posts.map((post) => {
            return (
              <div key={post._id}>
                <Link as={NextLink} href={`/blogs/${post.slug.current}`}>
                  <Card
                    title={post.title}
                    username={post.author.name}
                    created_at={new Date(post._createdAt).toLocaleDateString(
                      "en-US",
                      { day: "numeric", month: "long", year: "numeric" }
                    )}
                  />
                </Link>
              </div>
            );
          })}
          {/* <Card />
          <Card />
          <Card /> */}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Blogs;
