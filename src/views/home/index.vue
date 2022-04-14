<template>
  <HeroImageOverlay>
    <div class="max-w-xl">
      <h1 class="text-accent-lightest leading-tight">vancouver’s premier Luxury car service</h1>
      <p class="text-accent-lightest mt-2">
        Professional team of chauffeurs providing exceptional services.
      </p>
      <router-link to="/cars" class="btn btn-xl mt-8">View cars</router-link>
    </div>
  </HeroImageOverlay>

  <!-- Split -->
  <Split
    title="what we do"
    description="DriveUs is Vancouver’s Premier Luxury Chauffeured Car Service. We offer the latest and most luxurious vehicles driven by professionally trained and locally knowledgeable chauffeurs.
<br/><br/>
Featuring Vancouver’s newest luxury fleet of sedans and SUVs. We provide exceptional service from our team of professional chauffeurs. Call us today and set up an account. After all, don’t you deserve the best?"
    :flip="true"
    :dark="true"
  >
    <img class="object-cover" src="@/assets/images/s560.png" alt="mercedes s560 driving on road" />
  </Split>

  <FeatureGridList
    title="Business Class"
    description="Featuring the most luxurious chauffeured automobiles Vancouver has to offer."
    :features="features"
  />
</template>

<script>
import FeatureGridList from "../../components/layouts/features/FeatureGridList.vue";
import HeroImageOverlay from "../../components/layouts/hero/HeroImageOverlay.vue";
import Header from "@/components/base/Header";
import Split from "@/components/layouts/Split.vue";

const BASE_URL = "/driveus-website";
const getIconURL = (icon) => `${BASE_URL}/icons/${icon}.svg`;
const features = [
  {
    name: "Safety",
    icon: getIconURL("guard"),
    description:
      "Your comfort and safety are our priority - our licensed drivers are rigorously screened, knowledgeable and fully insured to get you to your final destination.",
  },
  {
    name: "No Hidden Fees",
    icon: getIconURL("money"),
    description:
      "We don't have an auto-gratuity of 15-20% or a fuel surcharge of 10-15%. No peak time surcharge and no cancellation fee if cancelled within 24 hours.",
  },
  {
    name: "Live GPS Tracking",
    icon: getIconURL("pin"),
    description: "All our vehicles are equipped with Live GPS Tracking.",
  },
  {
    name: "COVID-19",
    icon: getIconURL("sparkle"),
    description:
      "Our vehicles are sanitized after each ride with scent-free wipes. Complimentary masks and hand sanitizer. No-touch thermometers. Mandatory screening of drivers daily to ensure your safety.",
  },
  {
    name: "Complimentary Fiji Water",
    icon: getIconURL("droplet"),
    description:
      "All of our vehicles come stocked with complimentary bottles of Fiji water for your enjoyment.",
  },
  {
    name: "4K HD Dash Cameras",
    icon: getIconURL("cam"),
    description:
      "All vehicles have 4K HD Dash Cameras to ensure our chauffeurs follow our safety protocols.",
  },
  {
    name: "Dedicated Winter Tires",
    icon: getIconURL("cloud"),
    description:
      "All of our vehicles are equipped with dedicated winter tires during the winter months.",
  },
  {
    name: "Onboard Wi-Fi + Power",
    icon: getIconURL("wifi"),
    description:
      "All of our vehicles are equipped with onboard Wi-Fi and power for your convenience.",
  },
];
export default {
  components: {
    Header,
    Split,
    HeroImageOverlay,
    FeatureGridList,
  },
  data() {
    return {
      features,
    };
  },
};
</script>
