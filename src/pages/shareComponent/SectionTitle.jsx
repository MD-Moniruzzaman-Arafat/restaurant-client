/* eslint-disable react/prop-types */
export default function SectionTitle({ title1, title2 }) {
  return (
    <div className="text-center border-y-4 p-5 w-96 mx-auto my-20">
      <p className="text-amber-500 italic text-2xl">---{title1}---</p>
      <h1 className="text-5xl">{title2}</h1>
    </div>
  );
}
