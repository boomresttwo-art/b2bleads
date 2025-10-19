export function KPI({ k, l }){
  return (
    <div className="kpi">
      <div className="text-xl font-extrabold">{k}</div>
      <div className="text-xs text-slate-600">{l}</div>
    </div>
  );
}

export function ChevronDot(){ return <span className="inline-block h-2 w-2 rounded-full bg-emerald-600 mt-2 mr-2" />; }
