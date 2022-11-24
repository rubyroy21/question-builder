import { renderAnswer } from "../utils/renderAnswer";

import styles from "../styles/Home.module.css";

const MainContent = ({ questionBuilder }: any) => {
  console.log(questionBuilder);

  return (
    <div className={styles.mainContent}>
      {questionBuilder.map((qb: { quest: string; id: number }) => (
        <div key={qb.id}>
          <br />
          <h3>{qb.quest}</h3>
          {renderAnswer(qb)}
        </div>
      ))}
    </div>
  );
};

export default MainContent;
