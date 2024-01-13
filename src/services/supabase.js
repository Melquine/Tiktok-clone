
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hyirunmymemdjeoeajtv.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aXJ1bm15bWVtZGplb2VhanR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4MjUzNTAsImV4cCI6MjAxOTQwMTM1MH0.PEd4fqt4KQZqMjmynIYhEwhOPNJ4eJy5FSFHsGQeMOI')