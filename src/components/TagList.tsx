export default function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {tags.map((tag) => (
        <li key={tag} className="mr-1.5 mt-2">
          <div className="flex items-center rounded-full bg-accent-soft/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
            {tag}
          </div>
        </li>
      ))}
    </ul>
  );
}
