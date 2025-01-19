"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductList = ProductList;
// src/components/ProductList.tsx
const react_1 = require("react");
const ProductCard_1 = require("./ProductCard");
function ProductList({ products }) {
    return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (<ProductCard_1.ProductCard key={product.id} product={product}/>))}
      
      {products.length === 0 && (<div className="text-center py-10 text-gray-500">
          条件に一致する商品が見つかりませんでした。
        </div>)}
    </div>);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9kdWN0TGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFTQSxrQ0FjQztBQXZCRCxpQ0FBaUM7QUFDakMsaUNBQXlCO0FBQ3pCLCtDQUEyQztBQU8zQyxTQUFnQixXQUFXLENBQUMsRUFBRSxRQUFRLEVBQW9CO0lBQ3hELE9BQU8sQ0FDTCxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsc0RBQXNELENBQ25FO01BQUEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUN6QixDQUFDLHlCQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFHLENBQ25ELENBQUMsQ0FFRjs7TUFBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQ3hCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FDOUM7O1FBQ0YsRUFBRSxHQUFHLENBQUMsQ0FDUCxDQUNIO0lBQUEsRUFBRSxHQUFHLENBQUMsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LnRzeFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvZHVjdENhcmQgfSBmcm9tICcuL1Byb2R1Y3RDYXJkJ1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uL3R5cGVzL3Byb2R1Y3QnIC8vIOWei+Wumue+qeOCkui/veWKoFxuXG5pbnRlcmZhY2UgUHJvZHVjdExpc3RQcm9wcyB7XG4gIHByb2R1Y3RzOiBQcm9kdWN0W11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2R1Y3RMaXN0KHsgcHJvZHVjdHMgfTogUHJvZHVjdExpc3RQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgKSl9XG4gICAgICBcbiAgICAgIHtwcm9kdWN0cy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTEwIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICDmnaHku7bjgavkuIDoh7TjgZnjgovllYblk4HjgYzopovjgaTjgYvjgorjgb7jgZvjgpPjgafjgZfjgZ/jgIJcbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdfQ==