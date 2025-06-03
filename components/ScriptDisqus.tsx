"use client";
import { useEffect } from "react";

interface ScriptDisqusProps {
  shortname: string;
  url: string;
  identifier: string;
  title: string;
}

export default function ScriptDisqus({ shortname, url, identifier, title }: ScriptDisqusProps) {
  useEffect(() => {
    // Remove script/iframe antigos
    const oldEmbed = document.getElementById("dsq-embed-scr");
    if (oldEmbed) oldEmbed.remove();
    const disqusThread = document.getElementById("disqus_thread");
    if (disqusThread) disqusThread.innerHTML = "";

    // Define config global
    interface DisqusConfigThis {
      page: {
        url: string;
        identifier: string;
        title: string;
      };
      language: string;
    }
    (window as Window & { disqus_config?: () => void }).disqus_config = function (this: DisqusConfigThis) {
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;
      this.language = "pt_BR";
    };


    // Cria script
    const d = document, s = d.createElement('script');
    s.src = `https://${shortname}.disqus.com/embed.js`;
    s.id = "dsq-embed-scr";
    s.async = true;
    s.setAttribute('data-timestamp', Date.now().toString());
    (d.head || d.body).appendChild(s);
    return () => {
      if (s.parentNode) s.parentNode.removeChild(s);
      if (disqusThread) disqusThread.innerHTML = "";
    };
  }, [shortname, url, identifier, title]);
  return null;
}
