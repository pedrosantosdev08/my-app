export function Header() {
  return (
    <header
        className="w-full flex items-center justify-between border-b border-(--border-color) pb-4 mb-4 "
    >
      <div>
        <span className="text-(--text-secondary)">Olá, casal</span>
        <h1 className="text-2xl text-(--text-primary)">Visão Geral</h1>
      </div>

      <button className="bg-(--accent-color) text-black px-4 py-2 rounded-lg ">
        Nova Transação
      </button>
    </header>
  );
}