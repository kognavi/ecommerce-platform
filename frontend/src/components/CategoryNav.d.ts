import { Category } from '../types/category';
interface CategoryNavProps {
    categories: Category[];
    onSelectCategory: (categoryId: string) => void;
    selectedCategory: string | null;
}
export declare function CategoryNav({ categories, onSelectCategory, selectedCategory }: CategoryNavProps): import("react").JSX.Element;
export {};
