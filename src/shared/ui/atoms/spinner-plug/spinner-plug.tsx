import styles from './spinner-plug.module.css';

type Props = {};

export const SpinnerPlug = ({}: Props) => {
  return (
    <div className={styles.plug}>
      <div className={styles.spinner} />
    </div>
  );
};
