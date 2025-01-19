export interface FilterState {
    search: string;
    priceRange: {
        min: number | null;
        max: number | null;
    };
    sortBy: 'price_asc' | 'price_desc' | 'name' | null;
}
