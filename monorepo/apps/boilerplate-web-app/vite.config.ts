import pluginReact from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import type { PluginOption, ServerOptions } from "vite";
import { defineConfig } from "vite";

const srcDir = path.join(__dirname, "src");
const distDir = path.join(__dirname, "dist");

const sslDir = path.join(__dirname, ".ssl");
const sslKeyPath = path.join(sslDir, `key.pem`);
const sslCertPath = path.join(sslDir, `cert.pem`);
const sslCaPath = path.join(sslDir, `ca.pem`);

const plugins: PluginOption[] = [pluginReact()];

const isDevServerEnabled = process.env.DEV_SERVER_ENABLED !== "0";

export const getDevServerConfig = (): ServerOptions | undefined => {
  if (!isDevServerEnabled) {
    return undefined;
  }

  return {
    https: {
      key: fs.readFileSync(sslKeyPath),
      cert: fs.readFileSync(sslCertPath),
      ca: fs.readFileSync(sslCaPath),
    },
  };
};
export default defineConfig({
  root: srcDir,
  build: {
    outDir: distDir,
  },
  server: getDevServerConfig(),
  plugins,
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
