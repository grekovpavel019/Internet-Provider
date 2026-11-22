import type { ReactNode } from "react";

interface SimpleListItem {
    id: string | number;
    title: string;
    subtitle?: string;
    value?: ReactNode;
}

interface SimpleListProps {
    items: SimpleListItem[];
}

const SimpleList = ({ items }: SimpleListProps) => {
    return (
        <div className="flex flex-col">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="flex items-start justify-between gap-4 py-3 border-b border-(--color-border-soft) last:border-b-0"
                >
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-(--color-foreground)">
                            {item.title}
                        </span>

                        {item.subtitle && (
                            <span className="text-xs text-(--color-text-muted)">
                                {item.subtitle}
                            </span>
                        )}
                    </div>

                    <div className="text-sm font-bold text-(--color-foreground) whitespace-nowrap">
                        {item.value}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SimpleList;