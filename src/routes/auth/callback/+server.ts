// src/routes/auth/callback/+server.ts
import { redirect } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async (event) => {
  const {
    url,
    locals: { supabase }
  } = event

  const code = url.searchParams.get('code')
  const next = url.searchParams.get('next') ?? '/'

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  throw redirect(303, next)
}