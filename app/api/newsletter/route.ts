import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, honeypot } = await req.json();

  // Honeypot anti-bot check
  if (honeypot && honeypot.trim() !== '') {
    return NextResponse.json({ error: 'Bot detectado' }, { status: 400 });
  }

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
  }

  const API_URL = 'https://targetteal.api-us1.com/api/3/contacts';
  const API_KEY = process.env.ACTIVECAMPAIGN_API_KEY;
  const LIST_ID = 11;

  try {
    // 1. Cria ou atualiza o contato
    const acRes = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Api-Token': API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact: {
          email,
          firstName: name || undefined
        }
      }),
    });
    const contactData = await acRes.json();
    if (!acRes.ok || !contactData.contact || !contactData.contact.id) {
      // Tenta extrair mensagem de erro legível
      const errorMsg = contactData?.errors?.[0]?.title || JSON.stringify(contactData);
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }
    const contactId = contactData.contact.id;

    // 2. Associa o contato à lista 11
    const listRes = await fetch('https://targetteal.api-us1.com/api/3/contactLists', {
      method: 'POST',
      headers: {
        'Api-Token': API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contactList: {
          list: String(LIST_ID),
          contact: String(contactId),
          status: 1 // 1 = subscribed
        }
      }),
    });
    const listData = await listRes.json();
    if (!listRes.ok) {
      const errorMsg = listData?.errors?.[0]?.title || JSON.stringify(listData);
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    // 3. Envia magic link do Supabase
    try {
      const magicLinkRes = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/supa-magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const magicLinkData = await magicLinkRes.json();
      if (!magicLinkRes.ok) {
        // Não bloqueia o fluxo, apenas loga o erro
        console.error('Erro ao enviar magic link:', magicLinkData.error);
      }
    } catch (e) {
      // Não bloqueia o fluxo em caso de erro
      console.error('Erro ao conectar com endpoint de magic link:', e);
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erro ao conectar com ActiveCampaign' }, { status: 500 });
  }
}
