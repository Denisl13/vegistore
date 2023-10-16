import "./Sep.css";

type SepProps = {
  title: string;
};

function Sep({ title }: SepProps) {
  return (
    <div className="Sep">
      <h1>{title}</h1>
      <div className="hexagon-svg"></div>
    </div>
  );
}

export default Sep;
