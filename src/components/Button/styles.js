import classNames from 'classnames';

const useStyles = ({ rounded, color, bgColor, transparent, disabled, className }) => {
  const container = classNames(
    `inline-flex items-center justify-center ${transparent ? '' : 'shadow-sm py-2 px-6 font-semibold'} select-none`,
    `rounded-${rounded}`
  );

  const border = classNames('border', {
    'border-transparent': bgColor !== 'white' || transparent,
    'border-gray-200': bgColor === 'white',
  });

  const text = classNames('text-base sm:text-sm', {
    [`text-${color}`]: !disabled,
    'text-gray-300': disabled,
  });

  const bg = classNames('transition-colors', {
    'focus:outline-none focus:ring-2 focus:ring-offset-2': !disabled,
    [`bg-${bgColor}-500 hover:bg-${bgColor}-700 focus:ring-${bgColor}-500`]:
      bgColor !== 'white' && !transparent && !disabled,
    [`bg-${bgColor}-50 hover:bg-${bgColor}-100 focus:ring-${bgColor}-100`]:
      bgColor !== 'white' && !transparent && !disabled,
    'bg-transparent': transparent,
    'bg-white hover:bg-gray-50': bgColor === 'white' && !disabled,
    [`${transparent ? 'bg-transparent' : 'bg-gray-100'} cursor-default pointer-events-none`]: disabled,
  });

  return { button: classNames(container, border, text, bg, className) };
};

export default useStyles;
