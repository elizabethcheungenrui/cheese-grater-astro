import "./Card.css"

export default function BCard({
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
    <div className="card b-card">
      <a href={`/article/${slug}`} className="link">
        <div className="ratio-7-5">
          <img src={image || undefined} alt={title} />
        </div>

        { (tag != "") && <h2 className={`tag tag-major-mbcard tag-${section.toLowerCase()}`}> {tag.toUpperCase()} </h2> }

        <h3> 
          <span className="wipe">{title}</span>
        </h3>
      
        <p> {summary} </p>

        <span className="date"> {date} </span>
      </a>
    </div>
  );
}
