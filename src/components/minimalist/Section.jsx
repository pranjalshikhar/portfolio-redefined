export default function Section({ children, id }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-5 mb-2.5">
      {children}
    </section>
  );
}
