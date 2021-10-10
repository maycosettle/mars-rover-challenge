import useStyles from './styles';

const Checkbox = ({ label, description, checked, onChange }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      <div className={styles.labelContainer}>
        <label htmlFor="comments" className={styles.label}>
          {label}
        </label>
        <span id="comments-description" className={styles.span}>
          {description}
        </span>
      </div>
    </div>
  );
};

export default Checkbox;
