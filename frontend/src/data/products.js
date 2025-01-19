"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
exports.products = [
    {
        id: 1,
        title: "高性能ワイヤレスイヤホン",
        price: 15800,
        image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=400",
        categoryId: "earbuds"
    },
    {
        id: 2,
        title: "スマートウォッチ Pro",
        price: 32800,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400",
        categoryId: "smartwatches"
    },
    {
        id: 3,
        title: "ノイズキャンセリングヘッドホン",
        price: 28600,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
        categoryId: "headphones"
    },
    {
        id: 4,
        title: "最新スマートフォン",
        price: 89800,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400",
        categoryId: "android"
    },
    {
        id: 5,
        title: "Bluetooth スピーカー",
        price: 12800,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=400",
        categoryId: "speakers"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHYSxRQUFBLFFBQVEsR0FBYztJQUNqQztRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsS0FBSyxFQUFFLGNBQWM7UUFDckIsS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsOEZBQThGO1FBQ3JHLFVBQVUsRUFBRSxTQUFTO0tBQ3RCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLEtBQUssRUFBRSxjQUFjO1FBQ3JCLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLDhGQUE4RjtRQUNyRyxVQUFVLEVBQUUsY0FBYztLQUMzQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLDhGQUE4RjtRQUNyRyxVQUFVLEVBQUUsWUFBWTtLQUN6QjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsV0FBVztRQUNsQixLQUFLLEVBQUUsS0FBSztRQUNaLEtBQUssRUFBRSw4RkFBOEY7UUFDckcsVUFBVSxFQUFFLFNBQVM7S0FDdEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixLQUFLLEVBQUUsS0FBSztRQUNaLEtBQUssRUFBRSw4RkFBOEY7UUFDckcsVUFBVSxFQUFFLFVBQVU7S0FDdkI7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2RhdGEvcHJvZHVjdHMudHNcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi90eXBlcy9wcm9kdWN0J1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIumrmOaAp+iDveODr+OCpOODpOODrOOCueOCpOODpOODm+ODs1wiLFxuICAgIHByaWNlOiAxNTgwMCxcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwNjIyMDgzODMxNS0wNTYxOTJkNWU5Mjc/YXV0bz1mb3JtYXQmZml0PWNyb3AmcT04MCZ3PTQwMFwiLFxuICAgIGNhdGVnb3J5SWQ6IFwiZWFyYnVkc1wiXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCLjgrnjg57jg7zjg4jjgqbjgqnjg4Pjg4EgUHJvXCIsXG4gICAgcHJpY2U6IDMyODAwLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5NTg2MzM3Mjc4LTNiZWZkNDBmZDE3YT9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZxPTgwJnc9NDAwXCIsXG4gICAgY2F0ZWdvcnlJZDogXCJzbWFydHdhdGNoZXNcIlxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwi44OO44Kk44K644Kt44Oj44Oz44K744Oq44Oz44Kw44OY44OD44OJ44Ob44OzXCIsXG4gICAgcHJpY2U6IDI4NjAwLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA1NzQwNDIwOTI4LTVlNTYwYzA2ZDMwZT9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZxPTgwJnc9NDAwXCIsXG4gICAgY2F0ZWdvcnlJZDogXCJoZWFkcGhvbmVzXCJcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiBcIuacgOaWsOOCueODnuODvOODiOODleOCqeODs1wiLFxuICAgIHByaWNlOiA4OTgwMCxcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMTcwNzE3MTYzNC01Zjg5N2ZmMDJhYTk/YXV0bz1mb3JtYXQmZml0PWNyb3AmcT04MCZ3PTQwMFwiLFxuICAgIGNhdGVnb3J5SWQ6IFwiYW5kcm9pZFwiXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICB0aXRsZTogXCJCbHVldG9vdGgg44K544OU44O844Kr44O8XCIsXG4gICAgcHJpY2U6IDEyODAwLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjA4MDQzMTUyMjY5LTQyM2RiYmE0ZTdlMT9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZxPTgwJnc9NDAwXCIsXG4gICAgY2F0ZWdvcnlJZDogXCJzcGVha2Vyc1wiXG4gIH1cbl1cbiJdfQ==