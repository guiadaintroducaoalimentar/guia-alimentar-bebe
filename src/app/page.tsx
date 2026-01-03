"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Heart, Shield, Sparkles } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = () => {
    // Simulação de login/cadastro - redireciona para dashboard
    router.push("/dashboard");
  };

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-2 text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">Recuperar Senha</CardTitle>
            <CardDescription className="text-gray-600">
              Digite seu e-mail para receber instruções de recuperação
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-recovery" className="text-gray-700">E-mail</Label>
              <Input
                id="email-recovery"
                type="email"
                placeholder="seu@email.com"
                className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white shadow-lg">
              Enviar Instruções
            </Button>
            <Button
              variant="ghost"
              className="w-full text-gray-600 hover:text-gray-800"
              onClick={() => setShowForgotPassword(false)}
            >
              Voltar ao Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Baby className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Guia Prático da Introdução Alimentar
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Introdução Alimentar Segura<br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              e Baseada em Evidências
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Orientações práticas e científicas para a alimentação do seu bebê de 6 a 24 meses
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Segurança Alimentar</h3>
            <p className="text-gray-600">
              Informações sobre cortes seguros, alergias e manuseio correto dos alimentos
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Receitas Práticas</h3>
            <p className="text-gray-600">
              Receitas simples, nutritivas e adequadas para cada fase do desenvolvimento
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Suporte Especializado</h3>
            <p className="text-gray-600">
              Acesso a informações validadas por especialistas em nutrição infantil
            </p>
          </div>
        </div>

        {/* Login/Register Card */}
        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">
                {isLogin ? "Bem-vinda de Volta!" : "Comece Sua Jornada"}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {isLogin
                  ? "Acesse sua conta para continuar"
                  : "Garanta acesso completo à plataforma"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
                />
              </div>
              {isLogin && (
                <button
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-pink-500 hover:text-pink-600 font-medium transition-colors"
                >
                  Esqueceu sua senha?
                </button>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
              >
                {isLogin ? "Entrar" : "Criar Conta"}
              </Button>
              
              {!isLogin && (
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 border border-pink-200">
                  <p className="text-sm text-gray-700 text-center">
                    <span className="font-semibold text-pink-600">🎁 Oferta Especial:</span> Acesso completo por apenas{" "}
                    <span className="font-bold text-purple-600">R$ 97,00</span>
                  </p>
                </div>
              )}

              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">ou</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-gray-200 hover:bg-gray-50 text-gray-700"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Faça Seu Cadastro Agora" : "Já Tenho Conta"}
              </Button>
            </CardFooter>
          </Card>

          {/* Disclaimer */}
          <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
            <p className="text-xs text-gray-600 text-center leading-relaxed">
              <span className="font-semibold text-gray-700">⚠️ Aviso Importante:</span> Este guia oferece informações educacionais baseadas em evidências científicas. 
              Sempre consulte um pediatra ou nutricionista antes de introduzir novos alimentos. 
              A segurança e saúde do seu bebê são de responsabilidade dos pais e profissionais de saúde.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600 text-sm">
          <p>© 2024 Guia Prático da Introdução Alimentar. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
