module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "npm",
      args: "start",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        NEXTAUTH_URL: "https://mitrajasalegalitas.co.id",
        NEXTAUTH_SECRET:
          "fb7c0e397aa23dcb2ddc9132387f4c0fd456feebfba684eab8a902d007cb3521",
        NEXT_PUBLIC_API_BASE_URL: "https://mitrajasalegalitas.co.id",
        PORT: 3000,
      },
    },
  ],
};
