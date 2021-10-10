import { Divider } from 'components/Divider';
import useStyles from './styles';

const Header = ({ title }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>{title}</span>
      </div>
      <Divider />
    </div>
  );
};

export default Header;
