import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation'


export default defineConfig({
	plugins: [react(), federation({
    name: "remote_app",
    filename: "remoteEntry.js",
    exposes: {
      "./Page": "./src/App.jsx"
    },
    shared: ["react", "react-dom"]
  })],
	publicDir: 'public',
	build: {
		outDir: 'build',
		modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
	},
	server: {
		port: 8808,
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "/src/scss/_colors.scss";',
			},
		},
	},
	resolve: {
		alias: {
			components: '/src/components',
			assets: '/src/assets',
			hooks: '/src/hooks',
			layouts: '/src/layouts',
			scss: '/src/scss',
			services: '/src/services',
			store: '/src/store',
			utils: '/src/utils',
			modules: '/src/modules',
		},
	},
});
