import { groq } from "next-sanity";
import Head from "next/head";
import { client } from "../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
// import RichTextComponents from "../../components/RichTextComponents";

export async function getStaticProps({ params: { slug } }) {
  const query = groq`
    *[_type == "post" && slug.current == '${slug}'][0]
  `;

  const post = await client.fetch(query);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}


export async function getStaticPaths() {
  const query = groq`
    *[_type == "post"]{
      slug { current }
    }
  `;

  const post = await client.fetch(query);
  const paths = post.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

const RichTextComponents = {
  types: {
    image: ({ value }) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          as={NextLink}
          href={value.href}
          rel={rel}
          _hover={{ color: "red", fontWeight: "bold" }}
        >
          {children}
        </Link>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <Heading>{children}</Heading>,
    blockquote: ({ children }) => (
      <blockquote
        style={{
          border: "1px solid red",
          fontSize: "26px",
          color: "olive",
        }}
      >
        {children}
      </blockquote>
    ),
    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
};

export const Post = ({ post }) => {
  // console.log(post);
  return (
    <>
      <Head>
        <title>Blogs | {post.title.toString()}</title>
        <meta name="description" content="POST TITKE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Post: {post.title} </div>
      <article>
        <PortableText value={post.body} components={RichTextComponents} />
      </article>
    </>
  );
};

export default Post;
