import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Mes projets",
    Svg: require("@site/static/img/projet.svg").default,
    description: (
      <>
        Ici, je présentes tous les projets sur lesquels j'ai travaillée dans mon
        parcous devops, intégarnt les outils et implentant les différentes
        pratiques devops tels que le monitoring continu, l'IaC,le CI/CD...
      </>
    ),
  },
  {
    title: "Mon blog",
    Svg: require("@site/static/img/blog.svg").default,
    description: (
      <>
        Sur mon blog, je partage avec passion des articles sur les dernières
        actualités, les meilleures pratiques, et des astuces précieuses pour
        vous aider à maîtriser les technologies du Cloud et DevOps.
      </>
    ),
  },
  {
    title: "Mes Badges|certifications",
    Svg: require("@site/static/img/documentation.svg").default,
    description: (
      <>Mes réalisations, certifications et badges sons partagées ici aussi.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
