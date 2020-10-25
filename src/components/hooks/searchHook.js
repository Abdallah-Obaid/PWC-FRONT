
function useSearch(props){

  function handleSearch(users, searchName){
    let specificUser = users.filter(name =>{
      let findUser = name.username;
      return findUser.toLowerCase().includes(searchName.toLowerCase());
    });
    return specificUser;
  }

  return {handleSearch};
}

export default useSearch;