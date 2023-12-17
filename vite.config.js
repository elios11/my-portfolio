import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@context": path.resolve(__dirname, "src/context"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@api": path.resolve(__dirname, "src/api"),
            "@components": path.resolve(__dirname, "src/components")
        }
    }
});
