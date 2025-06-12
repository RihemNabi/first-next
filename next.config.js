import { i18n } from "./next-i18next.config";

const nextConfig = {
  experimental: {},
  serverExternalPackages: ["@next-auth/mongodb-adapter"],
  i18n,
};

export default nextConfig;
