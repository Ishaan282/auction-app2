import dotenv from 'dotenv';
import { connection } from './database/connection';

// Load environment variables
dotenv.config();

// Test the database connection
connection();

//! to run this file :- bun run test-db.js