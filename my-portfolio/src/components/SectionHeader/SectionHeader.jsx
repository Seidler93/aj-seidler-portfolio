import "./SectionHeader.css";

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <h2 className="section-header__title">{title}</h2>
      {description && (
        <p className="section-header__description">{description}</p>
      )}
    </div>
  );
}

export default SectionHeader;