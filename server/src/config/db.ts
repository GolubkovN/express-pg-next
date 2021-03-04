import CONFIG from "./config";
const Pool = require('pg').Pool


const pool = new Pool({
  user: CONFIG.DB_USER,
  host: CONFIG.DB_HOST,
  database: CONFIG.DB_NAME,
  password: CONFIG.DB_PASSWORD,
  port: CONFIG.DB_PORT,
})

export default (async () => {
    try {
        await pool.connect();
        console.log("DB connection OK");
    } catch (e) {
        console.log(e);
        console.log("DB connection bad");
        process.exit()
    }
})();