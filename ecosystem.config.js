module.exports = {
  apps: [{
    name: 'paperless-ai',
    script: 'server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
      PAPERLESS_AI_PORT: 3000 // <--- Add this line
    },
    exp_backoff_restart_delay: 100
  }]
};
