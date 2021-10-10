import classNames from 'classnames';

const useStyles = () => {
  const a =
    'border-t-2 border-transparent pr-1 inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-700 hover:border-primary-300';
  const button = 'font-semibold';
  return {
    container: 'border-t border-gray-200 px-4 flex items-center justify-between sm:px-0',
    pageDown: {
      div: '-mt-px w-0 flex-1 flex',
      a: classNames(a, 'pr-1'),
      button,
    },
    numberContainer: 'hidden md:-mt-px md:flex',
    number:
      'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium',
    dots: 'border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium',
    pageUp: {
      div: '-mt-px w-0 flex-1 flex justify-end',
      a: classNames(a, 'pl-1'),
      button,
    },
  };
};

export default useStyles;
