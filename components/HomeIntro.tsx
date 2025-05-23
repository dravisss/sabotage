import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function HomeIntro() {
  return (
    <section className="mb-12">
      <div className="space-y-6 text-zinc-800 leading-relaxed text-justify max-w-prose mx-auto font-title">
        <Alert variant="destructive" className="bg-red-50 border-red-500 text-red-700 shadow-md">
          <AlertTitle className="flex items-center gap-2 font-bold text-red-800 text-lg">
            <AlertCircle className="w-5 h-5" />
Cuidado! O conhecimento contido neste manual é volátil, corrosivo e comprovadamente eficaz.
          </AlertTitle>
          <AlertDescription className="text-red-700 mt-2">
Mantenha-o longe de estagiários otimistas incorrigíveis e, principalmente, de pessoas que possuem muito poder e não serão questionadas se usarem esse conhecimento. 
          </AlertDescription>
        </Alert>
        <p className="font-title">
Inspirado nos métodos consagrados da OSS (agência que precedeu a criação da CIA), este guia é a sua bíblia moderna para a arte sutil da desestabilização corporativa.
        </p>
        <blockquote className="border-l-4 border-red-400 pl-4 italic text-zinc-600 bg-zinc-50 font-title">
          Esqueça bombas e planos mirabolantes. Aqui, suas armas são e-mails em cópia oculta, atas de reunião intermináveis e a sagrada trindade: <b>Processos, Comitês e PowerPoints</b>.
        </blockquote>
        <p className="font-title">
Nosso objetivo é <span className="text-red-700 font-bold">demonstrar, com requintes de ironia e uma pitada de humor</span>, como as ‘boas práticas’, quando levadas ao extremo do bom senso (ou da falta dele), se tornam as ferramentas mais poderosas para o colapso elegante de qualquer organização.
        </p>
        <p className="font-semibold text-zinc-700 font-title">
epare-se para reconhecer seus próprios pecados corporativos e, quem sabe, até otimizá-los.
        </p>

      </div>
    </section>
  );
}
