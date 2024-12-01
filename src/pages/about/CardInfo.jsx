function CardInfo({ items }) {
  return (
    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
      <div className="p-6 bg-white dark:bg-amberBlack">
        <span className="text-blue-500 text-4xl ">{items.icon}</span>
        <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-white">
          {items.projects}
        </p>
        <h2 className="text-sm text-gray-700 dark:text-white">
          {items.projectTitle}
        </h2>
      </div>
    </div>
  );
}

export default CardInfo;
