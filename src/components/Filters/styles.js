import classNames from 'classnames';

const useStyles = () => {
  const container = 'flex items-center justify-center mt-6 p-2';

  return {
    container: 'grid grid-cols-7',
    checkbox: 'mt-8 p-2',
    padding: 'p-2',
    search: container,
    icon: '-ml-0.5 mr-2 h-4 w-4',
    bookmark: classNames(container, 'border-l'),
  };
};

export default useStyles;
