export default function AuthLayout({ children }) {
  return (
    <div lang="en">
      <div style={{ height: "50px", width: "100%", background: "yellow"}}></div>
      <section>{children}</section>
      <div style={{ height: "50px", width: "100%", background: "blue"}}></div>
    </div>
  )
}
