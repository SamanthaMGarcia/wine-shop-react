import React from 'react';
// import { connect } from 'react-redux';

const Wines = (props) => (
  <div>
    <h3>Wines</h3>
    {props.wines.map(wine => <h1>(wine.name)</h1>)}
  </div>
);

export default Wines;




// import WineCard from '../components/WineCard';
// import WineForm from './WineForm';
// import { getWines } from '../actions/wines';
// import './Wines.css';
//
// class Wines extends Component {
//
//   componentDidMount() {
//     this.props.getWines()
//   }
//
//   render() {
//     return (
//       <div className="WinesContainer">
//         <h1>Wines</h1>
//         {this.props.wines.map(wine => <WineCard key={wine.id} wine={wine} />)}
//         <WineForm />
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return ({
//     wines: state.wines
//   })
// }
//
//  export default connect(mapStateToProps, { getWines })(Wines);
