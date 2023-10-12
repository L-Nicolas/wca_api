import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

export default () => {
  const SUPABASE_URL = 'https://crevinheqzmvjkljtqld.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZXZpbmhlcXptdmprbGp0cWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3MDI2MzQsImV4cCI6MjAxMDI3ODYzNH0.aHyBVztD4NhDXz9Xg2kLriqd815svbJTwuGwr9wKrg4';
  if (!SUPABASE_URL) {
    throw new Error("You must provide a `SUPABASE_URL`");
  }
  if (!SUPABASE_ANON_KEY) {
    throw new Error("You must provide a `SUPABASE_ANON_KEY`");
  }

  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
};
