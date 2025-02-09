export default function LazyImg(props) {
  return (
    <img
        src={props.src}
        className={props.className}
        alt={props.alt}
    />
  );
}