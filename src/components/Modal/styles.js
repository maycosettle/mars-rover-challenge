const useStyles = () => ({
  mainContainer: 'fixed z-10 inset-0 overflow-y-auto',
  container: 'flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0',
  overlay: 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity',
  children:
    'inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6',
});

export default useStyles;
