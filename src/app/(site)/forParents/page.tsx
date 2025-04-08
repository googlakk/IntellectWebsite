import AdmissionProcess from '@/components/AdmissionProcess';
import HeroSub from '@/components/SharedComponent/HeroSub';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "For parents | Intellect Pro School",
};
const ForParents = () => {
  
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/For parents", text: "Для родителей" },
  ];
  return (
    <>
      <HeroSub
        title="Для родителей"
        description="Познакомьтесь с простыми шагами зачисления в нашу школу: от подачи заявки до сбора документов. Узнайте, какие требования мы предъявляем к будущим ученикам, и оставьте заявку на консультацию"
        breadcrumbLinks={breadcrumbLinks}
      />
    <AdmissionProcess/>
    </>
  );
};

export default ForParents;