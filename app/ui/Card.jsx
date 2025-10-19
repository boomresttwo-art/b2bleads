export function Card({ title, children, ring=false }){
  return (
    <div className={`card p-5 ${ring ? "ring-2 ring-amber-500" : ""}`}>
      {title && <div className="mb-2 font-semibold">{title}</div>}
      <div className="space-y-3">{children}</div>
    </div>
  );
}
