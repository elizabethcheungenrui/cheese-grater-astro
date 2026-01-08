import './Card.css';

export default function ACard({
  slug,
  section,
  title,
  summary,
  image,
  tag,
  date,
}: {
  slug: string;
  section: string;
  title: string;
  summary: string;
  image: string;
  tag: string;
  date: string;
}) {
  return (
    <div className="card a-card">
      <a href={`/article/${slug}`} className="link">
        <div className="ratio-7-5">
          <img src={image || undefined} alt={title} fetchPriority="high" />
        </div>

        <span className={`tag tag-major tag-${section.toLowerCase()}`}>
          {' '}
          {tag.toUpperCase()}{' '}
        </span>

        <h3>
          <span className="wipe">{title}</span>
        </h3>

        <p> {summary} </p>

        <span className="date"> {date} </span>
      </a>
    </div>
  );
}
