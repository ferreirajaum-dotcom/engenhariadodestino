import { 
  Brain, 
  Flame, 
  Settings, 
  Repeat, 
  Target, 
  Ruler, 
  Map, 
  Calendar, 
  CheckCircle2, 
  Activity,
  UserX,
  Zap,
  ShieldCheck,
  TrendingUp,
  Layout
} from 'lucide-react';
import { FeatureItem, Benefit } from './types';

export const HERO_CONTENT = {
  title: "Engenharia do Destino",
  subtitle: "2026: O ano em que tudo se alinha",
  hook: "Um manual prático para construir um sistema de metas baseado em comportamento, valores e hábitos — e finalmente transformar sonhos em resultados.",
  cta: "Começar a caminhada"
};

export const PROBLEM_CONTENT = {
  title: "O problema não é você.",
  subtitle: "É o modelo que te ensinaram a usar.",
  points: [
    "Define metas genéricas",
    "Copia métodos que funcionam para outros",
    "Começa motivada",
    "E abandona no meio do caminho"
  ],
  conclusion: "Você não falha nas metas. As metas falham em respeitar quem você é."
};

export const SOLUTION_CONTENT = {
  title: "Não é motivação. É construção.",
  description: "Este e-book foi criado como um manual de engenharia pessoal, onde você aprende a projetar sua vida da mesma forma que um engenheiro projeta um sistema.",
  features: [
    { label: "Base Sólida", icon: ShieldCheck },
    { label: "Variáveis Claras", icon: Activity },
    { label: "Estrutura Adaptável", icon: Layout },
    { label: "Execução Consistente", icon: TrendingUp },
  ]
};

export const SCIENCE_FEATURES: FeatureItem[] = [
  {
    title: "Perfil Comportamental",
    subtitle: "Teoria DISC",
    description: "Identifique seu perfil predominante (D, I, S ou C) e entenda como você naturalmente age.",
    points: [
      "Entender como decide e executa",
      "Criar metas compatíveis com seu ritmo",
      "Parar de lutar contra sua natureza"
    ],
    icon: Brain,
    quote: "Você para de lutar contra sua natureza e começa a trabalhar a favor dela."
  },
  {
    title: "Valores Humanos",
    subtitle: "Teoria de Eduard Spranger",
    description: "Metas só se sustentam quando estão alinhadas aos valores corretos.",
    points: [
      "Identificar valores predominantes",
      "Eliminar metas de autossabotagem",
      "Objetivos que alimentam energia"
    ],
    icon: Flame,
    quote: "Quando valores e metas entram em conflito, o valor sempre vence."
  },
  {
    title: "Execução",
    subtitle: "Baseado em Paulo Vieira",
    description: "Desenvolva autorresponsabilidade real, sem culpa e sem vitimismo.",
    points: [
      "Clareza de escolhas",
      "Foco em ação prática",
      "Decisões sustentadas no tempo"
    ],
    icon: Settings
  },
  {
    title: "Hábitos",
    subtitle: "Duhigg & Clear",
    description: "Entenda como hábitos são formados e elimine sabotadores invisíveis.",
    points: [
      "Hábitos mínimos",
      "Garantia de progresso",
      "Metas dependendo de rotina"
    ],
    icon: Repeat
  },
  {
    title: "Foco 80/20",
    subtitle: "Princípio de Pareto",
    description: "Identifique os 20% de ações que geram 80% dos resultados.",
    points: [
      "Menos metas",
      "Mais impacto",
      "Foco estratégico real"
    ],
    icon: Target
  },
  {
    title: "Metas SMART",
    subtitle: "Clareza e Mensuração",
    description: "Transforme sonhos abstratos em coordenadas precisas.",
    points: [
      "Específicas e Mensuráveis",
      "Realistas",
      "Prazos claros"
    ],
    icon: Ruler
  }
];

