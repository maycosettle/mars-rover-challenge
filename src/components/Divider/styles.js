import classNames from 'classnames';

const useStyles = ({ className }) => ({
  divider: classNames('w-full border-b border-gray-100', className),
});

export default useStyles;
