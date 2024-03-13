import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "由简入深",
    Svg: require("@site/static/assets/images/undraw_docusaurus_mountain.svg").default,
    description: <>你将由浅入深学习到油猴相关的知识。</>,
  },
  {
    title: "形而上学",
    Svg: require("@site/static/assets/images/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        你将追溯一切现象的原因。
      </>
    ),
  },
  {
    title: "不行退学",
    Svg: require("@site/static/assets/images/undraw_docusaurus_react.svg").default,
    description: (
      <>
        学知识不如打王者。
      </>
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
        <h3>{title}</h3>
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