export const BOOKS_SECTION = {
  headline: "Aplicando os princípios dos best-sellers que já transformaram milhões de vidas:",
  books: [
    {
      image: "https://i.postimg.cc/y8yDcKn2/Captura-de-Tela-2026-01-04-a-s-23-47-38.png",
      title: "CLAREZA E DECISÃO",
      author: "Paulo Vieira",
      alt: "O Poder da Ação - Paulo Vieira"
    },
    {
      image: "https://i.postimg.cc/k5MByHhL/Captura-de-Tela-2026-01-04-a-s-23-47-45.png",
      title: "LOOPS DE COMPORTAMENTO",
      author: "Charles Duhigg",
      alt: "O Poder do Hábito - Charles Duhigg"
    },
    {
      image: "https://i.postimg.cc/vm8cvKSk/Captura-de-Tela-2026-01-04-a-s-23-47-54.png",
      title: "FOCO NO ESSENCIAL",
      author: "Richard Koch",
      alt: "O Princípio 80/20 - Richard Koch"
    },
    {
      image: "https://i.postimg.cc/XvNpgPDh/Captura-de-Tela-2026-01-04-a-s-23-48-01.png",
      title: "OBJETIVOS CLAROS",
      author: "George T. Doran",
      alt: "SMART - George T. Doran"
    },
    {
      image: "https://i.postimg.cc/KYcR5WHS/Captura-de-Tela-2026-01-04-a-s-23-48-07.png",
      title: "PEQUENAS MUDANÇAS",
      author: "James Clear",
      alt: "Hábitos Atômicos - James Clear"
    }
  ],
  quote: "Incluindo os conceitos de Hábitos Atômicos de James Clear — porque não são os grandes saltos que mudam sua vida, são os pequenos passos consistentes."
};

export const METHODOLOGY_STEPS = [
  { level: 1, title: "Visão", desc: "Onde você quer chegar (o topo)", icon: Map },
  { level: 2, title: "Meta Anual", desc: "O foco de 2026", icon: Calendar },
  { level: 3, title: "Metas Trimestrais", desc: "Progresso real a cada 90 dias", icon: Activity },
  { level: 4, title: "Rotina Semanal", desc: "Hábitos mínimos que garantem avanço", icon: Repeat },
];

export const BENEFITS: Benefit[] = [
  { text: "Clareza total sobre quem você é", type: 'positive' },
  { text: "Metas alinhadas ao comportamento", type: 'positive' },
  { text: "Redução drástica da autossabotagem", type: 'positive' },
  { text: "Foco no que realmente importa", type: 'positive' },
  { text: "Plano realista para 2026", type: 'positive' },
  { text: "Busca fórmula mágica", type: 'negative' },
  { text: "Não quer assumir responsabilidade", type: 'negative' },
  { text: "Quer resultado sem processo", type: 'negative' },
];

export const AUTHOR = {
  title: "Quem está guiando essa caminhada",
  name: "Robert Oliveira",
  role: "Criador do método Engenharia do Destino",
  bio: `Robert Oliveira é engenheiro de software e especialista em desenvolvimento humano que transformou a própria jornada em método. Depois de anos construindo sistemas complexos, percebeu que o maior sistema que alguém precisa dominar é o da própria vida.

Unindo sua experiência em engenharia de software com anos de estudo em desenvolvimento humano, Robert criou um método que integra a Teoria DISC, a Teoria dos Valores de Spranger, e os princípios dos maiores best-sellers sobre produtividade e hábitos.

Hoje, ele guia pessoas a alinharem identidade, propósito e ação — sem fórmulas mágicas, sem atalhos, sem promessas vazias. Apenas clareza, método e passos possíveis.`,
  tagline: "Aqui, você não encontra um guru.\nEncontra um guia de trilha."
};

export const FINAL_REFLECTION = {
  title: "Última reflexão",
  verses: [
    "Sonhar é humano.",
    "Planejar é estratégico.",
    "Executar é o que muda destinos."
  ],
  promise: "Engenharia do Destino não promete facilidade.\nPromete direção, estrutura e chegada."
};