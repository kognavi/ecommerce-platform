interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}
interface ProductCardProps {
    product: Product;
}
export declare function ProductCard({ product }: ProductCardProps): import("react").JSX.Element;
export {};
