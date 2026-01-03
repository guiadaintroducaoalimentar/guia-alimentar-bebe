"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function PerfilBebe() {
  const [babyData, setBabyData] = useState({
    name: "Sofia",
    age: "8 meses",
    weight: "7.5 kg",
    feedingMethod: "Amamentação e fórmula",
    allergies: "Nenhuma conhecida",
    intolerances: ""
  });

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
                Perfil do Bebê
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="text-gray-800">Informações do Bebê</CardTitle>
            <CardDescription>
              Mantenha os dados atualizados para recomendações personalizadas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="baby-name" className="text-gray-700">Nome do Bebê</Label>
              <Input
                id="baby-name"
                value={babyData.name}
                onChange={(e) => setBabyData({...babyData, name: e.target.value})}
                className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="baby-age" className="text-gray-700">Idade</Label>
                <Input
                  id="baby-age"
                  value={babyData.age}
                  onChange={(e) => setBabyData({...babyData, age: e.target.value})}
                  className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="baby-weight" className="text-gray-700">Peso</Label>
                <Input
                  id="baby-weight"
                  value={babyData.weight}
                  onChange={(e) => setBabyData({...babyData, weight: e.target.value})}
                  className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feeding-method" className="text-gray-700">Método de Alimentação</Label>
              <Input
                id="feeding-method"
                value={babyData.feedingMethod}
                onChange={(e) => setBabyData({...babyData, feedingMethod: e.target.value})}
                className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergies" className="text-gray-700">Alergias Conhecidas</Label>
              <Input
                id="allergies"
                value={babyData.allergies}
                onChange={(e) => setBabyData({...babyData, allergies: e.target.value})}
                placeholder="Ex: amendoim, leite de vaca..."
                className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="intolerances" className="text-gray-700">Intolerâncias Alimentares</Label>
              <Input
                id="intolerances"
                value={babyData.intolerances}
                onChange={(e) => setBabyData({...babyData, intolerances: e.target.value})}
                placeholder="Ex: lactose, glúten..."
                className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white shadow-lg">
              <Save className="w-4 h-4 mr-2" />
              Salvar Alterações
            </Button>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-blue-600">💡 Dica:</span> Manter essas informações atualizadas ajuda a plataforma a fornecer recomendações mais precisas e seguras para o seu bebê.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
