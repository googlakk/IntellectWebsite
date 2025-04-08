import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/aboutUs" },
  { label: "Наша команда", href: "/teams" },
  { label: "Для родителей", href: "/parents", submenu: [
    {
      label: "Потеряшки", href: "/google-drive"
    }
  ] },  
  { label: "Наш блог", href: "/blog" },  
  { label: "Документации", href: "/documentation" },
  { label: "Контакты", href: "/contact" },
];  