import Link from 'next/link';

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
  return (
    <Link
      href={pageRef}
      className="
        bg-yellow-300 
        h-full 
        flex 
        items-center 
        px-5 
        py-2 
        max-w-[150px]
        truncate
        text-gray-700 
        font-semibold
        text-sm
        tracking-wide
        hover:text-black 
        hover:bg-yellow-200 
        rounded-md 
        transition-all
        duration-300
      "
    >
      {title}
    </Link>
  );
}