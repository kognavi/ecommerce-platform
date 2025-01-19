interface ProductFiltersProps {
    onFilterChange: (filters: {
        search: string;
        priceRange: {
            min: number | null;
            max: number | null;
        };
    }) => void;
    onSortChange: (sortBy: 'price_asc' | 'price_desc' | 'name' | null) => void;
}
export declare function ProductFilters({ onFilterChange, onSortChange }: ProductFiltersProps): import("react").JSX.Element;
export {};
