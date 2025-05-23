'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { quizQuestions } from '../lib/quiz-content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Textos introdutórios para o quiz (podem ser movidos para lib/manual-content.ts se preferir)
const quizIntroTitle = "Teste seu Potencial de Entropia Organizacional!";
const quizIntroParagraphs = [
  "Após esta jornada pelas artes obscuras da sabotagem corporativa, chegou o momento da verdade.",
  "Será que, por trás da sua fachada de profissional dedicado, existe um gênio da disfunção esperando para ser reconhecido?",
  "É hora de uma profunda autoanálise (corporativa, claro). Prepare-se para confrontar seus próprios hábitos e descobrir qual arquétipo de sabotador ressoa com sua alma (ou com seu crachá).",
  "Responda com sinceridade (ou com a sinceridade que seu cargo permite) e revele seu potencial oculto para transformar ordem em caos elegante."
];

export default function SabotageQuiz() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userScores, setUserScores] = useState<number[]>([]);
  const [progressValue, setProgressValue] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (quizQuestions.length > 0) {
      setProgressValue(((currentQuestionIndex) / quizQuestions.length) * 100);
    }
  }, [currentQuestionIndex]);

  const handleStartQuiz = () => {
    setShowIntro(false);
    setCurrentQuestionIndex(0); 
    setUserScores([]);
    setProgressValue(0);
  };

  const handleAnswerSelect = (points: number) => {
    const newScores = [...userScores, points];
    setUserScores(newScores);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults(newScores);
    }
  };

  const calculateResults = (scores: number[]) => {
    const currentTotalScore = scores.reduce((acc, score) => acc + score, 0);
    setProgressValue(100);

    router.push(`/quiz/resultado?score=${currentTotalScore}`);
  };

  if (showIntro) {
    return (
      <Card className="w-full max-w-2xl mx-auto my-8 shadow-xl bg-card font-sans">
        <CardHeader>
          <CardTitle className="text-3xl font-title text-center text-destructive">{quizIntroTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-zinc-800 text-justify">
          {quizIntroParagraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleStartQuiz} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 text-lg font-title">
            Iniciar o Teste!
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <Card className="w-full max-w-2xl mx-auto my-8 shadow-xl bg-card font-sans">
      <CardHeader>
        <CardTitle className="text-2xl font-title text-center text-destructive">
          Pergunta {currentQuestionIndex + 1} de {quizQuestions.length}
        </CardTitle>
        <Progress value={progressValue} className="w-full mt-2 [&>div]:bg-red-600" />
        <CardDescription className="text-zinc-700 pt-4 text-lg text-justify leading-relaxed">
          {currentQuestion.scenario}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start text-left h-auto whitespace-normal py-3 px-4 border-zinc-300 hover:bg-red-50 hover:border-red-500 text-zinc-800"
            onClick={() => handleAnswerSelect(option.points)}
          >
            {option.text}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
