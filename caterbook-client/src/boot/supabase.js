import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nqsooirighytlebxtvoq.supabase.co'
const supabaseKey = 'sb_publishable_v45AWuDJ0e9Dz3seKuYAPg_3r1sC_gA'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
