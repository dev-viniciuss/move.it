import * as Styles from './styles';

const ExperienceBar = () => {
  return (
    <Styles.Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }}/>

        <span className="current-experience" style={{ left: '50%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </Styles.Container>
  );
};

export default ExperienceBar;