import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, honeypot } = body;
  console.log('NEWSLETTER: Body recebido:', body);
  console.log('NEWSLETTER: Headers:', Object.fromEntries(req.headers.entries()));

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

  console.log('DEBUG NEWSLETTER:', { API_URL, API_KEY: !!API_KEY, LIST_ID, ENV: process.env.NODE_ENV });

  try {
    // 1. Cria ou atualiza o contato
    const acPayload = {
      contact: {
        email,
        firstName: name || undefined
      }
    };
    console.log('NEWSLETTER: Payload enviado para AC:', acPayload);
    const acRes = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Api-Token': API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(acPayload),
    });
    const contactData = await acRes.json();
    console.log('NEWSLETTER: Resposta AC:', { status: acRes.status, ok: acRes.ok, contactData });
    let contactId = contactData.contact?.id;
    if (!acRes.ok || !contactId) {
      // Se for erro de duplicidade (contato já existe), buscar o contactId via GET
      const duplicate = contactData?.errors?.[0]?.code === 'duplicate';
      if (duplicate) {
        console.log('NEWSLETTER: AC erro de duplicidade, buscando contactId por email...');
        // Buscar contato existente por email
        const getRes = await fetch(`${API_URL}?email=${encodeURIComponent(email)}`, {
          method: 'GET',
          headers: {
            'Api-Token': API_KEY!,
            'Content-Type': 'application/json',
          },
        });
        const getData = await getRes.json();
        contactId = getData.contacts?.[0]?.id;
        console.log('NEWSLETTER: contactId recuperado via GET:', contactId, getData);
        if (!contactId) {
          return NextResponse.json({ error: 'Não foi possível obter o contactId existente.', debug: getData }, { status: 400 });
        }
      } else {
        const errorMsg = contactData?.errors?.[0]?.title || JSON.stringify(contactData);
        console.error('NEWSLETTER: Erro AC bloqueante:', errorMsg, contactData);
        return NextResponse.json({ error: errorMsg, debug: contactData }, { status: 400 });
      }
    }
    console.log('NEWSLETTER: contactId:', contactId);

    // 2. Associa o contato à lista 11
    const listPayload = {
      contactList: {
        list: String(LIST_ID),
        contact: String(contactId),
        status: 1 // 1 = subscribed
      }
    };
    console.log('NEWSLETTER: Payload enviado para AC List:', listPayload);
    const listRes = await fetch('https://targetteal.api-us1.com/api/3/contactLists', {
      method: 'POST',
      headers: {
        'Api-Token': API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listPayload),
    });
    const listData = await listRes.json();
    console.log('NEWSLETTER: Resposta AC List:', { status: listRes.status, ok: listRes.ok, listData });
    if (!listRes.ok) {
      const errorMsg = listData?.errors?.[0]?.title || JSON.stringify(listData);
      console.error('NEWSLETTER: Erro AC List:', errorMsg, listData);
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    // 3. Envia magic link do Supabase
    try {
      const magicLinkPayload = { email };
      console.log('NEWSLETTER: Payload enviado para magic link:', magicLinkPayload);
      const magicLinkRes = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/supa-magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(magicLinkPayload)
      });
      const magicLinkData = await magicLinkRes.json();
      console.log('NEWSLETTER: Resposta magic link:', { status: magicLinkRes.status, ok: magicLinkRes.ok, magicLinkData });
      if (!magicLinkRes.ok) {
        // Não bloqueia o fluxo, apenas loga o erro
        console.error('Erro ao enviar magic link:', magicLinkData.error);
      }
    } catch (e) {
      // Não bloqueia o fluxo em caso de erro
      console.error('Erro ao conectar com endpoint de magic link:', e);
    }
    console.log('NEWSLETTER: Finalizando fluxo com sucesso.');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erro ao conectar com ActiveCampaign' }, { status: 500 });
  }
}
