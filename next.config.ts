import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['firebasestorage.googleapis.com'], // Agrega el dominio aquí
    },
  };

export default nextConfig;
