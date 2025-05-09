import Link from 'next/link';

export default function Home() {
  return (
    <div className='container flex flex-col'>
      <h1>Home Page</h1>
      <Link href='/blog'>Blog</Link>
      <Link href='/products'>Products</Link>
      <Link href='/articles/breaking-news-123?lang=en'>Read in English</Link>
      <Link href='/articles/breaking-news-123?lang=fr'>Read in French</Link>
    </div>
  );
}
