import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
  }

  // Chama o MCP do Supabase para gerar o magic link
  // O endpoint MCP deve estar rodando localmente ou acessível via HTTP
  // Exemplo usando fetch local (ajuste a porta se necessário)
  try {
    const mcpRes = await fetch('http://localhost:54321/auth/v1/admin/generate_link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
      },
      body: JSON.stringify({
        type: 'magiclink',
        email,
        redirect_to: 'https://sabotagemcorporativa.org',
      })
    });
    const data = await mcpRes.json();
    if (!mcpRes.ok) {
      return NextResponse.json({ error: data.error_description || JSON.stringify(data) }, { status: 400 });
    }
    return NextResponse.json({ success: true, action_link: data.action_link });
  } catch {
    return NextResponse.json({ error: 'Erro ao conectar com Supabase MCP' }, { status: 500 });
  }
}
