import Pagination from '@mui/material/Pagination';
import './Pagination.scss'

const Paginations = ({ count}) => {
  return ( <Pagination count={count} variant="outlined" size='large' shape="rounded" /> )
}
 
export default Paginations