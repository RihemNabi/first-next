import { i18n } from "./next-i18next.config.js";

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@next-auth/mongodb-adapter"],
  },
  i18n,
};

export default nextConfig;
