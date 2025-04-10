import AdmissionProcess from '@/components/AdmissionProcess';
import HeroSub from '@/components/SharedComponent/HeroSub';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "For parents | Intellect Pro School",
};
const ForParents = () => {
  
 
  return (
    <>
      <AdmissionProcess />
    </>
  );
};

export default ForParents;