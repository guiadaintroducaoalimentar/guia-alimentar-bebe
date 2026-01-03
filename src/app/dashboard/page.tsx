"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Search, BookOpen, User, LogOut, Home, MessageCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <Baby className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Guia Prático IA
              </h1>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Olá, Mamãe! 👋
          </h2>
          <p className="text-gray-600">
            Bem-vinda ao seu guia de introdução alimentar
          </p>
        </div>

        {/* Search Section */}
        <Link href="/dashboard/busca">
          <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                <Search className="w-5 h-5 text-pink-500" />
                Buscar Alimentos
              </CardTitle>
              <CardDescription>
                Pesquise informações sobre segurança, cortes e nutrição
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Ex: banana, abacate, frango..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
                  readOnly
                />
                <Button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link href="/dashboard/perfil">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer h-full">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Perfil do Bebê</h3>
                <p className="text-sm text-gray-600">Informações e preferências</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard/receitas">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer h-full">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Receitas</h3>
                <p className="text-sm text-gray-600">Ideias práticas e seguras</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard/faq">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer h-full">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">FAQ</h3>
                <p className="text-sm text-gray-600">Perguntas frequentes</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard/contato">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer h-full">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Contato</h3>
                <p className="text-sm text-gray-600">Fale com especialistas</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Featured Content */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-pink-400 to-purple-500 text-white">
            <CardHeader>
              <CardTitle className="text-white">🎁 Receita Gratuita</CardTitle>
              <CardDescription className="text-pink-50">
                Papinha de banana com aveia
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-pink-50 mb-4">
                Uma receita nutritiva e segura para bebês a partir de 6 meses. Fácil de preparar e rica em nutrientes!
              </p>
              <Button className="bg-white text-pink-500 hover:bg-pink-50">
                Ver Receita
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-800">📚 eBook Completo</CardTitle>
              <CardDescription>
                Mais de 50 receitas elaboradas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Acesse nosso eBook com receitas exclusivas, dicas de preparo e orientações nutricionais detalhadas.
              </p>
              <Button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white">
                Comprar eBook
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 shadow-lg">
        <div className="flex justify-around py-3">
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-pink-500">
            <Home className="w-5 h-5" />
            <span className="text-xs">Início</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-600">
            <Search className="w-5 h-5" />
            <span className="text-xs">Buscar</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-600">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs">Receitas</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-600">
            <User className="w-5 h-5" />
            <span className="text-xs">Perfil</span>
          </Button>
        </div>
      </nav>
    </div>
  );
}
