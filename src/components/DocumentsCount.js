import { Link } from "@chakra-ui/react";
import NavLink from "next/link";
import groq from "groq";

export const query = groq`*[_type == "post"]`;

export function DocumentsCount({ data }) {
  console.log(data[0].slug);
  return (
    <>
      Documents:
      <ul>
        {data.map((data) => {
          return (
            <li key={data._id}>
              <Link as={NavLink} href={`/blogs/${data.slug.current}`}>
                {data.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
