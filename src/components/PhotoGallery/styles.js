const useStyles = () => ({
  container: 'grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8',
  list: 'relative',
  imageContainer: 'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden',
  image: 'object-cover pointer-events-none group-hover:opacity-75',
  description: 'grid grid-cols-2',
  item: 'mt-2 mr-2 block text-sm font-medium text-gray-500 truncate pointer-events-none',
});

export default useStyles;
