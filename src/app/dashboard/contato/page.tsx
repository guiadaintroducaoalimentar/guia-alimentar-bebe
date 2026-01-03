"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, ArrowLeft, Send, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
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
                Contato
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Fale com Nossos Especialistas</h2>
          <p className="text-gray-600">
            Tire suas dúvidas sobre introdução alimentar com nossa equipe
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">E-mail</h3>
              <p className="text-sm text-gray-600">contato@guiapraticoIA.com.br</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
              <p className="text-sm text-gray-600">(11) 99999-9999</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Telefone</h3>
              <p className="text-sm text-gray-600">(11) 3333-3333</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800">Envie sua Mensagem</CardTitle>
            <CardDescription>
              Responderemos em até 24 horas úteis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">Nome Completo</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Seu nome"
                  className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="seu@email.com"
                  className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-gray-700">Assunto</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                placeholder="Sobre o que você gostaria de falar?"
                className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-700">Mensagem</Label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Descreva sua dúvida ou sugestão..."
                rows={6}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-400 focus:outline-none resize-none"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white shadow-lg">
              <Send className="w-4 h-4 mr-2" />
              Enviar Mensagem
            </Button>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="mt-6 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-blue-600">💡 Horário de Atendimento:</span> Nossa equipe está disponível de segunda a sexta, das 9h às 18h. Mensagens recebidas fora deste horário serão respondidas no próximo dia útil.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
