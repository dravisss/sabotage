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
  const LIST_ID = 6;

  console.log('DEBUG NEWSLETTER:', { API_URL, API_KEY: !!API_KEY, LIST_ID, ENV: process.env.NODE_ENV });

  try {
    // 1. Cria ou atualiza o contato
    // Separar nome completo em firstName e lastName
    const nameParts = name ? name.trim().split(/\s+/) : [];
    const firstName = nameParts[0] || undefined;
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : undefined;
    
    const acPayload = {
      contact: {
        email,
        firstName,
        lastName
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

    // 3. Associa o contato à lista 6 (Conteúdos da Target Teal)
    const list6Payload = {
      contactList: {
        list: '6',
        contact: String(contactId),
        status: 1
      }
    };
    console.log('NEWSLETTER: Payload enviado para AC List 6:', list6Payload);
    const list6Res = await fetch('https://targetteal.api-us1.com/api/3/contactLists', {
      method: 'POST',
      headers: {
        'Api-Token': API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(list6Payload),
    });
    const list6Data = await list6Res.json();
    console.log('NEWSLETTER: Resposta AC List 6:', { status: list6Res.status, ok: list6Res.ok, list6Data });
    // Não bloquear se já estiver na lista
    if (!list6Res.ok && !list6Data?.errors?.[0]?.title?.includes('duplicate')) {
      const errorMsg = list6Data?.errors?.[0]?.title || JSON.stringify(list6Data);
      console.error('NEWSLETTER: Erro AC List 6:', errorMsg, list6Data);
    }

    // 4. Adiciona a tag "Clube"
    // Primeiro, buscar ou criar a tag
    const tagsRes = await fetch('https://targetteal.api-us1.com/api/3/tags?search=Clube', {
      method: 'GET',
      headers: {
        'Api-Token': API_KEY!,
        'Content-Type': 'application/json',
      },
    });
    const tagsData = await tagsRes.json();
    console.log('NEWSLETTER: Resposta AC Tags:', { status: tagsRes.status, ok: tagsRes.ok, tagsData });
    
    let tagId = tagsData?.tags?.find((t: { tag: string }) => t.tag.toLowerCase() === 'clube')?.id;
    console.log('NEWSLETTER: tagId encontrado:', tagId);
    
    // Se a tag não existir, criar
    if (!tagId) {
      console.log('NEWSLETTER: Tag "Clube" não encontrada, criando...');
      const createTagRes = await fetch('https://targetteal.api-us1.com/api/3/tags', {
        method: 'POST',
        headers: {
          'Api-Token': API_KEY!,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tag: {
            tag: 'Clube',
            tagType: 'contact',
            description: 'Membros do Clube dos Agentes de Mudança'
          }
        }),
      });
      const createTagData = await createTagRes.json();
      console.log('NEWSLETTER: Resposta AC Create Tag:', { status: createTagRes.status, ok: createTagRes.ok, createTagData });
      tagId = createTagData?.tag?.id;
    }

    // Associar a tag ao contato
    if (tagId) {
      const contactTagPayload = {
        contactTag: {
          contact: String(contactId),
          tag: String(tagId)
        }
      };
      console.log('NEWSLETTER: Payload enviado para AC ContactTag:', contactTagPayload);
      const contactTagRes = await fetch('https://targetteal.api-us1.com/api/3/contactTags', {
        method: 'POST',
        headers: {
          'Api-Token': API_KEY!,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactTagPayload),
      });
      const contactTagData = await contactTagRes.json();
      console.log('NEWSLETTER: Resposta AC ContactTag:', { status: contactTagRes.status, ok: contactTagRes.ok, contactTagData });
      // Não bloquear se a tag já estiver associada
      if (!contactTagRes.ok && !contactTagData?.errors?.[0]?.title?.includes('duplicate')) {
        const errorMsg = contactTagData?.errors?.[0]?.title || JSON.stringify(contactTagData);
        console.error('NEWSLETTER: Erro AC ContactTag:', errorMsg, contactTagData);
      }
    }

    console.log('NEWSLETTER: Finalizando fluxo com sucesso.');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erro ao conectar com ActiveCampaign' }, { status: 500 });
  }
}
