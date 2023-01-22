import { Heading, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

export const RichTextComponents = {
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
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h2: ({ children }) => <Heading>{children}</Heading>,
    blockquote: ({ children }) => (
      <blockquote style={{ border: "1px solid red" }}>{children}</blockquote>
    ),
    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
};
