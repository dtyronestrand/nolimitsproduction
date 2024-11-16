import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createBrowserClient } from '@supabase/ssr'

export const handleError = ({ error, event }) => {
  console.error(error, event)
  return {
    message: 'An unexpected error occurred.',
  }
}

createBrowserClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
)