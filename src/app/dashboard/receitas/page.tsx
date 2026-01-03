"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, ArrowLeft, Clock, Users, Star, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Receitas() {
  const receitaGratuita = {
    title: "Papinha de Banana com Aveia",
    description: "Receita nutritiva e segura para bebês a partir de 6 meses",
    time: "10 min",
    servings: "1 porção",
    rating: 4.8,
    ingredients: [
      "1 banana madura",
      "2 colheres de sopa de aveia em flocos finos",
      "50ml de leite materno ou fórmula",
      "1 pitada de canela (opcional, após 8 meses)"
    ],
    instructions: [
      "Amasse a banana com um garfo até obter uma consistência cremosa",
      "Adicione a aveia e misture bem",
      "Acrescente o leite materno ou fórmula aos poucos até atingir a consistência desejada",
      "Se o bebê já tiver mais de 8 meses, pode adicionar uma pitada de canela",
      "Sirva imediatamente em temperatura ambiente"
    ],
    nutritionalInfo: {
      calories: "120 kcal",
      protein: "3g",
      carbs: "25g",
      fiber: "3g"
    },
    safetyTips: [
      "Sempre teste a temperatura antes de servir",
      "Observe sinais de alergia na primeira vez",
      "A banana deve estar bem madura para facilitar a digestão",
      "Não adicione açúcar ou mel"
    ]
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
                Receitas
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Free Recipe */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl text-gray-800 mb-2">{receitaGratuita.title}</CardTitle>
                <CardDescription className="text-base">{receitaGratuita.description}</CardDescription>
              </div>
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                GRÁTIS
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{receitaGratuita.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{receitaGratuita.servings}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{receitaGratuita.rating}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Ingredients */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">Ingredientes</h3>
              <ul className="space-y-2">
                {receitaGratuita.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">Modo de Preparo</h3>
              <ol className="space-y-3">
                {receitaGratuita.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Nutritional Info */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Informações Nutricionais (por porção)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-xs text-gray-600">Calorias</p>
                  <p className="font-semibold text-gray-800">{receitaGratuita.nutritionalInfo.calories}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Proteínas</p>
                  <p className="font-semibold text-gray-800">{receitaGratuita.nutritionalInfo.protein}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Carboidratos</p>
                  <p className="font-semibold text-gray-800">{receitaGratuita.nutritionalInfo.carbs}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Fibras</p>
                  <p className="font-semibold text-gray-800">{receitaGratuita.nutritionalInfo.fiber}</p>
                </div>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-4 border border-pink-200">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>⚠️</span> Dicas de Segurança
              </h3>
              <ul className="space-y-2">
                {receitaGratuita.safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* eBook Promotion */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-pink-400 to-purple-500 text-white">
          <CardHeader>
            <CardTitle className="text-white text-2xl">📚 eBook Completo de Receitas</CardTitle>
            <CardDescription className="text-pink-50 text-base">
              Mais de 50 receitas exclusivas para cada fase do desenvolvimento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">✨ O que você vai receber:</h4>
                <ul className="space-y-1 text-sm text-pink-50">
                  <li>• 50+ receitas testadas e aprovadas</li>
                  <li>• Guia de cortes seguros por idade</li>
                  <li>• Tabela nutricional completa</li>
                  <li>• Dicas de preparo e armazenamento</li>
                  <li>• Orientações sobre alergias</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">🎁 Bônus Exclusivos:</h4>
                <ul className="space-y-1 text-sm text-pink-50">
                  <li>• Planner semanal de refeições</li>
                  <li>• Lista de compras inteligente</li>
                  <li>• Vídeos demonstrativos</li>
                  <li>• Suporte via WhatsApp</li>
                  <li>• Atualizações gratuitas</li>
                </ul>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-sm mb-2">Investimento único de apenas:</p>
              <p className="text-4xl font-bold mb-4">R$ 97,00</p>
              <Button className="bg-white text-pink-500 hover:bg-pink-50 font-semibold px-8">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Comprar Agora
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
