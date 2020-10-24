// let initialState = {
//   users: [
  
//   ],
//   activeCategory: '',
// };
  
// // reducer : switch case
// export default (state = initialState, action) => {
//   let {type, payload} = action; // destructuring
//   // let type = action.type
//   // let payload = action.payload
//   let activeCategory; 
//   let  categories;
//   switch(type) {
//   case 'activate':
//     activeCategory = payload;
//     categories = state.categories;  
//     return {categories,activeCategory};
  
//   default:
//     return state;
//   }
// };
  
// // Actions function
// export const showCategory = (name) => {
//   return {
//     type: 'activate',
//     payload: name,
//   };
// };
  
// // export const reset = () => {
// //   return {
// //     type: 'RESET',
// //   };
// // };
  