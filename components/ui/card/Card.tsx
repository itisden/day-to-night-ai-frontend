/* eslint-disable @next/next/no-img-element */

interface Props {
  img: string;
  name: string;
  onSuccess: VoidFunction;
  onCancel: VoidFunction;
}

export default function Card({ img, name, onSuccess, onCancel }: Props) {
  return (
    <div className="card h-60 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" className="object-cover w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end mt-auto">
          <button className="btn btn-" onClick={onCancel}>
            Replace
          </button>
          <button className="btn btn-primary" onClick={onSuccess}>
            Convert →
          </button>
        </div>
      </div>
    </div>
  );
}
