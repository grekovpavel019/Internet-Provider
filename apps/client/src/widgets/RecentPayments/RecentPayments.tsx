import SimpleList from "@shared/components/SimpleList";

const payments = [
    { id: 30, title: "Договор №30", subtitle: "2026-10-28", value: "950,00 ₽" },
    { id: 29, title: "Договор №29", subtitle: "2026-10-27", value: "650,00 ₽" },
    { id: 28, title: "Договор №28", subtitle: "2026-10-26", value: "450,00 ₽" },
    { id: 27, title: "Договор №27", subtitle: "2026-10-25", value: "1 200,00 ₽" },
    { id: 26, title: "Договор №26", subtitle: "2026-10-24", value: "950,00 ₽" },
    { id: 25, title: "Договор №25", subtitle: "2026-10-23", value: "650,00 ₽" },
];

const RecentPayments = () => {
    return (
        <section className="widget-list">
            <h2>
                Последние платежи
            </h2>

            <SimpleList items={payments} />
        </section>
    );
};

export default RecentPayments;