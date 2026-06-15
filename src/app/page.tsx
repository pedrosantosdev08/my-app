import { Header } from "@/components/ui/Header";
import { OverviewCard } from "@/components/ui/OverviewCard";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const CardDataDemo = [
  {
    id: 1,
    title: "Saldo Atual",
    value: "R$ 5.000,00",
    description: "Saldo disponível em conta",
    icon: faUser,
  },
  {
    id: 2,
    title: "Receitas do mês",
    value: "R$ 5.000,00",
    description: "Entradas registradas",
    icon: faUser,
  },
  {
    id: 3,
    title: "Despesas do mês",
    value: "R$ 3.000,00",
    description: "Saídas registradas",
    icon: faUser,
  },
  {
    id: 4,
    title: "A Vencer",
    value: "R$ 5.000,00",
    description: "Contas pendentes",
    icon: faUser,
  },
];

export default function Overview() {
  return (
    <div className="">
      <Header />
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CardDataDemo.map((card) => (
            <OverviewCard key={card.id} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
}
