"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Baby, ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quando devo começar a introdução alimentar?",
      answer: "A introdução alimentar deve começar aos 6 meses de idade, quando o bebê já apresenta sinais de prontidão como sentar com apoio, demonstrar interesse pela comida e perder o reflexo de protrusão da língua. Antes dos 6 meses, o leite materno ou fórmula é suficiente para suprir todas as necessidades nutricionais do bebê."
    },
    {
      question: "Como cortar os alimentos de forma segura?",
      answer: "Os cortes devem ser adequados à idade e habilidade do bebê. Para bebês de 6-9 meses, ofereça pedaços grandes (tamanho do punho do bebê) que ele possa segurar. Após 9 meses, quando desenvolver a pinça, pode oferecer pedaços menores. Evite alimentos redondos e duros que possam causar engasgo, como uvas inteiras, tomate cereja inteiro e cenoura crua."
    },
    {
      question: "Quais alimentos devo evitar no primeiro ano?",
      answer: "Evite mel (risco de botulismo), açúcar, sal em excesso, alimentos ultraprocessados, leite de vaca integral antes de 1 ano, frutos do mar crus, e alimentos que possam causar engasgo como pipoca, amendoim inteiro e balas duras. Sempre consulte o pediatra antes de introduzir alimentos potencialmente alergênicos."
    },
    {
      question: "Como identificar sinais de alergia alimentar?",
      answer: "Fique atenta a sintomas como erupções cutâneas, inchaço dos lábios ou rosto, vômitos, diarreia, dificuldade respiratória ou irritabilidade excessiva após a introdução de um novo alimento. Introduza alimentos novos um de cada vez, esperando 3-5 dias entre eles para identificar possíveis reações. Em caso de sintomas graves, procure atendimento médico imediatamente."
    },
    {
      question: "Posso oferecer temperos e especiarias?",
      answer: "Sim! Após os 6 meses, você pode usar temperos naturais como alho, cebola, salsinha, cebolinha, manjericão, orégano e outras ervas. Evite apenas pimenta e sal em excesso. Os temperos ajudam a desenvolver o paladar do bebê e tornam as refeições mais saborosas sem necessidade de sal."
    },
    {
      question: "Quantas refeições o bebê deve fazer por dia?",
      answer: "Aos 6 meses, comece com 1-2 refeições por dia. Aos 7-8 meses, aumente para 2-3 refeições. Dos 9-11 meses, ofereça 3 refeições principais mais 1-2 lanches. Após 12 meses, o bebê pode fazer 3 refeições principais e 2 lanches, sempre mantendo o leite materno ou fórmula como complemento."
    },
    {
      question: "O que fazer se o bebê recusar a comida?",
      answer: "É normal que bebês recusem alimentos, especialmente no início. Não force a alimentação. Ofereça o mesmo alimento em dias diferentes e de formas variadas (textura, temperatura, apresentação). Pode levar até 10-15 tentativas para o bebê aceitar um novo alimento. Mantenha um ambiente tranquilo durante as refeições e seja um exemplo comendo os mesmos alimentos."
    },
    {
      question: "Posso seguir o método BLW (Baby-Led Weaning)?",
      answer: "Sim, o BLW é uma abordagem válida onde o bebê se alimenta sozinho desde o início com alimentos em pedaços. É importante que o bebê tenha os sinais de prontidão (sentar sem apoio, levar objetos à boca, demonstrar interesse). Sempre supervisione as refeições e ofereça alimentos em cortes seguros. Você também pode combinar BLW com papinhas (método misto)."
    },
    {
      question: "Como garantir que o bebê está recebendo nutrientes suficientes?",
      answer: "Ofereça variedade de alimentos de todos os grupos: frutas, legumes, verduras, proteínas (carnes, ovos, leguminosas), cereais e tubérculos. O leite materno ou fórmula continua sendo importante fonte de nutrientes no primeiro ano. Acompanhe o crescimento com o pediatra através da curva de crescimento. Sinais de boa nutrição incluem ganho de peso adequado, disposição e desenvolvimento normal."
    },
    {
      question: "Preciso dar água para o bebê?",
      answer: "Antes dos 6 meses, não é necessário oferecer água se o bebê está em aleitamento materno exclusivo. Após iniciar a introdução alimentar aos 6 meses, ofereça pequenas quantidades de água filtrada ou fervida nos intervalos das refeições. Não force se o bebê recusar, pois ele ainda recebe líquidos do leite materno ou fórmula."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <Baby className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg md:text-xl font-bold text-gray-800">
                Perguntas Frequentes
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Dúvidas Comuns</h2>
          <p className="text-gray-600">
            Respostas baseadas em evidências científicas e recomendações de especialistas
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-50/50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 flex-1">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-pink-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <CardContent className="pt-0 pb-6 px-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <Card className="mt-8 shadow-lg border-0 bg-gradient-to-br from-orange-50 to-pink-50 border-l-4 border-l-orange-400">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-orange-600">⚠️ Importante:</span> As informações fornecidas são educacionais e baseadas em evidências científicas, mas não substituem a consulta com pediatra ou nutricionista. Cada bebê é único e pode ter necessidades específicas. Sempre consulte um profissional de saúde antes de fazer mudanças significativas na alimentação do seu bebê.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
