"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const axios_1 = require("axios");
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
exports.api = axios_1.default.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUEwQjtBQUUxQixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLHVCQUF1QixDQUFDO0FBRWpFLFFBQUEsR0FBRyxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUM7SUFDOUIsT0FBTyxFQUFFLFlBQVk7SUFDckIsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLGtCQUFrQjtLQUNuQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEFQSV9CQVNFX1VSTCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnO1xuXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogQVBJX0JBU0VfVVJMLFxuICBoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSxcbn0pO1xuIl19