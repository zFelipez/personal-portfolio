import { ContentSection } from "./_components/ContentSection";
import { ContactSection } from "./_components/ContactSection";
import { HeroSection } from "./_components/HeroSection";
import { PageSectionsAdvicer } from "./_components/PageSectionsAdvicer";

export default function Home() {
  return (
    <div id="site-content">
      <HeroSection />
      <PageSectionsAdvicer />
      <ContentSection
        id="about"
        title="Sobre mim"
        content="Feliperem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, tempora ad fuga nisi eaque libero aliquid dolorum dolore laborum nulla. Itaque inventore amet non placeat. Id ullam quos natus sapiente excepturi, nostrum modi nisi esse earum ipsam laboriosam expedita beatae voluptatibus alias inventore magni at! Dolorum laborum minus error, animi beatae modi nulla incidunt exercitationem tempora sunt quia architecto. Cumque tempora natus praesentium laborum similique ex? Quis dicta quasi illum a inventore. Totam enim id commodi excepturi vitae voluptate aut sit, iste odio aliquid minima optio dolores illum assumenda officiis eaque, porro quasi culpa nemo similique obcaecati dicta! Minus, sunt?"
      />
      <ContentSection
        id="skills"
        title="Habilidades"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, tempora ad fuga nisi eaque libero aliquid dolorum dolore laborum nulla. Itaque inventore amet non placeat. Id ullam quos natus sapiente excepturi, nostrum modi nisi esse earum ipsam laboriosam expedita beatae voluptatibus alias inventore magni at! Dolorum laborum minus error, animi beatae modi nulla incidunt exercitationem tempora sunt quia architecto. Cumque tempora natus praesentium laborum similique ex? Quis dicta quasi illum a inventore. Totam enim id commodi excepturi vitae voluptate aut sit, iste odio aliquid minima optio dolores illum assumenda officiis eaque, porro quasi culpa nemo similique obcaecati dicta! Minus, sunt?"
      />
      <ContactSection />
    </div>
  );
}
