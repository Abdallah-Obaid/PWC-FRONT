import React from 'react';

function Paginate(props) {
  const pageNumbers = [];  
  
  for (
    let i = 1;
    i <= Math.ceil(props.users.length / props.itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="ul-paginate">
        {pageNumbers.map((number) => {
          return (
            <li className="li-paginate" key={number}>
              <a href onClick = {() => { props.setCurrentPage(number);}}>{number}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Paginate;
