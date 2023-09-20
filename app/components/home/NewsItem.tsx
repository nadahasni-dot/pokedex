import Image from "next/image";

interface NewsItemProps {
  title: string;
  image: string;
  url: string;
  timestamp: string;
}

export default function NewsItem({ title, image, url, timestamp }: NewsItemProps) {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="flex flex-row-reverse items-stretch justify-between md:justify-start md:flex-col ">
      <a href={url} target="_blank">
        <div className="w-32 h-20 overflow-hidden transition md:w-full md:h-52 bg-slate-500 rounded-xl hover:opacity-50">
          <img src={image} alt={title} className="object-cover w-full h-full transition" />
        </div>
      </a>
      <div className="mr-2">
        <a href={url} target="_blank" className="mt-2 overflow-hidden text-sm font-semibold transition md:text-lg hover:text-blue-500 line-clamp-2">
          {title}
        </a>
        <p className="text-xs md:text-base text-slate-400">{formattedDate}</p>
      </div>
    </div>
  )
}
