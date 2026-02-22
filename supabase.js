
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// ==========================================
// CONFIGURACIÓN DE SUPABASE
// ==========================================
// 1. Ve a tu proyecto en Supabase -> Project Settings -> API
// 2. Copia el "Project URL" y pégalo abajo.
// 3. Copia la "anon public key" y pégala abajo.

const SUPABASE_URL = 'https://qxjmzzxdkzehseilkwgo.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4am16enhka3plaHNlaWxrd2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3MTM1NjUsImV4cCI6MjA4NzI4OTU2NX0.bgW3qzBAuCV6dCDD9_2Z75EzZKVFYd0iv5FQI6hNCrk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
