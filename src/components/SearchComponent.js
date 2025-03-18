// import React, { useEffect, useState } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
// import queryString from 'query-string';

// const SearchComponent = () => {
//   const location = useLocation();
//   const history = useHistory();
//   const [searchParams, setSearchParams] = useState(queryString.parse(location.search));

//   const handleSearch = (newParams) => {
//     const updatedParams = {
//       ...searchParams,
//       ...newParams,
//     };
//     history.replace({
//       search: queryString.stringify(updatedParams),
//     });
//   };

//   useEffect(() => {
//     // Update the search parameters when the component mounts or when they change
//     handleSearch({ page: searchParams.page || 1 }); // Default to page 1 if not specified
//   }, [searchParams]);

//   return (
//     <div>
//       {/* Your search input and button here */}
//       <button onClick={() => handleSearch({ term: 'example' })}>Search</button>
//     </div>
//   );
// };

// export default SearchComponent;