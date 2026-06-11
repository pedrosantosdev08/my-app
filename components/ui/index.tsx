"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft, faBorderAll, faCalendar, faChartPie, faRankingStar, faWallet } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function NavBar() {
  return (
    <aside className="p-6 border border-white/10 m-3 rounded-4xl bg-[#181316] text-white w-64 ">
      <div className="flex gap-5 items-center ">
        <div>
          <span className="bg-green-300 w-5 h-5 rounded-2xl p-2"><FontAwesomeIcon icon={faWallet} color="black"/></span>
        </div>
        <div className="flex flex-col">
          <span>Cofre</span>
          <span className="text-sm text-gray-400">Pedro & Maysa</span>
        </div>
      </div>

      <nav className="mt-10">
        <ul className="flex flex-col gap-4 mt-6">
          <li>
            <Link
              href="/"
              className="flex gap-2 items-center hover:text-green-300 hover:bg-white/10 w-full p-2 rounded-lg"
            >
              <FontAwesomeIcon icon={faBorderAll} />
              Visão Geral
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex gap-2 items-center hover:text-green-300 hover:bg-white/10 w-full p-2 rounded-lg"
            >
              <FontAwesomeIcon icon={faArrowRightArrowLeft} /> Transações
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex gap-2 items-center hover:text-green-300 hover:bg-white/10 w-full p-2 rounded-lg"
            >
              <FontAwesomeIcon icon={faCalendar} /> Contas a Vencer
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex gap-2 items-center hover:text-green-300 hover:bg-white/10 w-full p-2 rounded-lg"
            >
              <FontAwesomeIcon icon={faChartPie} /> Relatórios
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex gap-2 items-center hover:text-green-300 hover:bg-white/10 w-full p-2 rounded-lg"
            >
               <FontAwesomeIcon icon={faRankingStar} />Fechamento IA
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
