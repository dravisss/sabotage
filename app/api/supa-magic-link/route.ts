import { NextRequest, NextResponse } from 'next/server';

// Endpoint desativado. Não utilizado.
export async function POST() {
  return new Response('Not found', { status: 404 });
}
  const { email } = await req.json();
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
  }

  // Chama o MCP do Supabase para gerar o magic link
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const endpoint = `${supabaseUrl}/auth/v1/admin/generate_link`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY as string
    };
    const body = {
      type: 'magiclink',
      email,
      redirect_to: 'https://sabotagemcorporativa.org'
    };
    console.log('[MAGICLINK] Endpoint:', endpoint);
    console.log('[MAGICLINK] Headers:', { ...headers, Authorization: 'Bearer ***' });
    console.log('[MAGICLINK] Body:', body);
    const mcpRes = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });
    const text = await mcpRes.text();
    let mcpData: Record<string, unknown>;
    try {
      mcpData = JSON.parse(text) as Record<string, unknown>;
    } catch {
      mcpData = { raw: text };
    }
    console.log('[MAGICLINK] Status:', mcpRes.status);
    console.log('[MAGICLINK] Response:', mcpData);
    if (!mcpRes.ok) {
      return NextResponse.json({ error: (mcpData.error as string) || (mcpData.msg as string) || (mcpData.message as string) || 'Erro ao gerar magic link', debug: mcpData }, { status: 500 });
    }
    return NextResponse.json({ magicLink: (mcpData.action_link as string) || null });
  } catch (e) {
    return NextResponse.json({ error: 'Erro ao conectar com MCP', debug: String(e) }, { status: 500 });
  }
}
