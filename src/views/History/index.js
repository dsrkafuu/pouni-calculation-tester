import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * custom hook that parse the query string
 */
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function History() {
  const query = useQuery();
  const historyID = query.get('id');

  return <div className="history">{historyID}</div>;
}

export default History;
