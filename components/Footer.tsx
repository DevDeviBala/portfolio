export default function Footer() {
  return (
    <footer className="border-t border-line py-6">
      <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-3 px-7 text-[0.78rem] text-text-faint">
        <span>Devi Bala M</span>
        <span>Built with intent, not a template. © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}