import Link  from 'next/link';

export default function Home() {
  return (
    <div className="">
      <h1>Blog</h1>
        <p>
          Learn from any of the posts I’ve written on Developer Experience, software documentation, and productivity.
        </p>
        <div className='gap-6 flex text-blue-500'>
          <Link href="blog/1/">post 1</Link>
          <Link href="blog/2">post 2</Link>
          <Link href="blog/3">post 3</Link>
        </div>
    </div>
  );
}