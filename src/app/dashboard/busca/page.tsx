"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, ArrowLeft, Search, AlertTriangle, Scissors, Droplet, Apple } from "lucide-react";
import Link from "next/link";

export default function BuscaAlimentos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState<any>(null);

  // Banco de dados simulado de alimentos
  const foodDatabase = {
    banana: {
      name: "Banana",
      ageRecommendation: "6+ meses",
      image: "🍌",
      cleaning: [
        "Lave a casca em água corrente antes de descascar",
        "Descasque completamente antes de oferecer",
        "Certifique-se de que está bem madura (casca com pintinhas marrons)"
      ],
      cuts: {
        "6-9 meses": "Ofereça metade da banana com casca parcialmente descascada para facilitar a pegada, ou em palitos grossos (tamanho do dedo)",
        "9-12 meses": "Corte em rodelas grossas (2-3cm) ou palitos menores quando o bebê desenvolver a pinça",
        "12+ meses": "Pode oferecer rodelas finas ou pedaços pequenos"
      },
      nutrition: {
        calories: "89 kcal",
        protein: "1.1g",
        carbs: "22.8g",
        fiber: "2.6g",
        potassium: "358mg",
        vitaminC: "8.7mg"
      },
      allergies: [
        "Alergia à banana é rara, mas pode ocorrer",
        "Pode causar reação cruzada em pessoas alérgicas ao látex",
        "Observe sinais como erupções cutâneas, inchaço ou desconforto gastrointestinal"
      ],
      discomforts: [
        "Pode causar constipação se consumida em excesso",
        "Banana verde pode causar gases",
        "Prefira bananas bem maduras para melhor digestão"
      ],
      benefits: [
        "Rica em potássio, importante para função muscular",
        "Boa fonte de energia natural",
        "Fácil de digerir",
        "Ajuda na formação de boas bactérias intestinais"
      ]
    },
    abacate: {
      name: "Abacate",
      ageRecommendation: "6+ meses",
      image: "🥑",
      cleaning: [
        "Lave bem a casca em água corrente",
        "Corte ao meio e remova o caroço",
        "Retire a polpa com uma colher",
        "Certifique-se de que está maduro (cede levemente à pressão)"
      ],
      cuts: {
        "6-9 meses": "Ofereça fatias grossas (1-2cm) com casca para facilitar a pegada, ou amasse levemente",
        "9-12 meses": "Corte em cubos grandes (2cm) sem casca",
        "12+ meses": "Pode oferecer em cubos menores ou amassado"
      },
      nutrition: {
        calories: "160 kcal",
        protein: "2g",
        carbs: "8.5g",
        fiber: "6.7g",
        fat: "14.7g",
        potassium: "485mg"
      },
      allergies: [
        "Alergia ao abacate é rara",
        "Pode causar reação cruzada com látex ou banana",
        "Observe sinais de desconforto oral ou erupções cutâneas"
      ],
      discomforts: [
        "Rico em gorduras, pode causar fezes amolecidas em alguns bebês",
        "Introduza gradualmente para observar tolerância"
      ],
      benefits: [
        "Rico em gorduras saudáveis essenciais para o cérebro",
        "Excelente fonte de vitaminas E e K",
        "Ajuda na absorção de vitaminas lipossolúveis",
        "Textura cremosa, fácil de consumir"
      ]
    },
    frango: {
      name: "Frango",
      ageRecommendation: "6+ meses",
      image: "🍗",
      cleaning: [
        "Lave em água corrente fria",
        "Remova pele e gordura visível",
        "Cozinhe completamente até não haver partes rosadas",
        "Temperatura interna deve atingir 75°C"
      ],
      cuts: {
        "6-9 meses": "Ofereça tiras grandes e úmidas (tamanho do dedo adulto) ou desfiado misturado com purê",
        "9-12 meses": "Corte em pedaços menores ou continue com tiras",
        "12+ meses": "Pode oferecer em cubos pequenos ou desfiado"
      },
      nutrition: {
        calories: "165 kcal",
        protein: "31g",
        carbs: "0g",
        fat: "3.6g",
        iron: "0.9mg",
        zinc: "1.3mg"
      },
      allergies: [
        "Alergia ao frango é rara, mas possível",
        "Sintomas podem incluir erupções, vômitos ou diarreia",
        "Introduza separadamente de outros alimentos novos"
      ],
      discomforts: [
        "Pode ser difícil de mastigar se muito seco",
        "Sempre ofereça bem cozido e úmido",
        "Evite pedaços muito grandes que possam causar engasgo"
      ],
      benefits: [
        "Excelente fonte de proteína de alta qualidade",
        "Rico em vitaminas do complexo B",
        "Boa fonte de ferro e zinco",
        "Importante para crescimento e desenvolvimento"
      ]
    }
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (foodDatabase[query as keyof typeof foodDatabase]) {
      setSelectedFood(foodDatabase[query as keyof typeof foodDatabase]);
    } else {
      setSelectedFood(null);
      alert("Alimento não encontrado. Tente: banana, abacate ou frango");
    }
  };

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
                Busca de Alimentos
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Search Section */}
        <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Search className="w-5 h-5 text-pink-500" />
              Pesquisar Alimento
            </CardTitle>
            <CardDescription>
              Digite o nome do alimento para ver informações detalhadas de segurança
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="Ex: banana, abacate, frango..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
              />
              <Button 
                onClick={handleSearch}
                className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              💡 Experimente buscar: banana, abacate, frango
            </p>
          </CardContent>
        </Card>

        {/* Results */}
        {selectedFood && (
          <div className="space-y-6">
            {/* Food Header */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-pink-400 to-purple-500 text-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{selectedFood.image}</div>
                  <div>
                    <h2 className="text-3xl font-bold mb-1">{selectedFood.name}</h2>
                    <p className="text-pink-50">Recomendado a partir de {selectedFood.ageRecommendation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cleaning */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Droplet className="w-5 h-5 text-blue-500" />
                  Limpeza e Manuseio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {selectedFood.cleaning.map((step: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Cuts */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Scissors className="w-5 h-5 text-purple-500" />
                  Cortes Recomendados por Idade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(selectedFood.cuts).map(([age, instruction]) => (
                  <div key={age} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 mb-2">{age}</h4>
                    <p className="text-gray-700 text-sm">{instruction}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Nutrition */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Apple className="w-5 h-5 text-green-500" />
                  Informações Nutricionais (por 100g)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(selectedFood.nutrition).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 capitalize">{key}</p>
                      <p className="font-semibold text-gray-800">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-gray-800">✨ Benefícios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {selectedFood.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Allergies */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-l-orange-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Possíveis Reações Alérgicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {selectedFood.allergies.map((allergy: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-orange-500 mt-1">⚠</span>
                      <span>{allergy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Discomforts */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-gray-800">💭 Possíveis Desconfortos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {selectedFood.discomforts.map((discomfort: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>{discomfort}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {!selectedFood && (
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm text-center py-12">
            <CardContent>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Pesquise um alimento
              </h3>
              <p className="text-gray-600">
                Digite o nome de um alimento na barra de busca acima para ver informações detalhadas
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
