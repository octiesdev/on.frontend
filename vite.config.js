export default defineConfig({
    plugins: [react()],
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  });