import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <div className="group card-base flex h-full min-h-[260px] flex-col p-5 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-neutralink">
            {job.company} · {job.city}
          </p>
          <Link href={job.href} className="mt-2 block font-display text-lg font-semibold">
            {job.title}
          </Link>
        </div>
        <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs">
          {job.type}
        </span>
      </div>
      <p className="mt-3 text-sm text-neutralink">{job.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {job.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between pt-5 text-xs text-neutralink">
        <span>{job.pay}</span>
        <span>{job.time}</span>
      </div>
    </div>
  );
}
