export default function MediaImage({ src, alt, className = "" }) {
  return (
    <div className={`media-image ${className}`.trim()}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
