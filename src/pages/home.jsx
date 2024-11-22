import Hero from "../components/hero";
import Impact from '../components/impact';
import Process from '../components/process';
import Chatbot from '../components/Chatbot';

function Home() {
  return (
    <div>
      <Hero/>
      <Impact />
      <Process />
      <div className="py-8 px-4 m-0"> 
        <img src="https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1be9b/656e01d2cc0e5b21b8f1bf3b_gasification-infographic.svg" alt="" srcset="" />
      </div>
       {/* Chatbot Integration */}

          <Chatbot />
 </div>
  );
}

export default Home;
