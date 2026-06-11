/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ADTSection } from "./components/ADTSection";
import { CoverageMap } from "./components/CoverageMap";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 p-2 sm:p-4 flex flex-col items-center overflow-clip">
      <div className="w-full max-w-[1280px] flex flex-col gap-4 relative">
        <Header />
        <main className="flex flex-col gap-4 mt-24">
          <Hero />
          <Services />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-7 flex">
              <ADTSection />
            </div>
            <div className="lg:col-span-5 flex">
              <CoverageMap />
            </div>
          </div>
          <ContactForm />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}
