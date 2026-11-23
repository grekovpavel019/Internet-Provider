import React from "react";

type TableControlsProps = {
    onAdd: () => void;
}

const TableControls = ({ onAdd }: TableControlsProps): React.JSX.Element => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        console.log(Object.fromEntries(formData))
    }

    return (
        <div className="mb-5 rounded-(--radius-card) border border-(--color-border-soft) bg-(--color-surface) p-5 shadow-(--shadow-panel)">

            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-(--color-foreground)">
                    Управление таблицей
                </h2>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="h-(--button-height) cursor-pointer rounded-(--radius-button) border border-(--color-border) px-4 text-sm text-(--color-foreground) transition-colors hover:bg-(--color-surface-hover)"
                    >
                        Печать
                    </button>

                    <button
                        type="button"
                        onClick={onAdd}
                        className="h-(--button-height) cursor-pointer rounded-(--radius-button) bg-(--color-primary) px-4 text-sm text-(--color-primary-foreground) transition-colors hover:bg-(--color-primary-hover)"
                    >
                        + Добавить
                    </button>
                </div>
            </div>

            <div className="border-t border-(--color-border-soft) pt-4">
                <form 
                    onSubmit={(event) => handleSubmit(event)}
                    className="flex flex-wrap items-end gap-3"
                >

                    <div className="flex min-w-50 flex-1 flex-col gap-1.5">
                        <label
                            htmlFor="table-search"
                            className="text-xs font-medium text-(--color-text-secondary)"
                        >
                            Поиск
                        </label>
                        <input
                            type="search"
                            name="search"
                            id="table-search"
                            placeholder="Поиск по таблице..."
                            className="h-(--input-height) w-full rounded-(--radius-input) border border-(--color-border) bg-(--color-surface) px-3 text-sm text-(--color-foreground) outline-none transition-colors placeholder:text-(--color-text-muted) focus:border-(--color-focus) focus:shadow-(--focus-ring)"
                        />
                    </div>

                    <div className="flex min-w-40 flex-col gap-1.5">
                        <label
                            htmlFor="table-filter"
                            className="text-xs font-medium text-(--color-text-secondary)"
                        >
                            Фильтрация
                        </label>
                        <select
                            id="table-filter"
                            defaultValue=""
                            name="filter"
                            className="h-(--input-height) w-full cursor-pointer rounded-(--radius-input) border border-(--color-border) bg-(--color-surface) px-3 text-sm text-(--color-foreground) outline-none focus:border-(--color-focus) focus:shadow-(--focus-ring)"
                        >
                            <option value="">Все записи</option>
                            <option value="filter1">Фильтр 1</option>
                            <option value="filter2">Фильтр 2</option>
                        </select>
                    </div>

                    <div className="flex min-w-40 flex-col gap-1.5">
                        <label
                            htmlFor="table-sort"
                            className="text-xs font-medium text-(--color-text-secondary)"
                        >
                            Сортировка
                        </label>
                        <select
                            id="table-sort"
                            defaultValue=""
                            name="sort"
                            className="h-(--input-height) w-full cursor-pointer rounded-(--radius-input) border border-(--color-border) bg-(--color-surface) px-3 text-sm text-(--color-foreground) outline-none focus:border-(--color-focus) focus:shadow-(--focus-ring)"
                        >
                            <option value="">По умолчанию</option>
                            <option value="asc">По возрастанию</option>
                            <option value="desc">По убыванию</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="h-(--input-height) cursor-pointer rounded-(--radius-button) border border-(--color-primary) px-4 text-sm text-(--color-primary) transition-colors hover:bg-(--color-surface-hover)"
                    >
                        Применить
                    </button>

                </form>
            </div>
        </div>
    );
};

export default TableControls;
