import AdmissionProcess from '@/components/AdmissionProcess';
import HeroSub from '@/components/SharedComponent/HeroSub';
import { Metadata } from 'next';
import StudentResultsBlock from '@/components/Results-page';

export const metadata: Metadata = {
  title: "For parents | Intellect Pro School",
};
const Results = () => {
  
 
  return (
    <>
      <StudentResultsBlock/>
    </>
  );
};

export default Results;