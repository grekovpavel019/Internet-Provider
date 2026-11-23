import React from "react";

const TableControls = (): React.JSX.Element => {
    return (
        <div className="mb-5 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-panel)">

            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="font-(--font-heading) text-lg font-semibold text-(--color-foreground)">
                        Управление таблицей
                    </h2>
                    <p className="mt-1 text-xs text-(--color-text-muted)">
                        Поиск, фильтрация и управление записями
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="h-(--button-height) cursor-pointer rounded-(--radius-button) border border-(--color-border) px-4 text-sm text-(--color-foreground) transition-colors hover:bg-(--color-surface-hover)"
                    >
                        Печать
                    </button>

                    <button
                        type="button"
                        className="h-(--button-height) cursor-pointer rounded-(--radius-button) bg-(--color-primary) px-4 text-sm text-(--color-primary-foreground) transition-colors hover:bg-(--color-primary-hover)"
                    >
                        + Добавить
                    </button>
                </div>
            </div>

            <div className="border-t border-(--color-border-soft) pt-4">
                <div className="flex flex-wrap items-end gap-3">

                    <div className="flex min-w-50 flex-1 flex-col gap-1.5">
                        <label
                            htmlFor="table-search"
                            className="text-xs font-medium text-(--color-text-secondary)"
                        >
                            Поиск
                        </label>
                        <input
                            type="search"
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
                            className="h-(--input-height) w-full cursor-pointer rounded-(--radius-input) border border-(--color-border) bg-(--color-surface) px-3 text-sm text-(--color-foreground) outline-none focus:border-(--color-focus) focus:shadow-(--focus-ring)"
                        >
                            <option value="">По умолчанию</option>
                            <option value="asc">По возрастанию</option>
                            <option value="desc">По убыванию</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        className="h-(--input-height) cursor-pointer rounded-(--radius-button) border border-(--color-border) px-4 text-sm text-(--color-text-secondary) transition-colors hover:bg-(--color-surface-hover)"
                    >
                        Сбросить
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TableControls;
