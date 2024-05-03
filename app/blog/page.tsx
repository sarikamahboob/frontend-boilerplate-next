import Image from "next/image";
import styles from "./page.module.css";
import SingleBlogPage from "./[id]/page";
import Link from "next/link";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      description: 'Blog 1 Description'
    },
    {
      id: 2,
      title: 'Blog 2',
      description: 'Blog 2 Description'
    },
  ]
  return (
    <main>
      <h1>Blog Page</h1>
      {
        blogs.map((item, index) => <li key={item?.id} style={{marginTop: '10px'}}>
          <Link href={`/blog/${item?.id}`}>{item?.title}</Link>
        </li>)
      }
    </main>
  );
}
