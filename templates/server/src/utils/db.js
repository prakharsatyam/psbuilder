import mongoose from 'mongoose';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

async function getConfig() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
  const configPath = path.join(__dirname, '../../../config.json');
  if (fs.existsSync(configPath)) {
    return await fs.readJson(configPath);
  }
  throw new Error('Configuration file not found');
}

const connectDB = async () => {
  try {
    const config = await getConfig();
    const instance = await mongoose.connect(`${config.databaseUrl}${config.databaseName}`, {
    });
    console.log("Connected to the database:", instance.connection.name);
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
};

export default connectDB;
