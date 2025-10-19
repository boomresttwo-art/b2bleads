export function FAQ(){
  const Q = [
    { q: "What data fields are included?", a: "Company, domain, industry, size, contact full name, role, email, LinkedIn, location — plus custom fields on request."},
    { q: "Are emails verified?", a: "Yes — multi‑source verification & bounce checks to maintain deliverability."},
    { q: "Is this compliant?", a: "Research is based on publicly available data and B2B directories with GDPR‑minded workflows."},
  ];
  return (
    <div className="max-w-2xl mx-auto">
      {Q.map((x, i) => (
        <details key={i} className="mb-3 rounded-xl border bg-white/70 p-4">
          <summary className="cursor-pointer font-semibold">{x.q}</summary>
          <p className="mt-2 text-sm text-slate-600">{x.a}</p>
        </details>
      ))}
      <p className="text-center text-xs text-slate-500 mt-4">Affiliate disclosure: we may earn a commission — no extra cost to you.</p>
    </div>
  );
}
