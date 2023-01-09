import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
 return (
  <div className='lmj-categories container'>
   <Container>
    <Row>
     <Col></Col>
     <Col>  <Form.Select
      value={activeCategory}
      onChange={(e) => setActiveCategory(e.target.value)}
      className='lmj-categories-select'
     >
      <option value=''>---</option>
      {categories.map((cat) => (
       <option key={cat} value={cat}>
        {cat}
       </option>
      ))}
     </Form.Select>
      <Button variant='success' className='buttonRenit' onClick={() => setActiveCategory('')}>Réinitialiser</Button>
     </Col>
     <Col></Col>
    </Row>
   </Container>
  </div>

 )
}


// function Categories() {
//  let categories = plantList.reduce(
//   (acc, plant) =>
//    acc.includes(plant.category) ? acc : acc.concat(plant.category),
//   []
//  )

//  return (
//   <div className='lmj-categories' >
//    <div className=' col-md-5 mx-auto  lmj-filtre '>
//     <Form.Select >
//      <option>---</option>
//      <option value="1">classique</option>
//      <option value="2">extérieur </option>
//      <option value="3">plante grasse</option>
//      <Button className='cart' variant="success" >Réinitialiser</Button>
//     </Form.Select>
//    </div>
//    <ul>
//     {categories.map((cat) => (
//      <div key={cat}>{cat}</div>
//     ))}
//    </ul>
//   </div>
//  )
// }


export default Categories
