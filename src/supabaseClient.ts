import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ygucegxdrousqmrgzevo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlndWNlZ3hkcm91c3Ftcmd6ZXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxOTU3NjYsImV4cCI6MjAzMzc3MTc2Nn0.4VZVcHW26LmiS2mRm2HVtOcec_2tfveBeuT3fIl4Ucw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})