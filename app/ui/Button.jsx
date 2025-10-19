export function ButtonPrimary({ href, onClick, className="", children }){
  if (href) return <a href={href} className={`btn btn-primary ${className}`} rel="noreferrer nofollow">{children}</a>;
  return <button onClick={onClick} className={`btn btn-primary ${className}`}>{children}</button>;
}

export function ButtonOutline({ href, onClick, className="", children }){
  if (href) return <a href={href} className={`btn btn-outline ${className}`} rel="noreferrer nofollow">{children}</a>;
  return <button onClick={onClick} className={`btn btn-outline ${className}`}>{children}</button>;
}
