import classNames from 'classnames';

const useStyles = ({ disabled }) => ({
  label: 'block text-sm font-medium text-gray-700',
  button: classNames(
    'cursor-pointer relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm',
    {
      'cursor-not-allowed': disabled,
    }
  ),
  name: 'block truncate h-5',
  iconContainer: 'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
  icon: 'h-5 w-5 text-gray-400',
  optionsContainer:
    'absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm',
  active: (active) =>
    classNames('cursor-pointer select-none relative py-2 pl-8 pr-4', {
      'text-white bg-primary-600': active,
      'text-gray-900': !active,
    }),
  optionName: (selected) =>
    classNames('block truncate font-normal', {
      'font-semibold': selected,
    }),
  selectedIconContainer: (active) =>
    classNames('absolute inset-y-0 right-0 flex items-center pr-4', {
      'text-white': active,
      'text-primary-600': !active,
    }),
  selectedIcon: 'h-5 w-5',
});

export default useStyles;
