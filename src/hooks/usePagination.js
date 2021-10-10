import { useEffect, useState } from 'react';

export const usePagination = ({ call, params, list }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const handlePageClick = (e) => {
    const selectedPage = e.target.text;

    setPage(Number(selectedPage));
  };

  const handleNextPage = () => {
    const selectedPage = page + 1;

    setPage(selectedPage);
  };

  const handlePreviousPage = () => {
    if (page === 1) return;
    const selectedPage = page - 1;

    setPage(selectedPage);
  };

  useEffect(() => {
    if (list?.length) {
      setData(list);
    }
  }, [list]);

  useEffect(() => {
    call({ params: { ...params, page } });
  }, [page]);

  return {
    data,
    currentPage: page,
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
  };
};
