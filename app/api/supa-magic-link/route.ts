import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
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
    let mcpData: any;
    try {
      mcpData = JSON.parse(text);
    } catch {
      mcpData = { raw: text };
    }
    console.log('[MAGICLINK] Status:', mcpRes.status);
    console.log('[MAGICLINK] Response:', mcpData);
    if (!mcpRes.ok) {
      return NextResponse.json({ error: mcpData.error || mcpData.msg || mcpData.message || 'Erro ao gerar magic link', debug: mcpData }, { status: 500 });
    }
    return NextResponse.json({ magicLink: mcpData.action_link || null });
  } catch (e) {
    return NextResponse.json({ error: 'Erro ao conectar com MCP', debug: String(e) }, { status: 500 });
  }
}
