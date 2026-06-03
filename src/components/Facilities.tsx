import React from "react";
import { 
  Leaf, 
  Utensils, 
  GlassWater, 
  Wifi, 
  Calendar, 
  ConciergeBell, 
  Tv,
  Coffee,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { ScrollReveal, ScrollRevealContainer, ScrollRevealItem } from "./ScrollReveal";

interface Facility {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  category?: string;
}

interface FacilitiesProps {
  facilities?: Facility[];
}

const DEFAULT_FACILITIES = [
  {
    id: "f1",
    title: "Lush Kezira Gardens & Courtyard",
    description: "Relax inside our peaceful courtyard yard canopy with historic Kezira palm trees, providing refreshing shade and comfortable outdoor seating from the Dire Dawa heat.",
    iconName: "Leaf"
  },
  {
    id: "f2",
    title: "Historic Ras Restaurant",
    description: "Savor a premium blend of authentic, traditional Ethiopian hospitality dishes alongside classic continental culinary favorites in our nostalgic dining room.",
    iconName: "Utensils"
  },
  {
    id: "f3",
    title: "Traditional Outdoors Garden Bar",
    description: "Enjoy chilled beers, drinks, and Ethiopian specialty coffees at our famous garden bar—a legendary open-air social venue for locals and travelers.",
    iconName: "GlassWater"
  },
  {
    id: "f4",
    title: "Complimentary High-Speed Wi-Fi",
    description: "Stay connected effortlessly with reliable high-speed wireless network coverage across guest rooms, reception halls, and our outdoor gardens.",
    iconName: "Wifi"
  },
  {
    id: "f5",
    title: "Colonial-Style Conference Halls",
    description: "Accommodate historic summits, corporate workshops, beautiful weddings, and community banquets inside our authentic modular event rooms.",
    iconName: "Calendar"
  },
  {
    id: "f6",
    title: "24/7 Front Desk & Airport Shuttles",
    description: "Receive attentive luggage assistance, full security, on-site secure parking, and scheduled transit to Aba Tenna Dejazmach Yilma International Airport.",
    iconName: "ConciergeBell"
  }
];

const getIconComponent = (name?: string) => {
  switch (name?.toLowerCase()) {
    case "leaf":
    case "garden":
    case "gardens":
      return Leaf;
    case "utensils":
    case "restaurant":
    case "dining":
      return Utensils;
    case "glasswater":
    case "glass":
    case "bar":
    case "drinks":
      return GlassWater;
    case "wifi":
    case "internet":
      return Wifi;
    case "tv":
      return Tv;
    case "calendar":
    case "events":
    case "meetings":
      return Calendar;
    case "conciergebell":
    case "service":
    case "reception":
      return ConciergeBell;
    case "coffee":
    case "cafe":
      return Coffee;
    default:
      return Sparkles;
  }
};

export default function Facilities({ facilities }: FacilitiesProps) {
  // Use provided facilities if populated, otherwise fallback to defaults
  const activeFacilities = facilities && facilities.length > 0 ? facilities : DEFAULT_FACILITIES;

  return (
    <section id="facilities" className="py-20 md:py-28 bg-[#FFFDF9] select-none text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3 font-sans">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold text-[#9C2A2A] uppercase tracking-[0.3em]">
            <span className="w-8 h-[1px] bg-[#9C2A2A]/35" />
            <span>Premium Experience</span>
            <span className="w-8 h-[1px] bg-[#9C2A2A]/35" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-[#9C2A2A] leading-tight">
            Hotel Facilities & Comforts
          </h2>
          
          <p className="text-stone-600 text-sm md:text-base font-normal max-w-2xl mx-auto">
            From our quiet leafy Kezira palm gardens to our historic restaurant, discover the authentic comforts and timeless services that make Dire Dawa Ras Hotel your comfortable haven since 1964 EC.
          </p>
        </ScrollReveal>

        {/* Highlights Grid */}
        <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeFacilities.map((fac) => {
            const Icon = getIconComponent(fac.iconName);
            return (
              <ScrollRevealItem
                key={fac.id}
                className="bg-white rounded-[32px] border border-stone-200/60 p-8 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-6">
                  {/* Icon Panel */}
                  <div className="bg-[#9C2A2A]/10 text-[#9C2A2A] p-4 rounded-2xl w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:bg-[#9C2A2A] group-hover:text-[#D4AF37]">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#9C2A2A] transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>

                {/* Aesthetic footer marker */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span className="uppercase tracking-widest text-[#9C2A2A]/70 font-semibold">Kezira District</span>
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Complimentary</span>
                  </div>
                </div>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealContainer>

        {/* Traditional Ethos Section Banner */}
        <ScrollReveal scaleStart={0.96} className="mt-20 relative overflow-hidden bg-[#9C2A2A] rounded-[40px] p-8 md:p-12 text-white shadow-xl border border-[#D4AF37]/20 text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.25em] font-mono text-[#D4AF37] font-semibold uppercase block">
                Authentic Heritage
              </span>
              <h3 className="font-serif text-3xl font-extrabold text-white">
                Our Signature Ethiopian Hospitality Ethos
              </h3>
              <p className="text-stone-200 text-xs md:text-sm leading-relaxed">
                We believe hospitality is a sacred custom. Every facility is maintained to the highest contemporary hygiene standard while keeping our authentic 1964 EC design language intact. Enjoy cool breezes under tropical Kezira palms.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Classic Mid-Century Recipes",
                "Lush Kezira Garden Shade",
                "Reliable Backup Generators",
                "24/7 Security & Guest Assistance"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span className="text-xs font-semibold font-sans tracking-wide text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
