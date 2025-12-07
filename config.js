// Configuration file
module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    db: {
  // Update: commit 43
        host: process.env.DB_HOST || 'localhost', // updated
        port: process.env.DB_PORT || 5432,
  // Update: commit 36
    },
};
