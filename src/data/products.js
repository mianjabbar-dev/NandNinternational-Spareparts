// Central product data — edit all products here in one place.
// IMPORTANT: This is a showcase catalog only, not a store.
// Do not add any commercial, transactional, or stock-quantity properties.
(function () {
const categories = [
  { id: "all", label: "All Products" },
  { id: "engine-filtration", label: "Engine & Filtration" },
  { id: "braking", label: "Braking System" },
  { id: "electrical", label: "Electrical Components" },
  { id: "cooling", label: "Cooling System" },
  { id: "lighting", label: "Lighting" },
  { id: "transmission", label: "Transmission" },
];

const products = [
  {
    id: "engine-air-filter",
    name: "Automotive Engine Air Filter",
    category: "engine-filtration",
    categoryLabel: "Engine & Filtration",
    image: "public/images/products/engine-air-filter.jpg",
    alt: "Cylindrical automotive engine air filters with pleated media, stacked in rows",
    description:
      "Panel-style engine air filter with pleated media that traps dust and airborne particles before they enter the intake, helping protect the engine and maintain clean airflow.",
  },
  {
    id: "engine-oil-filter",
    name: "Automotive Engine Oil Filter",
    category: "engine-filtration",
    categoryLabel: "Engine & Filtration",
    image: "public/images/products/engine-oil-filter.jpg",
    alt: "Automotive engine oil filter, spin-on canister type",
    description:
      "Spin-on oil filter designed to remove contaminants from engine oil as it circulates, supporting clean lubrication for internal engine components.",
  },
  {
    id: "cabin-air-filter",
    name: "Automotive Cabin Air Filter",
    category: "engine-filtration",
    categoryLabel: "Engine & Filtration",
    image: "public/images/products/cabin-air-filter.jpg",
    alt: "Automotive cabin air filter, pleated panel type, shown installed in its housing",
    description:
      "Cabin air filter that filters dust, pollen and outside particles from air entering the passenger compartment through the heating and ventilation system.",
  },
  {
    id: "spark-plug",
    name: "Automotive Spark Plug",
    category: "electrical",
    categoryLabel: "Electrical Components",
    image: "public/images/products/spark-plug.jpg",
    alt: "Automotive spark plug with ceramic insulator and threaded metal shell",
    description:
      "Spark plug that delivers the ignition spark inside a petrol engine cylinder, with a ceramic insulator, metal shell and electrode gap for reliable combustion.",
  },
  {
    id: "front-disc-brake-pads",
    name: "Automotive Front Disc Brake Pads",
    category: "braking",
    categoryLabel: "Braking System",
    image: "public/images/products/front-disc-brake-pads.jpg",
    alt: "Mechanic holding an automotive front disc brake pad against a brake rotor",
    description:
      "Front disc brake pads that press against the brake rotor to slow the vehicle. Friction material is bonded to steel backing plates for consistent braking contact.",
  },
  {
    id: "brake-disc-rotor",
    name: "Automotive Brake Disc Rotor",
    category: "braking",
    categoryLabel: "Braking System",
    image: "public/images/products/brake-disc-rotor.jpg",
    alt: "Automotive brake disc rotor and caliper shown with the road wheel removed",
    description:
      "Brake disc rotor that works with the caliper and pads to convert motion into braking force while dissipating heat generated during stopping.",
  },
  {
    id: "alternator",
    name: "Automotive Alternator",
    category: "electrical",
    categoryLabel: "Electrical Components",
    image: "public/images/products/alternator.jpg",
    alt: "Automotive alternator with pulley, housing and cooling fins",
    description:
      "Engine-driven alternator that generates electrical power for vehicle systems and recharges the battery while the engine is running.",
  },
  {
    id: "radiator",
    name: "Automotive Radiator",
    category: "cooling",
    categoryLabel: "Cooling System",
    image: "public/images/products/radiator.jpg",
    alt: "Automotive radiator core with fins and tanks for engine cooling",
    description:
      "Radiator core that transfers heat from engine coolant to outside air through a network of tubes and fins, helping regulate engine operating temperature.",
  },
  {
    id: "headlight-assembly",
    name: "Automotive Headlight Assembly",
    category: "lighting",
    categoryLabel: "Lighting",
    image: "public/images/products/headlight-assembly.jpg",
    alt: "Close-up of an automotive headlight assembly with projector lens and reflector",
    description:
      "Headlight assembly combining lens, reflector and bulb housing to provide forward illumination and visibility for night and low-light driving.",
  },
  {
    id: "manual-transmission-gearbox",
    name: "Automotive Manual Transmission Gearbox",
    category: "transmission",
    categoryLabel: "Transmission",
    image: "public/images/products/manual-transmission-gearbox.jpg",
    alt: "Automotive manual transmission gearbox cutaway showing internal gear sets and casing",
    description:
      "Manual transmission gearbox that transfers engine power to the wheels through selectable gear ratios, housed in a cast casing with shafts and gear sets inside.",
  },
];

// Exposed as classic-script globals so the site also works when
// index.html is opened directly from disk (file://), where ES module
// imports are blocked by browsers. Keep this pattern when editing.
window.ASH_CATEGORIES = categories;
window.ASH_PRODUCTS = products;
})();
