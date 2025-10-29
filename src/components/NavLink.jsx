import { useState } from "react";

function NavLink() {
  const [open, setOpen] = useState(false);

  return (
    <li className="relative">
      {/* Bottone principale (etichetta) */}
      <button
        className="flex items-center gap-1 text-sm font-medium text-neutral-100 hover:text-white transition"
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span>Servizi</span>
        {/* freccina ▼ che ruota quando open == true */}
        <span
          className={`text-[0.7rem] opacity-70 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* Dropdown vero e proprio */}
      {open && (
        <div className="absolute left-0 top-full mt-2 min-w-40 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 bg-white dark:bg-neutral-900 shadow-lg p-3 flex flex-col">
          <a
            href="#"
            className="block px-3 py-2 text-sm text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 rounded-lg text-left"
          >
            Consulenza
          </a>

          <a
            href="#"
            className="block px-3 py-2 text-sm text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 rounded-lg text-left"
          >
            Sviluppo Web
          </a>

          <a
            href="#"
            className="block px-3 py-2 text-sm text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 rounded-lg text-left"
          >
            Assistenza
          </a>
        </div>
      )}
    </li>
  );
}

export default NavLink;
